import type { Question } from './content-lessons';

export const questionsA: Question[] = [
  {
    id: 'Q01', subject: 'broker', answer: 1,
    stem: {
      ja: '免許が要るのは、次のどれか。',
      en: 'Which of these needs the brokerage license?',
    },
    choices: {
      ja: [
        '街を案内するツアーガイドの仕事そのもの',
        '土地や建物の売買や賃貸の仲介を、事業として行うこと',
        '自分の持ち家を、自分で人に貸すこと',
        '契約書の翻訳だけを仕事にすること',
      ],
      en: [
        'Working as a tour guide who shows the neighborhood',
        'Brokering sales or leases of land and buildings as a business',
        'Leasing out a home you yourself own',
        'Only translating contracts',
      ],
    },
    why: {
      ja: [
        '街を案内すること自体は、売買や賃貸の仲介ではない。',
        '仲介を業として行うなら、その事業者に免許が要る。',
        '自分の物件を貸すだけでは、原則として宅建業にあたらない。',
        '翻訳は、契約の当事者を代理したり媒介したりすることとは別である。',
      ],
      en: [
        'Showing the neighborhood is not brokerage of a sale or a lease.',
        'Brokering as a business is what the license is for.',
        'Leasing out your own place is, as a rule, not the licensed business.',
        'Translation is not the same as representing a party or brokering the deal.',
      ],
    },
  },
  {
    id: 'Q02', subject: 'broker', answer: 1,
    stem: {
      ja: '事務所が大阪府内にだけある業者の免許は、誰が出すか。',
      en: 'Who licenses a broker whose only office is in Osaka Prefecture?',
    },
    choices: {
      ja: [
        '大阪市の区長',
        '大阪府知事',
        '必ず国土交通大臣',
        'このアプリ',
      ],
      en: [
        'A ward mayor in Osaka City',
        'The governor of Osaka Prefecture',
        'Always the national minister',
        'This app',
      ],
    },
    why: {
      ja: [
        '区長が出す宅建業の免許ではない。',
        '事務所が一つの都道府県だけなら、その知事の免許である。',
        '大臣の免許は、事務所が二つ以上の都道府県にあるときである。',
        'アプリは免許を出さない。勉強の記録も、資格ではない。',
      ],
      en: [
        'A ward mayor does not issue this license.',
        'One prefecture means that governor’s license.',
        'The minister licenses a business with offices in two or more prefectures.',
        'The app does not license anyone. A saved score is not a qualification.',
      ],
    },
  },
  {
    id: 'Q03', subject: 'broker', answer: 1,
    stem: {
      ja: '免許は取ったが、営業保証金の供託も保証協会への加入もまだない。難波の物件の広告を出してよいか。',
      en: 'The license is in, but there is no deposit and no guarantee association yet. May the office advertise a Namba listing?',
    },
    choices: {
      ja: [
        'よい。免許があれば広告できる',
        'いけない。供託か協会への加入が済むまで、広告も業務も始められない',
        'よい。来店した人が宅建士なら問題ない',
        'よい。紙のチラシなら、ネットでなければよい',
      ],
      en: [
        'Yes. A license is enough to advertise',
        'No. Until the deposit or the association is in place, it cannot advertise or start business',
        'Yes, if the visitor is a takken specialist',
        'Yes, if it is only a paper flyer and not online',
      ],
    },
    why: {
      ja: [
        '免許のあとに、供託か保証協会が要る。免許だけでは業務を始められない。',
        'お客への弁済に備える手続きが済むまで、広告を出さない。',
        '相手が宅建士かどうかで、開業前の供託は省略できない。',
        'チラシもネットも広告である。媒体では分かれない。',
      ],
      en: [
        'After the license, the deposit or an association is still required.',
        'No advertising until the repayment safeguard is actually in place.',
        'The visitor’s own qualification does not skip the office’s deposit.',
        'A flyer is still an advertisement. Paper or online does not change it.',
      ],
    },
  },
  {
    id: 'Q04', subject: 'broker', answer: 1,
    stem: {
      ja: '天王寺のマンションで、契約の前に重要事項を説明できるのは誰か。',
      en: 'Who may explain the important matters before a Tennoji condo contract?',
    },
    choices: {
      ja: [
        'その場にいる従業員なら誰でも',
        '宅建士',
        '買主側に翻訳者がいれば、その翻訳者',
        '売主が自分で読めば、説明は省略してよい',
      ],
      en: [
        'Any employee who happens to be there',
        'A takken specialist',
        'The buyer’s translator, if there is one',
        'No one, if the seller can read the file alone',
      ],
    },
    why: {
      ja: [
        '説明は、在籍している人なら誰でもよい、という仕事ではない。',
        '契約の前に重要事項を説明するのは宅建士である。',
        '翻訳は理解の助けになるが、説明義務の代わりにはならない。',
        '相手が読めることと、業者が宅建士に説明させる義務は別である。',
      ],
      en: [
        'Being on the staff is not what authorizes the explanation.',
        'A takken specialist explains the important matters before the contract.',
        'Translation can help understanding. It does not replace the duty to explain.',
        'The other person being able to read is separate from the broker’s duty.',
      ],
    },
  },
  {
    id: 'Q05', subject: 'broker', answer: 1,
    stem: {
      ja: '難波のワンルームを見に来た人に、駅まで何分かと聞かれた。広告の下書きは徒歩3分、自分で歩くと12分だった。何と言うか。',
      en: 'A visitor asks how long the walk is from a Namba one-room to the station. The draft ad says 3 minutes. You walked it in 12. What do you say?',
    },
    choices: {
      ja: [
        '下書きどおり3分と言う。案内は短く伝えるものだから',
        '測った12分を伝え、3分とは言わない',
        '「ゲーム感覚で近い」とだけ言う',
        '徒歩時間は、法律上、何があっても答えてはいけない',
      ],
      en: [
        'Say 3 minutes, because a showing should sound short',
        'Say the 12 minutes you walked, and do not say 3',
        'Only say it feels close, like a game',
        'The law forbids answering any question about walking time',
      ],
    },
    why: {
      ja: [
        '確かでない数字を短く見せるのは、誇張した案内である。',
        '言ってよいのは調べた事実である。下書きが違っていれば、下書きを直す。',
        '感覚の言葉で、実際の距離をぼかさない。',
        '調べた事実は伝えてよい。偽りの短さがいけない。',
      ],
      en: [
        'A shorter number you did not check is an exaggerated showing.',
        'You may say the fact you checked. If the draft is wrong, the draft changes.',
        'A vague feeling does not replace the walk you measured.',
        'A checked fact is allowed. A false short time is not.',
      ],
    },
  },
  {
    id: 'Q06', subject: 'broker', answer: 1,
    stem: {
      ja: '宅建業者が売主の建物を、難波のカフェに呼んで契約した。買主は宅建業者ではない。告知書面を受け取った。この撤回について正しいのはどれか。',
      en: 'A broker-seller invited a buyer, who is not a broker, to sign at a Namba cafe. The buyer received the written cooling-off notice. Which statement is right?',
    },
    choices: {
      ja: [
        '事務所の店頭で自分から申し込んだ場合も、同じように撤回できる',
        '告知書面を受け取った日から8日を経過するまで、書面で撤回できる。履行に着手したあとはできない',
        '8日を過ぎても、口頭でいつでも撤回できる',
        '賃貸のワンルームをカフェで内見したときも、同じ撤回ができる',
      ],
      en: [
        'The same withdrawal applies to an application the buyer made at the office',
        'They can withdraw in writing until eight days have passed from receiving the notice, but not after they start performance',
        'After the eight days, they can still withdraw orally at any time',
        'The same withdrawal applies to viewing a one-room lease at a cafe',
      ],
    },
    why: {
      ja: [
        '事務所などでの申込みは、この撤回の対象ではない。',
        'カフェなど事務所外で、売主が業者、買主が業者でない売買が、この撤回の場面である。',
        '期間を過ぎた口頭の撤回、とはこの制度はなっていない。撤回は書面である。',
        'この撤回は、業者が売主の売買の話である。賃貸の内見には使わない。',
      ],
      en: [
        'An application at the office is outside this withdrawal.',
        'This is the off-site sale where the seller is a broker and the buyer is not.',
        'It is not an oral right that survives the period. Withdrawal is in writing.',
        'Cooling-off here is about a broker selling. It is not for viewing a lease.',
      ],
    },
  },
  {
    id: 'Q07', subject: 'rights', answer: 1,
    stem: {
      ja: '梅田のマンションを見て、買いたい人が「いいですね」と言った。代金も、いつ引き渡すかも決まっていない。売買契約は成立しているか。',
      en: 'At an Umeda condo, the visitor says “I like it.” Price and handover are not agreed. Is there a sale?',
    },
    choices: {
      ja: [
        '成立している。気に入った時点で契約になる',
        '成立していない。代金や引渡しなど、中身が合って初めて成立する',
        '成立している。大阪の物件は口頭だけで必ず成立する',
        '成立している。宅建士が同じ部屋にいたから',
      ],
      en: [
        'Yes. Liking it is the contract',
        'No. A sale is formed when the terms, including price and handover, meet',
        'Yes. In Osaka an oral remark is always a sale',
        'Yes, because a takken specialist was in the room',
      ],
    },
    why: {
      ja: [
        '好意を示しただけでは、売買の中身は決まっていない。',
        '契約は、双方の意思が中身について合ったときに成立する。',
        '大阪かどうかで、契約の成立は変わらない。試験も全国共通である。',
        '宅建士が居合わせたことは、代金の合意そのものではない。',
      ],
      en: [
        'Liking a place does not settle the terms of a sale.',
        'The contract is formed when both sides agree on the terms.',
        'Osaka does not have a separate rule of formation. The exam is national too.',
        'A specialist standing nearby is not an agreement on price.',
      ],
    },
  },
  {
    id: 'Q08', subject: 'rights', answer: 1,
    stem: {
      ja: '売買契約は済んだが、まだ所有権の登記をしていない。正しい説明はどれか。',
      en: 'The sale is signed, but ownership is not registered yet. Which explanation is right?',
    },
    choices: {
      ja: [
        '登記の前は、売主と買主の間でも契約は無効である',
        '当事者の間では有効でも、登記がなければ、原則として第三者に自分の権利を主張できない',
        '登記は、税金が安い年だけでよい',
        '難波の物件に限って、登記は不要である',
      ],
      en: [
        'Until registration, the contract is void even between seller and buyer',
        'It is valid between the parties, but without registration you generally cannot assert the right against a third person',
        'Registration is needed only in a year when tax is low',
        'Registration is unnecessary, but only for property in Namba',
      ],
    },
    why: {
      ja: [
        '当事者の間の契約は、登記の前でも有効である。',
        '第三者への主張には、原則として登記が要る。後回しにしてよい、とは案内しない。',
        '税金の安さで、登記の要否は決まらない。',
        '場所が難波でも、登記の原則は変わらない。',
      ],
      en: [
        'Between the parties, the contract is valid before registration.',
        'Against a third person, registration is generally required. Do not treat it as optional forever.',
        'A cheaper tax year does not decide whether you need registration.',
        'Namba does not drop the registration rule.',
      ],
    },
  },
  {
    id: 'Q09', subject: 'rights', answer: 1,
    stem: {
      ja: '難波のワンルームを普通に住んで退去する。壁紙の日焼けと、家具を置いただけの床のへこみがある。この通常の損耗を、借り主が原状回復として全額負担するか。',
      en: 'A tenant leaves a Namba one-room after ordinary living. Sun-faded paper, and a dent where furniture stood. Must they pay to restore all of that ordinary wear?',
    },
    choices: {
      ja: [
        'する。退去時は新築同様に戻すのが原則',
        'しない。通常の使用による損耗や年月の変化は、借り主の負担にしない',
        'する。ゲーム機があった部屋は、傷の種類を問わず全額借り主の負担',
        'しない。敷金からは、どのような傷も一切差し引けない',
      ],
      en: [
        'Yes. Move-out means restoring a brand-new condition',
        'No. Wear from ordinary use, and aging, are not the tenant’s to restore',
        'Yes. A room that had a game console is entirely the tenant’s cost, whatever the mark',
        'No. Nothing, of any kind, may ever be deducted from the deposit',
      ],
    },
    why: {
      ja: [
        '新築同様に戻す、は通常の損耗にまで及ばない。',
        '通常の使用と年月の変化は、借り主の原状回復に含めない。',
        'ゲームをしていたこと自体では、すべての傷が借り主の負担にはならない。',
        '未払家賃や、通常を超える傷は差し引きの対象になり得る。一切差し引けない、ではない。',
      ],
      en: [
        'Ordinary wear is not restored to brand-new at the tenant’s cost.',
        'Ordinary use and aging stay off the tenant’s restoration bill.',
        'Owning a console does not make every mark the tenant’s.',
        'Unpaid rent, and damage beyond ordinary use, can still be deducted. “Nothing, ever” is too wide.',
      ],
    },
  },
  {
    id: 'Q10', subject: 'rights', answer: 1,
    stem: {
      ja: '貸主が「定期借家なので期間が来たら必ず出てもらう。説明は口頭で済ませた」と言う。書面の契約も、事前の書面説明もない。案内ではどう扱うか。',
      en: 'A landlord says a lease is fixed-term, so the tenant must leave, and that an oral explanation was enough. There is no written contract and no prior written explanation. What do you do at the showing?',
    },
    choices: {
      ja: [
        '口頭で足りるので、「必ず終わる」と借りる人に言ってよい',
        '書面の契約と事前の書面説明がなければ、「更新がない」とは案内しない',
        '定期借家は大阪では使えないので、話題にしない',
        'ツアーガイドが口頭で説明すれば、定期借家として扱ってよい',
      ],
      en: [
        'Oral is enough, so tell the tenant it definitely ends',
        'Without the written contract and the prior written explanation, do not say it will not renew',
        'Fixed-term leases cannot be used in Osaka, so drop the subject',
        'A tour guide’s oral explanation is enough to treat it as fixed-term',
      ],
    },
    why: {
      ja: [
        '口頭だけでは、更新がない契約としては案内できない。',
        '定期借家は、書面と事前の書面説明があって初めて、その効果を説明できる。',
        '大阪だから使えない、というルールではない。全国共通の制度である。',
        '案内の仕事や口頭説明は、書面の要件の代わりにならない。',
      ],
      en: [
        'An oral remark is not enough to promise that the lease will not renew.',
        'You explain the no-renewal effect only when the writing and the prior written explanation are there.',
        'Osaka is not barred from fixed-term leases. The rule is national.',
        'A guide’s spoken summary does not replace the required writing.',
      ],
    },
  },
  {
    id: 'Q11', subject: 'rights', answer: 1,
    stem: {
      ja: '友人同士で、売る気はないのに、見せるためだけの売買契約書を作った。双方が仮だと知っている。当事者の間でこの契約はどうなるか。',
      en: 'Two friends sign a sale contract only for show. Both know it is fake. Between them, what is the contract?',
    },
    choices: {
      ja: [
        '書面にした以上、必ず有効',
        '当事者の間では無効である。事情を知らない善意の第三者には、無効を主張できない場合がある',
        '大阪で作った書面は、内容にかかわらず有効',
        '翻訳した時点で有効になる',
      ],
      en: [
        'Valid, because it is in writing',
        'Void between them. They may not assert that against a good-faith third person who did not know',
        'Valid because it was made in Osaka, whatever it says',
        'Valid once someone translates it',
      ],
    },
    why: {
      ja: [
        '双方が仮だと知っている見せかけは、書面でも当事者間では無効である。',
        '当事者間は無効でも、善意の第三者が出てくると、無効を主張できない場合がある。',
        '作った場所が大阪でも、仮の契約が有効にはならない。',
        '翻訳は、仮の意思を本物の売買にはしない。',
      ],
      en: [
        'A writing both sides know is fake is still void between them.',
        'Void between the parties, and still possibly not assertable against an unknowing good-faith third person.',
        'Making it in Osaka does not validate a pretend sale.',
        'A translation does not turn a fake intention into a real sale.',
      ],
    },
  },
  {
    id: 'Q12', subject: 'rights', answer: 1,
    stem: {
      ja: '売主は宅建業者、買主は宅建業者ではない。雨漏りを知りながら、「契約不適合の責任は一切負わない」と入れた。この特約をどう見るか。',
      en: 'The seller is a broker, the buyer is not. The seller knew of a leak and wrote “we accept no liability at all for non-conformity.” How do you treat that clause?',
    },
    choices: {
      ja: [
        '書いてあれば、どんな内容でも有効',
        '責任を一切負わない、という買主に不利な特約は無効である',
        '買主が翻訳できれば有効',
        '梅田のマンションに限って有効',
      ],
      en: [
        'If it is written, any wording is valid',
        'A clause that leaves the buyer with no liability at all is void',
        'Valid if the buyer can translate it',
        'Valid, but only for an Umeda condominium',
      ],
    },
    why: {
      ja: [
        '売主が業者で買主が業者でないとき、責任をなくす特約は書けば有効、ではない。',
        '一切負わない、は無効である。引渡しから2年以上を残す特約まで無効、という意味ではない。',
        '翻訳できることは、不利な特約を有効にしない。',
        '梅田かどうかで、この特約の効き方は変わらない。',
      ],
      en: [
        'When the seller is a broker and the buyer is not, wiping out liability is not valid just because it is written.',
        '“No liability at all” is void. That is not a claim that every clause leaving two years or more from delivery is void.',
        'Being able to translate does not validate an unfair waiver.',
        'Umeda does not get a special version of this clause.',
      ],
    },
  },
];
