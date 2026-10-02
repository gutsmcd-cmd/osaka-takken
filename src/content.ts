export type { SubjectId, LessonSubject, Localized, Lesson, Question } from './content-lessons';
export { lessons } from './content-lessons';
import { lessons } from './content-lessons';
import type { SubjectId, Question } from './content-lessons';
import { questionsA } from './content-questions-a';
import { questionsB } from './content-questions-b';

export const questions: Question[] = [...questionsA, ...questionsB];

function check(): void {
  const ids = new Set<string>();
  for (const lesson of lessons) {
    if (ids.has(lesson.id)) throw new Error(lesson.id);
    ids.add(lesson.id);
    if (lesson.paragraphs.ja.length === 0 || lesson.paragraphs.ja.length !== lesson.paragraphs.en.length) {
      throw new Error('para ' + lesson.id);
    }
  }
  const counts: Record<SubjectId, number> = { rights: 0, broker: 0, limits: 0, tax: 0 };
  for (const q of questions) {
    if (ids.has(q.id)) throw new Error(q.id);
    ids.add(q.id);
    for (const lang of ['ja', 'en'] as const) {
      if (q.choices[lang].length !== 4 || q.why[lang].length !== 4) throw new Error('len ' + q.id);
    }
    if (q.answer < 0 || q.answer > 3) throw new Error('ans ' + q.id);
    counts[q.subject] += 1;
  }
  if (questions.length < 20) throw new Error('count');
  if (counts.rights < 5 || counts.broker < 5 || counts.limits < 5 || counts.tax < 5) throw new Error('spread');
}

check();
