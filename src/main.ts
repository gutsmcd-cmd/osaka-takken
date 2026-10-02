import './style.css';
import { registerSW } from 'virtual:pwa-register';
import { initDb, loadState, saveState } from './db';
import { dicts, RANK_XP, type Dict, type Lang } from './i18n';
import { lessons, questions, type Question, type SubjectId } from './content';

registerSW({ immediate: true });

type Screen = 'home' | 'lessons' | 'quiz' | 'progress';
type Filter = 'all' | SubjectId;
const SUBJECTS: SubjectId[] = ['rights', 'broker', 'limits', 'tax'];

interface Persisted {
  lang: Lang;
  read: string[];
  answers: Record<string, number>;
  credited: string[];
  streak: number;
  lastDay: string;
  xp: number;
  lessonFilter: Filter;
  quizFilter: Filter;
}

interface State extends Persisted {
  screen: Screen;
  openLesson: string | null;
  quizIndex: number;
  saveOk: boolean;
  confirmReset: boolean;
}

function fresh(): Persisted {
  return {
    lang: 'ja',
    read: [],
    answers: {},
    credited: [],
    streak: 0,
    lastDay: '',
    xp: 0,
    lessonFilter: 'all',
    quizFilter: 'all',
  };
}

function isFilter(v: unknown): v is Filter {
  return v === 'all' || v === 'rights' || v === 'broker' || v === 'limits' || v === 'tax';
}

function sanitize(raw: unknown): Persisted {
  const base = fresh();
  if (!raw || typeof raw !== 'object') return base;
  const o = raw as Partial<Persisted>;
  const answers: Record<string, number> = {};
  if (o.answers && typeof o.answers === 'object') {
    for (const [k, v] of Object.entries(o.answers)) {
      if (typeof v === 'number' && v >= 0 && v <= 3) answers[k] = v;
    }
  }
  return {
    lang: o.lang === 'en' ? 'en' : 'ja',
    read: Array.isArray(o.read) ? o.read.filter((id) => typeof id === 'string') : [],
    answers,
    credited: Array.isArray(o.credited) ? o.credited.filter((id) => typeof id === 'string') : [],
    streak: typeof o.streak === 'number' && o.streak > 0 ? Math.floor(o.streak) : 0,
    lastDay: typeof o.lastDay === 'string' ? o.lastDay : '',
    xp: typeof o.xp === 'number' && o.xp > 0 ? Math.floor(o.xp) : 0,
    lessonFilter: isFilter(o.lessonFilter) ? o.lessonFilter : 'all',
    quizFilter: isFilter(o.quizFilter) ? o.quizFilter : 'all',
  };
}

const state: State = {
  ...fresh(),
  screen: 'home',
  openLesson: null,
  quizIndex: 0,
  saveOk: true,
  confirmReset: false,
};
let t: Dict = dicts.ja;
const app = document.getElementById('app')!;
let saveTimer = 0;

function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  props?: Record<string, unknown> | null,
  ...kids: (Node | string | number | null | undefined | false)[]
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  if (props) {
    for (const [k, v] of Object.entries(props)) {
      if (v === undefined || v === null || v === false) continue;
      if (k === 'class') node.className = String(v);
      else if (k.startsWith('on') && typeof v === 'function') {
        node.addEventListener(k.slice(2).toLowerCase(), v as EventListener);
      } else node.setAttribute(k, v === true ? '' : String(v));
    }
  }
  for (const kid of kids) {
    if (kid === null || kid === undefined || kid === false) continue;
    node.append(kid instanceof Node ? kid : document.createTextNode(String(kid)));
  }
  return node;
}

function textOf(item: { ja: string; en: string }): string {
  return item[state.lang];
}
function listOf(item: { ja: string[]; en: string[] }): string[] {
  return item[state.lang];
}

function dayKey(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}
function prevDay(key: string): string {
  const [y, m, d] = key.split('-').map(Number);
  const dt = new Date(y, (m || 1) - 1, d || 1);
  dt.setDate(dt.getDate() - 1);
  return dayKey(dt);
}

function markStudy(): void {
  const today = dayKey(new Date());
  if (state.lastDay === today) return;
  state.streak = state.lastDay === prevDay(today) ? state.streak + 1 : 1;
  state.lastDay = today;
}

function award(id: string, amount: number): void {
  if (state.credited.includes(id)) return;
  state.credited.push(id);
  state.xp += amount;
}

function scheduleSave(): void {
  clearTimeout(saveTimer);
  saveTimer = window.setTimeout(() => { void persist(); }, 200);
}

