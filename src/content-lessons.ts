export type SubjectId = 'rights' | 'broker' | 'limits' | 'tax';
export type LessonSubject = SubjectId | 'guide';

export interface Localized {
  ja: string;
  en: string;
}

export interface Lesson {
  id: string;
  subject: LessonSubject;
  title: Localized;
  paragraphs: { ja: string[]; en: string[] };
}

export interface Question {
  id: string;
  subject: SubjectId;
  stem: Localized;
  choices: { ja: string[]; en: string[] };
  why: { ja: string[]; en: string[] };
  answer: number;
}

export const lessons: Lesson[] = [
  {
    id: 'L01',
    subject: 'guide',
    title: { ja: '大阪の現場で使う知識', en: 'Knowledge for the job in Osaka' },
    paragraphs: {
      ja: [
        'このアプリは、部屋を案内し、契約書を読み、言ってよいことと言ってはいけないことを分けるための勉強相手です。点数の取り方や模擬試験ではありません。',
        '宅建士の試験は全国共通です。大阪だけの試験ではありません。梅田のマンション、難波のワンルーム、翻訳する契約書は、仕事の場面の例です。',
        '報酬の上限表、税率、印紙の金額、合格点、申込みの期限は載せていません。数字が動くものと、断定しないものは、現場では原典か宅建士に確認してから言います。',
      ],
      en: [
        'This app is a companion for showing a place, reading a contract, and knowing what you may and may not say. It is not a set of test tactics or a mock exam.',
        'The takken exam is national, not an Osaka-only test. An Umeda apartment, a Namba one-room, and a contract you are translating are scenes from the job, not a local syllabus.',
        'Commission tables, tax rates, stamp amounts, pass marks, and application deadlines are not here. If a number moves, or this app refuses to state it, check the source or a licensed specialist before you say it.',
      ],
    },
  },
  {
    id: 'L02',
    subject: 'broker',
    title: { ja: '免許が要る仕事', en: 'The work that needs a license' },
    paragraphs: {
      ja: [
        '土地や建物の売買・交換、そして売買・交換・賃貸の仲介や代理を、事業として行うのが宅建業です。会社や個人がそれを業にするなら、免許が要ります。',
        '街を案内すること、契約書を翻訳すること自体は宅建業ではありません。一方で、物件を紹介して契約まで仲立ちすることを仕事として繰り返すなら、その事業者に免許が要ります。',
        '自分の物件を自分で貸すだけでは、原則としてこの免許の仕事ではありません。事務所が一つの都道府県だけならその知事、二つ以上の都道府県にあれば国土交通大臣の免許です。有効期間は5年です。',
      ],
      en: [
        'The licensed business is dealing, as a business, in the sale or exchange of land and buildings, and in brokerage or agency for sale, exchange, or lease.',
        'Guiding a tour, or translating a contract, is not that business by itself. Introducing properties and brokering deals as your work does require the business to be licensed.',
        'Leasing out a place you yourself own is, as a rule, not this licensed business. One prefecture: that governor licenses you. Offices in two or more prefectures: the minister does. The term is five years.',
      ],
    },
  },
  {
    id: 'L03',
    subject: 'broker',
    title: { ja: '開く前の供託か、保証協会', en: 'Deposit or an association, before you open' },
    paragraphs: {
      ja: [
        '免許があっても、すぐ広告は出せません。営業保証金を供託するか、保証協会に入って分担金を納めるまで、業務を始められません。お客が損したときの弁済に備える仕組みです。',
        '協会に入らない場合の営業保証金は、主たる事務所につき1,000万円、従たる事務所ごとに500万円です。保証協会の分担金は、主たる事務所につき60万円、従たる事務所ごとに30万円です。',
        '難波でチラシを撒くのも、ネットに出すのも、この準備の前はしません。',
      ],
      en: [
        'A license alone does not let you advertise. Until the office deposits a business guarantee, or joins a guarantee association and pays its share, it cannot start business. The money is there so a customer can be repaid if the office fails them.',
        'Without an association, the deposit is 10 million yen for the main office and 5 million yen for each branch. An association share is 600,000 yen for the main office and 300,000 yen for each branch.',
        'A Namba flyer, or a listing posted online, waits until that step is done.',
      ],
    },
  },
  {
    id: 'L04',
    subject: 'broker',
    title: { ja: '説明できる人は宅建士', en: 'The specialist is the one who explains' },
    paragraphs: {
      ja: [
        '事務所には、業務に従事する人5人につき1人以上の割合で、専任の宅建士を置きます。名前だけの人ではなく、その事務所の仕事に専任で就く人です。',
        '契約が成立する前の重要事項の説明は、宅建士がします。書類を渡して説明します。従業員なら誰でもよい、わけではありません。翻訳ができることも、説明の代わりにはなりません。',
        '契約が成立したあとは、遅滞なく契約書面を渡します。その書面にも宅建士が記名して押印します。画面越しの説明が認められる取引はありますが、種類は限られます。このアプリは「いつもオンラインでよい」とは言いません。',
      ],
      en: [
        'Each office needs a full-time takken specialist for every five people engaged in the business. Not a name on paper. Someone actually dedicated to that office.',
        'Before the contract, a takken specialist explains the important matters and hands over the document. Any staff member will not do. Being able to translate does not replace that explanation.',
        'After the contract is made, the contract document is delivered without delay, and a specialist signs and seals it too. Explanation over a screen is allowed for some deals, not as a blanket rule. This app does not say online is always enough.',
      ],
    },
  },
  {
    id: 'L05',
    subject: 'broker',
    title: { ja: '案内で言ってよいこと', en: 'What you may say at a showing' },
    paragraphs: {
      ja: [
        '言ってよいのは、調べた事実と、資料に書いてあることです。分からないことは「確認してから説明します」と言います。',
        '難波のワンルームを見に来た人に、測ってもいない徒歩時間を短く言ってはいけません。下書きの広告が3分でも、歩いて12分なら12分です。誇張した広告は出せません。',
        '「絶対に値上がりする」「必ず貸せる」「確認なしで建て替えできる」は言いません。知っている雨漏りや、告知された出来事を隠すのも、案内ではありません。',
      ],
      en: [
        'Say what you checked, and what the papers say. If you do not know, say you will confirm it before you explain.',
        'Do not shorten a walk you never timed. If the Namba one-room draft ad says three minutes and you walked it in twelve, you say twelve. An exaggerated ad is not allowed.',
        'Do not say it will definitely rise in price, that it will definitely rent, or that it can be rebuilt with no checks. Hiding a leak you know about, or something you were told to disclose, is not a showing.',
      ],
    },
  },
  {
    id: 'L06',
    subject: 'broker',
    title: { ja: '説明が先、契約書はあと', en: 'Explain first, then the contract paper' },
    paragraphs: {
      ja: [
        '重要事項の説明書と、契約書面は別の書類です。説明は契約が成立する前です。契約書面は、成立したあとに渡します。',
        '梅田のマンションを翻訳者の友人が下読みしていても、説明の役は宅建士です。翻訳は、相手が中身を理解する助けにはなります。説明義務そのものを肩代わりしません。',
        '案内のあと、その場の勢いで署名に進む前に、説明を終えているかを見ます。',
      ],
      en: [
        'The important-matters document and the contract document are different papers. The explanation comes before the contract exists. The contract paper is delivered after it is made.',
        'A friend who translates can read an Umeda condo file in advance. The person who explains is still the takken specialist. Translation helps someone understand. It does not take over the duty to explain.',
        'After a showing, look for whether the explanation is finished before anyone is nudged to sign.',
      ],
    },
  },
  {
    id: 'L07',
    subject: 'broker',
    title: { ja: '媒介の三つの約束', en: 'Three kinds of listing promise' },
    paragraphs: {
      ja: [
        '売主や貸主が業者に仲介を頼む約束が媒介契約です。書面で結びます。頼み方は三つあります。',
        '一般媒介は、他の業者にも重ねて頼めて、自分で相手を見つけてもかまいません。流通機構への登録も、定期の報告も、法律上の義務ではありません。',
        '専任媒介は、頼める業者が一社です。自分で相手を見つけることはできます。業者は、契約の翌日から休業日を除いて7日以内に指定流通機構へ登録し、2週間に1回以上、文書か電子メールで状況を報告します。',
        '専属専任媒介は、一社だけで、自分で相手を見つけて直接契約することは制限されます。登録は翌日から休業日を除いて5日以内、報告は1週間に1回以上です。',
      ],
      en: [
        'A mediation contract is the client asking a broker to intermediate. It is in writing. There are three kinds.',
        'A general mandate can be given to several brokers at once, and the client may find the other party. Registration on the circulation system, and regular reports, are not legal duties.',
        'An exclusive mandate is one broker. The client may still find the other party. The broker registers with the designated circulation body within seven days from the day after the contract, not counting closed days, and reports at least every two weeks, on paper or by email.',
        'A sole exclusive mandate is one broker, and the client is restricted from finding the other party and contracting directly. Registration is within five days from the next day, not counting closed days, and reports are at least weekly.',
      ],
    },
  },
  {
    id: 'L08',
    subject: 'broker',
    title: { ja: '売主が業者のとき', en: 'When the broker is the seller' },
    paragraphs: {
      ja: [
        '宅建業者が自ら売主で、買主が宅建業者でない売買では、手付として受け取れるのは代金の2割までです。超えた分は手付としては扱えません。',
        '相手が履行に着手するまで、買主は手付を手放して解除できます。売主の業者は、同じ時期までなら、手付の倍額を実際に差し出すことで解除できます。「いつでも返さなくていい」とは説明しません。',
        '事務所など以外の場所で申込みや契約をしたときは、買主が業者でなければクーリング・オフができます。告知書面を受け取った日から8日を経過するまで、書面で撤回できます。履行に着手したあとはできません。事務所での申込みや、買主も業者であるときは、この撤回は使えません。賃貸の仲介の話でもありません。',
      ],
      en: [
        'When a broker is the seller and the buyer is not a broker, the deposit they may take as earnest money is capped at 20 percent of the price. Anything above that is not treated as the deposit.',
        'Until the other side starts performance, the buyer can cancel by giving up the deposit. The broker-seller, in that same window, cancels only by actually tendering twice the deposit. Do not explain it as “we never give it back.”',
        'If the offer or contract was made somewhere other than the office, and the buyer is not a broker, they can cool off. In writing, until eight days have passed from the day they received the written notice. Not after they have started performance. Not for an application made at the office, and not if the buyer is also a broker. It is not a rule for lease brokerage.',
      ],
    },
  },
  {
    id: 'L09',
    subject: 'rights',
    title: { ja: '契約は中身が合ったとき', en: 'A contract when the terms meet' },
    paragraphs: {
      ja: [
        '売買は、代金や引渡しなど、契約の中身について双方の意思が合って成立します。梅田の部屋を見て「いいですね」と言っただけでは、売買にはなっていません。',
        '双方が仮だと分かって作った見せかけの契約は、当事者の間では無効です。事情を知らない善意の第三者には、無効だと主張できない場合があります。',
        '大事な勘違い、詐欺、強迫があるときは、あとから取り消せる場合があります。案内の場で「もう戻れない」と急かしません。細かい要件は案件ごとに違います。',
      ],
      en: [
        'A sale is formed when both sides agree on the terms, including price and handover. “I like it” at an Umeda showing is not yet a sale.',
        'A pretend contract, where both sides know it is fake, is void between them. They may not be able to assert that voidness against a good-faith third person who did not know.',
        'A serious mistake, fraud, or duress can sometimes be cancelled later. Do not rush someone with “you can never go back.” The details differ by case.',
      ],
    },
  },
  {
    id: 'L10',
    subject: 'rights',
    title: { ja: '登記と、マンションの部屋', en: 'Registration, and a condo unit' },
    paragraphs: {
      ja: [
        '当事者の間では、登記の前でも売買は有効です。第三者に自分の権利を主張するには、原則として登記が要ります。「契約したから登記はいつでもいい」とは案内しません。',
        '相続で不動産を取得したときの登記は、義務になっています。期限の日数は改正を取り違えないよう、ここには書きません。法務局か登記の専門家に確認します。',
        '梅田のマンションは、一棟まるごとが売られているとは限りません。自分の部屋（専有部分）と、廊下などの共用部分は別です。自分の部屋だから廊下も自由、とは言いません。管理規約と管理費を見ます。マンションのルールは改正が続いています。2026年に変わった手続きの細部は、このアプリでは断定しません。',
      ],
      en: [
        'Between the parties, a sale is valid even before registration. To assert your right against a third person, you generally need the registration. Do not say “we signed, so registration can wait forever.”',
        'Registration after you inherit real estate is now a duty. The number of days is not written here, so a reform is not misstated. Check the registry office or a registration specialist.',
        'An Umeda condominium is not always the whole building for sale. The unit you own and the common parts, such as corridors, are different. Owning the unit does not mean the corridor is yours to alter. Read the rules and the management fee. Condo law keeps changing. This app does not state the fine print of procedures that changed in 2026.',
      ],
    },
  },
  {
    id: 'L11',
    subject: 'rights',
    title: { ja: '借りる人、敷金、いつもの傷', en: 'Tenants, the deposit, ordinary wear' },
    paragraphs: {
      ja: [
        '建物を借りる契約は、借地借家法が借りる人を厚く守ります。普通の建物賃貸借は、貸主に正当事由がないと、更新を拒みにくいです。',
        '定期借家は、期間が来たら更新しない契約です。公正証書などの書面で結び、事前に書面を渡して説明していないと、「更新がない」とは案内しません。終了を知らせる時期の数え方は、ここには書きません。',
        '敷金は、未払いの家賃など、差し引くものを除いて、部屋を返したあとに残額を返すお金です。礼金とは違います。日焼けや、普通に住んだ床のへこみのような通常の損耗は、借りた人の負担にしません。棚を付けて壁に穴を開けた、のような通常を超える傷は別です。',
      ],
      en: [
        'The lease law protects building tenants more strongly than a bare promise. On an ordinary building lease, the landlord needs a justifiable reason to refuse renewal.',
        'A fixed-term building lease is meant not to renew when the term ends. Without a proper written contract, and a written explanation beforehand, do not tell anyone “it definitely ends.” How to count the end-of-term notice is not stated here.',
        'A security deposit is money returned after the unit comes back, minus unpaid rent and other agreed deductions. It is not key money. Ordinary wear, such as sun fade or a dent from normal living, is not the tenant’s to restore. A hole from a shelf they installed is different. It goes beyond ordinary use.',
      ],
    },
  },
  {
    id: 'L12',
    subject: 'rights',
    title: { ja: '隠さない不具合、相続と共有', en: 'Known defects, inheritance, co-owners' },
    paragraphs: {
      ja: [
        '引渡した物が契約の内容と違うとき、買主は、修理、代金の減額、損害賠償、解除を求められる場合があります。条件は案件で違います。知った不具合を隠して契約させない、が案内の基本です。',
        '売主が宅建業者で買主が業者でないとき、「不適合の責任は一切負わない」という特約は無効です。引渡しから2年以上の期間を残す特約まで、すべて無効という意味ではありません。',
        '遺言がなければ、配偶者と子が相続するときの法定相続分は、配偶者が2分の1、子が2分の1です。子が複数なら、その2分の1を子の間で分けます。配偶者と親なら配偶者3分の2、親3分の1。配偶者と兄弟姉妹なら配偶者4分の3、兄弟姉妹4分の1です。兄弟姉妹に遺留分はありません。遺留分は、侵害された分を金銭で請求する権利です。',
        '共有の建物を丸ごと売るには、原則として全員の合意が要ります。持分だけの話と、建物全体の話を混ぜません。管理や軽い変更を、持分の何票で決めるかは改正があったので、票数はこのアプリでは断定しません。',
      ],
      en: [
        'If what is handed over does not match the contract, the buyer may be able to seek repair, a price reduction, damages, or cancellation. The conditions differ. The showing rule is simple: do not hide a defect you know and still push the contract.',
        'When the seller is a broker and the buyer is not, a clause that says the seller owes nothing for non-conformity is void. That does not mean every clause that leaves two years or more from delivery is also void.',
        'With no will, if a spouse and children inherit, the statutory shares are one half for the spouse and one half for the children together. Several children divide that half. Spouse and parents: two thirds and one third. Spouse and siblings: three quarters and one quarter. Siblings have no forced share. A forced share is a money claim for what was cut into.',
        'Selling a whole co-owned building generally needs every co-owner. Do not mix “my share” with “the whole building.” Vote counts for management and minor changes were reformed, so this app does not state them.',
      ],
    },
  },
  {
    id: 'L13',
    subject: 'limits',
    title: { ja: '街の区域は、景色では決まらない', en: 'The zone is not the view' },
    paragraphs: {
      ja: [
        '都市計画区域には、市街化区域と市街化調整区域に線引きされた場所と、線引きのない場所があります。市街化区域は、街をつくっていく場所です。調整区域は、街を広げる開発を抑える場所です。「調整区域でも家は自由に建てられる」とは言いません。',
        '用途地域は、建てられる建物の種類を分けます。枠は全国共通でも、どの土地がどの地域かは、その都市計画で決まります。梅田のにぎわいと、静かな住宅地を、景色だけで同じ扱いをしません。',
        '建蔽率や容積率の数字は土地ごとに違います。一覧にして覚えない。案内の前に、その土地の計画を確認します。',
      ],
      en: [
        'A city-planning area may be split into an urbanization-promotion area and an urbanization-control area, or it may have no such line. Promotion areas are where the city is meant to grow. Control areas hold that growth back. Do not say a house can be built freely in a control area.',
        'Use zones decide what kind of building is allowed. The menu is national. Which land is in which zone is that city’s plan. Do not treat lively Umeda and a quiet residential block as the same zone because they “feel” different or similar.',
        'Coverage and floor-area ratios differ by lot. There is no table here to memorize. Check that lot’s plan before the showing.',
      ],
    },
  },
  {
    id: 'L14',
    subject: 'limits',
    title: { ja: '道、確認、開発、農地', en: 'The road, permission, farmland' },
    paragraphs: {
      ja: [
        '建物の敷地は、原則として幅4メートル以上の道路に2メートル以上接します。狭い道として指定された道は、中心から後退して幅を確保する考え方があります。例外の許可もあるので、「接し方が足りなくても大丈夫」とは言いません。',
        '工事の前には、原則として建築確認を受け、確認済証が出てから着工します。終わったら完了検査です。どの建物が確認を省略できるかは、近年の改正で動いています。省略できる建物の一覧は、このアプリにはありません。',
        '開発許可の面積は、法律上の原則として、市街化区域では1,000平方メートル以上、線引きのない都市計画区域や準都市計画区域では3,000平方メートル以上、都市計画区域の外では10,000平方メートル以上です。調整区域は、面積にかかわらず許可が要るのが原則です。条例で、もっと小さい面積から許可にできます。大阪の条例の数字は書いていません。',
        '農地を農地以外にする、農地のまま権利を移す、宅地にする目的で権利を移す、には許可か届出が要ります。必要な許可を受けないでした契約は、効力を生じません。市街化区域の中の転用は、許可ではなく農業委員会への届出です。届出を「何もしなくていい」とは説明しません。',
      ],
      en: [
        'A building site generally must touch a road at least four meters wide, for at least two meters. On a narrow road designated under the law, the site is set back from the center so the road can be treated as four meters. There are exception permits. Do not say a short frontage is fine.',
        'Before work starts, the rule is to get building confirmation and the certificate, then start. Afterward comes the completion inspection. Which buildings can skip confirmation has been moving with recent reforms. This app has no list of skips.',
        'As Act defaults, development permission applies at 1,000 square meters or more in an urbanization-promotion area, 3,000 in an unzoned city-planning area or a quasi-city-planning area, and 10,000 outside a city-planning area. In a control area, permission is generally required regardless of size. A prefectural ordinance can pull the threshold down. Osaka’s ordinance figures are not here.',
        'Turning farmland into something else, transferring rights in it as farmland, or transferring it so it can become housing, needs permission or a filing. A contract made without a required permission has no effect. Inside an urbanization-promotion area, conversion is a filing with the agricultural committee, not that permission. Do not explain the filing as “you need do nothing.”',
      ],
    },
  },
  {
    id: 'L15',
    subject: 'tax',
    title: { ja: '税は、いつ・誰に', en: 'Tax: when, and who' },
    paragraphs: {
      ja: [
        '固定資産税は、毎年1月1日の所有者に、市町村がかけます。東京23区は都です。1月2日に買った人に、その年の納税義務が自動で移るわけではありません。日割りを当事者で約束することはあります。それは税務署への納税義務そのものではありません。',
        '不動産取得税は、不動産を取得したときに都道府県がかける税です。相続による取得には、原則としてかかりません。税率は載せていません。',
        '売買契約書は、印紙税の対象になる書類です。貼る金額は記載された金額の区分によります。金額表は載せていません。言語が英語でも、売買契約書であること自体は変わりません。',
        '所有権を登記するときには登録免許税がかかります。仲介手数料とは別の支払いです。手数料には国土交通大臣が定める上限があります。低額の空き家などの特例も含め、上限表はこのアプリにありません。',
      ],
      en: [
        'Fixed-asset tax is charged by the municipality to the owner on January 1. In Tokyo’s 23 wards, the prefecture charges it. A buyer on January 2 does not automatically become that year’s taxpayer. The parties sometimes agree to split the year. That agreement is not the tax duty itself.',
        'Real-estate acquisition tax is a prefectural tax on acquiring real estate. Inheritance is, as a rule, not charged. Rates are not here.',
        'A sale contract is a document subject to stamp tax. The amount follows the price written on it. The table is not here. Writing the contract in English does not, by itself, change that it is a sale contract.',
        'Registration tax is paid when ownership is registered. It is not part of the brokerage commission. Commission has a cap set by the minister, including special cases for low-priced vacant houses. Those tables are not in this app.',
      ],
    },
  },
  {
    id: 'L16',
    subject: 'tax',
    title: { ja: '売った利益と、価格の目安', en: 'Gain on a sale, and price references' },
    paragraphs: {
      ja: [
        '不動産を売って利益が出れば、所得税・住民税の対象になり得ます。長期か短期かは、売った年の1月1日時点の所有期間で区分します。その時点で5年を超えていれば、長期の区分です。税率と控除額は載せていません。毎年動く特例があります。',
        '地価公示は、毎年1月1日時点の標準地の価格を示すものです。目の前の部屋の売値そのものではありません。梅田の一室の案内に、公示価格をその部屋の値段として書きません。',
        '価格を評価する仕事の資格は不動産鑑定士です。宅建士とは別です。鑑定士でもない人が、将来の価格を断言するのは案内ではありません。',
      ],
      en: [
        'A gain on selling real estate can be subject to income tax and local inhabitant tax. Long-term or short-term is judged by how long you had owned it on January 1 of the year of sale. Longer than five years on that date is the long-term class. Rates and deductions are not here. Special cases move from year to year.',
        'The official land-price notice shows standard sites as of January 1 each year. It is not the sale price of the room in front of you. Do not write a posted land price onto an Umeda unit as if it were that unit’s price.',
        'Appraising value is a real-estate appraiser’s qualification, not a takken specialist’s. Someone who is neither does not declare a future price as part of a showing.',
      ],
    },
  },
];