async function persist(): Promise<void> {
  const data: Persisted = {
    lang: state.lang,
    read: state.read,
    answers: state.answers,
    credited: state.credited,
    streak: state.streak,
    lastDay: state.lastDay,
    xp: state.xp,
    lessonFilter: state.lessonFilter,
    quizFilter: state.quizFilter,
  };
  state.saveOk = await saveState(data);
  render();
}

function setLang(lang: Lang): void {
  state.lang = lang;
  t = dicts[lang];
  document.documentElement.lang = lang === 'ja' ? 'ja' : 'en';
  document.title = t.app;
  scheduleSave();
  render();
}

function go(screen: Screen): void {
  state.screen = screen;
  state.openLesson = null;
  state.confirmReset = false;
  render();
}

function visibleLessons() {
  if (state.lessonFilter === 'all') return lessons;
  return lessons.filter((lesson) => lesson.subject === state.lessonFilter);
}
function pool(): Question[] {
  if (state.quizFilter === 'all') return questions;
  return questions.filter((q) => q.subject === state.quizFilter);
}

function openLesson(id: string): void {
  state.screen = 'lessons';
  state.openLesson = id;
  if (!state.read.includes(id)) state.read.push(id);
  award(`L:${id}`, 8);
  markStudy();
  scheduleSave();
  render();
}

function pickAnswer(q: Question, choice: number): void {
  state.answers[q.id] = choice;
  if (choice === q.answer) award(`Q:${q.id}`, 10);
  markStudy();
  scheduleSave();
  render();
}

function continueStudy(): void {
  const unread = lessons.find((lesson) => !state.read.includes(lesson.id));
  if (unread) {
    state.lessonFilter = 'all';
    openLesson(unread.id);
    return;
  }
  const next = questions.find((q) => state.answers[q.id] !== q.answer);
  state.screen = next ? 'quiz' : 'progress';
  state.quizFilter = 'all';
  state.quizIndex = next ? questions.findIndex((q) => q.id === next.id) : 0;
  state.openLesson = null;
  render();
}

function rankAt(xp: number): number {
  let index = 0;
  RANK_XP.forEach((need, i) => {
    if (xp >= need) index = i;
  });
  return index;
}

function subjectTouched(id: SubjectId): boolean {
  if (lessons.some((lesson) => lesson.subject === id && state.read.includes(lesson.id))) return true;
  return questions.some((q) => q.subject === id && state.answers[q.id] !== undefined);
}

function header(): HTMLElement {
  const jaBtn = el('button', {
    type: 'button',
    'aria-pressed': state.lang === 'ja' ? 'true' : 'false',
    onclick: () => setLang('ja'),
  }, '日本語');
  const enBtn = el('button', {
    type: 'button',
    'aria-pressed': state.lang === 'en' ? 'true' : 'false',
    onclick: () => setLang('en'),
  }, 'English');
  return el('header', { class: 'header' },
    el('div', { class: 'bar' },
      el('h1', null, t.app),
      el('div', { class: 'lang', role: 'group' }, jaBtn, enBtn),
    ),
    el('p', { class: 'en-line' }, t.enLine),
  );
}

function nav(): HTMLElement {
  const item = (screen: Screen, label: string) => el('button', {
    type: 'button',
    'aria-current': state.screen === screen ? 'page' : undefined,
    onclick: () => go(screen),
  }, label);
  return el('nav', { class: 'nav' },
    item('home', t.navHome),
    item('lessons', t.navLearn),
    item('quiz', t.navCheck),
    item('progress', t.navLog),
  );
}

function filters(current: Filter, onPick: (f: Filter) => void): HTMLElement {
  const chip = (id: Filter, label: string) => el('button', {
    type: 'button',
    'aria-pressed': current === id ? 'true' : 'false',
    onclick: () => onPick(id),
  }, label);
  return el('div', { class: 'filters' },
    chip('all', t.all),
    ...SUBJECTS.map((id) => chip(id, t.subjects[id])),
  );
}

function homeView(): HTMLElement[] {
  const started = state.read.length > 0 || Object.keys(state.answers).length > 0;
  const pillar = (id: SubjectId, title: string, body: string) => el('button', {
    class: 'pillar',
    type: 'button',
    onclick: () => {
      state.lessonFilter = id;
      state.openLesson = null;
      state.screen = 'lessons';
      render();
    },
  }, el('b', null, title), el('span', null, body));
  return [
    el('p', { class: 'hero' }, t.hero),
    el('p', { class: 'note' }, t.national),
    el('section', { class: 'card' },
      el('h2', null, t.pillarsTitle),
      el('div', { class: 'pillars' },
        pillar('rights', t.pillarRights, t.pillarRightsBody),
        pillar('broker', t.pillarBroker, t.pillarBrokerBody),
        pillar('limits', t.pillarLimits, t.pillarLimitsBody),
        pillar('tax', t.pillarTax, t.pillarTaxBody),
      ),
    ),
    el('button', {
      class: 'btn primary block',
      type: 'button',
      onclick: continueStudy,
    }, started ? t.continue : t.start),
    el('section', { class: 'card warn' },
      el('p', null, t.disclaimer),
    ),
    el('p', { class: 'note' }, t.quiet),
  ];
}

function lessonsView(): HTMLElement[] {
  const open = lessons.find((lesson) => lesson.id === state.openLesson);
  if (open) {
    const list = visibleLessons();
    const at = list.findIndex((lesson) => lesson.id === open.id);
    const next = at >= 0 ? list[at + 1] : undefined;
    return [
      el('button', { class: 'btn', type: 'button', onclick: () => { state.openLesson = null; render(); } }, t.back),
      el('article', { class: 'card prose' },
        el('p', { class: 'kicker' }, t.subjects[open.subject]),
        el('h2', null, textOf(open.title)),
        ...listOf(open.paragraphs).map((p) => el('p', null, p)),
      ),
      next
        ? el('button', { class: 'btn primary block', type: 'button', onclick: () => openLesson(next.id) }, t.nextCard)
        : el('button', { class: 'btn block', type: 'button', onclick: () => go('quiz') }, t.navCheck),
    ];
  }
  const cards = visibleLessons().map((lesson) => {
    const on = state.read.includes(lesson.id);
    return el('article', { class: 'card' },
      el('button', { class: 'lesson', type: 'button', onclick: () => openLesson(lesson.id) },
        el('span', { class: on ? 'mark on' : 'mark' }),
        el('span', null,
          el('span', { class: 's' }, `${t.subjects[lesson.subject]} · ${on ? t.read : t.unread}`),
          el('span', { class: 't' }, textOf(lesson.title)),
        ),
      ),
    );
  });
  return [
    el('p', { class: 'note' }, t.lessonsLead),
    filters(state.lessonFilter, (f) => { state.lessonFilter = f; scheduleSave(); render(); }),
    ...cards,
  ];
}

function quizView(): HTMLElement[] {
  const list = pool();
  if (state.quizIndex >= list.length) {
    const seen = list.filter((q) => state.answers[q.id] !== undefined);
    const ok = seen.filter((q) => state.answers[q.id] === q.answer);
    const missed = list.find((q) => state.answers[q.id] !== undefined && state.answers[q.id] !== q.answer);
    return [
      el('p', { class: 'note' }, t.checkLead),
      filters(state.quizFilter, (f) => { state.quizFilter = f; state.quizIndex = 0; scheduleSave(); render(); }),
      el('section', { class: 'card' },
        el('h2', null, t.doneTitle),
        el('p', null, t.doneBody(ok.length, seen.length)),
        missed
          ? el('button', {
            class: 'btn primary block',
            type: 'button',
            onclick: () => { state.quizIndex = list.findIndex((q) => q.id === missed.id); render(); },
          }, t.toWrong)
          : el('p', { class: 'note' }, t.noWrong),
      ),
    ];
  }
  const q = list[state.quizIndex];
  const picked = state.answers[q.id];
  const answered = picked !== undefined;
  const choices = listOf(q.choices);
  const whys = listOf(q.why);
  const buttons = choices.map((label, i) => {
    const cls = ['choice'];
    if (answered && i === q.answer) cls.push('good');
    if (answered && i === picked && i !== q.answer) cls.push('bad');
    return el('button', {
      class: cls.join(' '),
      type: 'button',
      disabled: answered,
      onclick: () => pickAnswer(q, i),
    }, el('span', { class: 'n' }, String(i + 1)), el('span', null, label));
  });
  let feedback: HTMLElement | null = null;
  if (answered) {
    const good = picked === q.answer;
    feedback = el('section', { class: good ? 'feedback card good' : 'feedback card bad' },
      el('p', { class: 'kicker' }, good ? t.correct : t.wrong),
      el('p', null, whys[picked] ?? ''),
      good ? null : el('p', null, `${t.hold}: ${whys[q.answer]}`),
    );
  }
  const out: HTMLElement[] = [
    el('p', { class: 'note' }, t.checkLead),
    filters(state.quizFilter, (f) => { state.quizFilter = f; state.quizIndex = 0; scheduleSave(); render(); }),
    el('section', { class: 'card' },
      el('p', { class: 'kicker' }, `${t.subjects[q.subject]} · ${t.qProgress(state.quizIndex + 1, list.length)}`),
      el('h2', null, textOf(q.stem)),
    ),
    ...buttons,
  ];
  if (feedback) out.push(feedback);
  out.push(el('div', { class: 'row' },
      el('button', {
        class: 'btn',
        type: 'button',
        disabled: state.quizIndex === 0,
        onclick: () => { state.quizIndex -= 1; render(); },
      }, t.prevQ),
      el('button', {
        class: 'btn primary',
        type: 'button',
        disabled: !answered,
        onclick: () => { state.quizIndex += 1; render(); },
      }, t.nextQ),
    ));
  return out;
}

function progressView(): HTMLElement[] {
  const rank = rankAt(state.xp);
  const next = RANK_XP[rank + 1];
  const floor = RANK_XP[rank] ?? 0;
  const span = next === undefined ? 1 : Math.max(1, next - floor);
  const into = next === undefined ? 1 : Math.min(1, (state.xp - floor) / span);
  const fill = el('div', { class: 'bar-fill' });
  fill.style.width = `${Math.round(into * 100)}%`;
  const blocks = SUBJECTS.map((id) => {
    const ls = lessons.filter((lesson) => lesson.subject === id);
    const read = ls.filter((lesson) => state.read.includes(lesson.id)).length;
    const qs = questions.filter((q) => q.subject === id);
    const got = qs.filter((q) => state.answers[q.id] === q.answer).length;
    return el('section', { class: 'card' },
      el('div', { class: 'subhead' },
        el('h2', null, t.subjects[id]),
        el('span', { class: 'tag' }, subjectTouched(id) ? t.touched : t.notTouched),
      ),
      el('p', { class: 'note' }, `${t.lessonsOf} ${read} / ${ls.length}`),
      el('p', { class: 'note' }, `${t.checksOf} ${got} / ${qs.length}`),
    );
  });
  const seen = questions.filter((q) => state.answers[q.id] !== undefined).length;
  const got = questions.filter((q) => state.answers[q.id] === q.answer).length;
  return [
    el('p', { class: 'note' }, t.logLead),
    el('section', { class: 'card' },
      el('p', { class: 'kicker' }, t.streak),
      el('p', { class: 'big' }, `${state.streak}`, el('span', { class: 'note' }, ` ${t.streakUnit}`)),
      el('p', { class: 'note' }, t.streakHint),
    ),
    el('section', { class: 'card' },
      el('p', { class: 'kicker' }, t.rank),
      el('p', { class: 'big' }, t.ranks[rank] ?? ''),
      el('div', { class: 'bar-track' }, fill),
      el('p', { class: 'note' }, next === undefined
        ? t.maxRank
        : `${t.nextRank}: ${next - state.xp}`),
    ),
    ...blocks,
    el('section', { class: 'card' },
      el('div', { class: 'stat' }, el('span', null, t.answered), el('b', null, String(seen))),
      el('div', { class: 'stat' }, el('span', null, t.understood), el('b', null, String(got))),
      el('p', { class: 'note' }, t.notMock),
    ),
    el('button', { class: 'btn block', type: 'button', onclick: () => { state.confirmReset = true; render(); } }, t.reset),
  ];
}

function resetDialog(): HTMLElement | null {
  if (!state.confirmReset) return null;
  return el('div', { class: 'modal-back', role: 'dialog' },
    el('section', { class: 'card modal' },
      el('p', null, t.resetConfirm),
      el('div', { class: 'row' },
        el('button', { class: 'btn', type: 'button', onclick: () => { state.confirmReset = false; render(); } }, t.cancel),
        el('button', {
          class: 'btn primary',
          type: 'button',
          onclick: () => {
            const lang = state.lang;
            Object.assign(state, fresh(), {
              lang,
              screen: 'progress' as Screen,
              openLesson: null,
              quizIndex: 0,
              confirmReset: false,
            });
            t = dicts[lang];
            scheduleSave();
            render();
          },
        }, t.reset),
      ),
    ),
  );
}

function render(): void {
  const body = state.screen === 'home'
    ? homeView()
    : state.screen === 'lessons'
      ? lessonsView()
      : state.screen === 'quiz'
        ? quizView()
        : progressView();
  const nodes: Node[] = [];
  if (!state.saveOk) nodes.push(el('div', { class: 'save-banner' }, t.saveFail));
  nodes.push(header(), el('main', null, ...body), nav());
  const dialog = resetDialog();
  if (dialog) nodes.push(dialog);
  app.replaceChildren(...nodes);
}

async function boot(): Promise<void> {
  const ok = await initDb('osaka-takken');
  const loaded = ok ? sanitize(await loadState<unknown>(null)) : fresh();
  Object.assign(state, loaded);
  state.saveOk = ok;
  t = dicts[state.lang];
  document.documentElement.lang = state.lang === 'ja' ? 'ja' : 'en';
  document.title = t.app;
  render();
}

void boot();
