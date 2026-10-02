import type { Question } from './content-lessons';

export const questionsB: Question[] = [
  {
    id: 'Q13', subject: 'limits', answer: 1,
    stem: {
      ja: '物件は市街化調整区域にある。購入希望者への説明として正しいのはどれか。',
      en: 'The lot is in an urbanization-control area. Which explanation is right?',
    },
    choices: {
      ja: [
        '調整区域は、家を自由に建てて街を広げる場所である',
        '街を広げる開発を抑える区域なので、「自由に建てられる」とは言わない。許可の要否を確認する',
        '調整区域という言葉は大阪にはない',
        '大阪市は全市が市街化区域なので、区域の確認は不要である',
      ],
      en: [
        'A control area is where you freely build houses and extend the city',
        'It is where growth is held back, so you do not say building is free. You check whether permission is required',
        'Osaka does not use the words “control area”',
        'All of Osaka City is a promotion area, so no check is needed',
      ],
    },
    why: {
      ja: [
        '自由に街を広げる場所は、調整区域の説明ではない。',
        '抑える区域なので、建てられるかは許可を確認してから話す。',
        '区域の名前は全国の都市計画の言葉である。大阪にない、のではない。',
        '全市が市街化区域、とは言えない。土地ごとに計画を見る。試験も全国共通である。',
      ],
      en: [
        'A control area is not described as a place to extend the city freely.',
        'Because growth is restrained, you check permission before you talk about building.',
        'The category is part of national city planning. It is not absent in Osaka.',
        'You cannot say the whole city is one zone. The plan is read lot by lot. The exam is national too.',
      ],
    },
  },
  {
    id: 'Q14', subject: 'limits', answer: 1,
    stem: {
      ja: '用途地域について、案内で正しいのはどれか。',
      en: 'Which statement about use zones is the right one to give at a showing?',
    },
    choices: {
      ja: [
        '景色がにぎやかなら、どの店でも建てられる',
        '建てられる種類は用途地域で違う。どの土地がどの地域かは都市計画を確認し、景色だけでは決めない',
        '用途地域の名前は都道府県ごとに違い、全国共通の枠はない',
        '用途地域が決まっていれば、建築確認は不要である',
      ],
      en: [
        'If the street looks busy, any shop can be built',
        'What you can build depends on the use zone. Which zone a lot is in comes from the city plan, not from the view',
        'Zone names differ by prefecture. There is no national menu',
        'Once a use zone is set, building confirmation is unnecessary',
      ],
    },
    why: {
      ja: [
        'にぎわいの見た目は、用途地域の判定ではない。',
        '種類の制限は用途地域にあり、当てはめはその土地の都市計画を見て行う。',
        '枠は全国共通である。違うのは、どの土地がどの地域に入っているかである。',
        '用途地域があることと、建築確認を受けなくてよいことは別である。',
      ],
      en: [
        'A busy view is not how you decide the use zone.',
        'The zone limits the building, and the lot’s plan says which zone it is.',
        'The menu is national. What differs is which lot sits in which zone.',
        'Having a use zone does not cancel building confirmation.',
      ],
    },
  },
  {
    id: 'Q15', subject: 'limits', answer: 1,
    stem: {
      ja: '敷地が、幅4メートルの道路に1.5メートルだけ接している。建て替えを希望している。何と言うか。',
      en: 'A site touches a 4-meter road for only 1.5 meters. The client wants to rebuild. What do you say?',
    },
    choices: {
      ja: [
        '2メートル未満でも、道路が4メートルなら必ず建て替えできる',
        '原則は2メートル以上接することなので、「必ず建て替えできる」とは言わない。例外の許可があるかは確認が先',
        '接道のルールは東京だけで、大阪にはない',
        '道路の幅が4メートルなら、接している長さは問わない',
      ],
      en: [
        'Under 2 meters is fine whenever the road is 4 meters wide. Rebuilding is certain',
        'The rule is at least 2 meters of frontage, so you do not promise a rebuild. Any exception permit is checked first',
        'The road-frontage rule exists only in Tokyo, not in Osaka',
        'If the road is 4 meters wide, the length of frontage does not matter',
      ],
    },
    why: {
      ja: [
        '幅が足りていても、接している長さが原則の2メートル未満なら、必ず建てられるとは言えない。',
        '原則を先に伝え、例外があるかは確認する。断言しない。',
        '接道の原則は全国のルールである。大阪だけにない、のではない。',
        '幅と、接する長さは、どちらも見る。幅だけでは足りない。',
      ],
      en: [
        'A wide enough road does not make a 1.5-meter frontage “certainly buildable.”',
        'State the rule, then check whether an exception exists. Do not promise.',
        'Frontage is a national rule. Osaka is not outside it.',
        'Width and length of contact are both part of the rule.',
      ],
    },
  },
  {
    id: 'Q16', subject: 'limits', answer: 1,
    stem: {
      ja: '建物を建て始めるタイミングとして正しいのはどれか。',
      en: 'Which timing is right for starting a building?',
    },
    choices: {
      ja: [
        '設計が頭にあれば、確認の前に工事してよい',
        '原則として、建築確認を受け、確認済証の交付を受けてから着工する',
        '完了検査が終わってから着工する',
        '宅建士の資格があれば、建築確認の代わりになる',
      ],
      en: [
        'If the design is in your head, start work before confirmation',
        'As a rule, get building confirmation and the certificate, then start',
        'Start after the completion inspection is finished',
        'A takken qualification stands in for building confirmation',
      ],
    },
    why: {
      ja: [
        '頭の中の設計は、確認済証の代わりにならない。',
        '着工は、原則として確認済証のあとである。',
        '完了検査は工事が終わったあとの検査で、着工の前ではない。',
        '宅建士であることと、建築確認を受けたことは別である。',
      ],
      en: [
        'A design in your head is not a confirmation certificate.',
        'Work starts, as a rule, after the certificate is issued.',
        'The completion inspection comes after the work, not before it starts.',
        'Being a takken specialist does not replace building confirmation.',
      ],
    },
  },
  {
    id: 'Q17', subject: 'limits', answer: 1,
    stem: {
      ja: '市街化区域の外にある農地を、宅地として売る契約を、必要な許可を受けずに結んだ。その契約はどうなるか。',
      en: 'A contract sells farmland outside an urbanization-promotion area as housing land, without the permission that is required. What is that contract?',
    },
    choices: {
      ja: [
        '契約書があれば有効で、許可はあとで誰かが取る',
        '必要な許可を受けないでした契約は、効力を生じない',
        '農地のルールは北海道だけで、大阪の農地には適用されない',
        '翻訳を付ければ有効になる',
      ],
      en: [
        'Valid because there is a contract. Someone gets permission later',
        'A contract made without a required permission has no effect',
        'Farmland rules apply only in Hokkaido, not to farmland in Osaka',
        'Valid once a translation is attached',
      ],
    },
    why: {
      ja: [
        '必要な許可の前に結んだ契約は、あとから誰かが許可を取る前提では有効にならない。',
        '許可が必要な農地の契約は、許可なしでは効力を生じない。',
        '農地のルールは全国のものである。大阪の農地も対象になる。',
        '翻訳を付けても、許可のない契約に効力は生まれない。',
      ],
      en: [
        'Signing first and hoping for permission later does not make the contract effective.',
        'Where permission is required, the contract has no effect without it.',
        'Farmland rules are national. Osaka farmland is included.',
        'A translation does not supply the missing permission.',
      ],
    },
  },
  {
    id: 'Q18', subject: 'limits', answer: 0,
    stem: {
      ja: '市街化区域で、999平方メートルの開発を考えている。大阪だから、と説明してよいか。',
      en: 'Someone plans development of 999 square meters in an urbanization-promotion area. May you explain it as “fine, because this is Osaka”?',
    },
    choices: {
      ja: [
        '法律上の原則は1,000平方メートル以上が許可対象だと伝え、条例でより小さくても許可が要ることがあるので、「999なら必ず不要」とは言わない',
        '999平方メートルなら、日本中どこでも許可は不要と断言する',
        '開発許可は市街化区域には存在しないと言う',
        '面積ではなく、買主の国籍で決まると言う',
      ],
      en: [
        'Say the Act’s default is permission from 1,000 square meters, and that an ordinance can set a smaller threshold, so you do not promise 999 is always exempt',
        'Assert that 999 square meters never needs permission anywhere in Japan',
        'Say development permission does not exist in a promotion area',
        'Say it depends on the buyer’s nationality, not the area',
      ],
    },
    why: {
      ja: [
        '原則の面積と、条例で厳しくなり得ることを、両方伝える。大阪の条例の数字はこのアプリにはない。',
        '全国どこでも不要、は言い過ぎである。条例で敷居が下がることがある。',
        '市街化区域に開発許可がない、は誤りである。面積の原則がある。',
        '国籍では決まらない。区域と面積、そして条例を見る。',
      ],
      en: [
        'Give both the Act’s default area and the chance an ordinance is stricter. Osaka’s figure is not in this app.',
        '“Never, anywhere” ignores ordinances that lower the threshold.',
        'Promotion areas do have development permission, above the area threshold.',
        'Nationality does not decide it. Zone, area, and ordinance do.',
      ],
    },
  },
  {
    id: 'Q19', subject: 'tax', answer: 1,
    stem: {
      ja: '1月2日にマンションを買い、同じ日に引渡しを受けた。その年の固定資産税の納税義務者は、原則として誰か。',
      en: 'A condominium is bought and handed over on January 2. Who is, as a rule, the fixed-asset taxpayer for that year?',
    },
    choices: {
      ja: [
        '1月2日の買主',
        'その年の1月1日時点の所有者',
        '仲介した宅建士',
        '契約書を訳した人',
      ],
      en: [
        'The buyer on January 2',
        'The owner as of January 1 of that year',
        'The takken specialist who brokered it',
        'The person who translated the contract',
      ],
    },
    why: {
      ja: [
        '1月2日の買主に、その年の納税義務が自動で移るわけではない。',
        '固定資産税は、1月1日の所有者にかかる。日割りは当事者の約束であり、納税義務そのものではない。',
        '仲介した人は、その年の固定資産税の納税義務者ではない。',
        '翻訳した人に、固定資産税は移らない。',
      ],
      en: [
        'The January 2 buyer does not automatically take that year’s tax duty.',
        'The tax falls on the January 1 owner. Splitting the year is a private agreement, not the tax duty itself.',
        'The broker is not the taxpayer for that year’s fixed-asset tax.',
        'Translating the contract does not transfer the tax.',
      ],
    },
  },
  {
    id: 'Q20', subject: 'tax', answer: 1,
    stem: {
      ja: '親から大阪の家を相続した。不動産取得税について正しいのはどれか。',
      en: 'A person inherits a family house in Osaka. Which statement about real-estate acquisition tax is right?',
    },
    choices: {
      ja: [
        '相続でも、売買と同じように必ずかかる',
        '相続による取得には、原則として不動産取得税はかからない',
        '難波の家に限ってかかる',
        'このアプリの確認を終えると非課税になる',
      ],
      en: [
        'Inheritance is always charged, the same way as a purchase',
        'Acquisition by inheritance is, as a rule, not charged this tax',
        'It is charged only if the house is in Namba',
        'Finishing this app’s checks makes the tax not apply',
      ],
    },
    why: {
      ja: [
        '相続は、売買と同じように必ずかかる、ではない。',
        '相続による取得には、原則として不動産取得税はかからない。税率はこのアプリにない。',
        '難波かどうかで、相続の非課税は分かれない。',
        'アプリの進み具合は、税の課税と関係がない。',
      ],
      en: [
        'Inheritance is not automatically taxed like a purchase.',
        'As a rule, acquisition tax is not charged on inheritance. Rates are not in this app.',
        'Namba does not create a special inheritance charge.',
        'Progress in this app has nothing to do with the tax.',
      ],
    },
  },
  {
    id: 'Q21', subject: 'tax', answer: 1,
    stem: {
      ja: '建物の売買契約書と印紙税。このアプリの説明として正しいのはどれか。',
      en: 'A building sale contract and stamp tax. Which statement matches what this app teaches?',
    },
    choices: {
      ja: [
        '売買契約書に印紙税は関係ない',
        '売買契約書は印紙税の対象になる。金額は記載金額によるが、金額表はこのアプリにない',
        '印紙の金額は全国一律で、契約金額と無関係である',
        '英語で書けば印紙税は不要だと断言してよい',
      ],
      en: [
        'Stamp tax has nothing to do with a sale contract',
        'A sale contract is subject to stamp tax. The amount follows the price written on it, and the table is not in this app',
        'The stamp is a flat national amount, unrelated to the price',
        'You may assert that an English contract needs no stamp',
      ],
    },
    why: {
      ja: [
        '売買契約書は、印紙税の対象になる書類である。',
        '対象になることと、金額表をこのアプリが持っていないことを、両方伝える。',
        '金額は、契約に書かれた代金の区分による。全国一律の一枚ではない。',
        '英語で書いたことだけで、売買契約書ではなくなるとは断言しない。',
      ],
      en: [
        'A sale contract is a document stamp tax applies to.',
        'Say that it applies, and that this app does not carry the amount table.',
        'The amount follows the price bracket on the contract. It is not one flat stamp.',
        'Do not assert that English, by itself, takes a sale contract outside stamp tax.',
      ],
    },
  },
  {
    id: 'Q22', subject: 'tax', answer: 1,
    stem: {
      ja: '不動産を売った利益を、長期と短期に分けるとき、所有期間はいつの日付で数えるか。',
      en: 'When a gain on selling real estate is classed as long-term or short-term, as of which date is the holding period counted?',
    },
    choices: {
      ja: [
        '売った日の前日だけを見る',
        '売った年の1月1日時点で数える。その時点で5年を超えていれば長期の区分である',
        '契約書を翻訳した日',
        '宅建士の登録が終わった日',
      ],
      en: [
        'Only the day before the sale',
        'As of January 1 of the year of sale. Longer than five years on that date is the long-term class',
        'The day the contract was translated',
        'The day takken registration was finished',
      ],
    },
    why: {
      ja: [
        '売った日の直前だけで、長期か短期かを切らない。',
        '売った年の1月1日で数える。税率はこのアプリに書いていない。',
        '翻訳した日は、所有期間の起算ではない。',
        '資格の登録日は、その不動産を持っていた期間ではない。',
      ],
      en: [
        'The class is not cut off on the eve of the sale alone.',
        'Count it on January 1 of the sale year. Tax rates are not in this app.',
        'A translation date is not the holding period.',
        'A registration date is not how long the property was owned.',
      ],
    },
  },
  {
    id: 'Q23', subject: 'tax', answer: 1,
    stem: {
      ja: '地価公示の価格を、梅田の一室の売値として案内に書いてよいか。',
      en: 'May you write an official posted land price as the sale price of one Umeda unit?',
    },
    choices: {
      ja: [
        '書いてよい。公示価格が、その部屋の売値そのものだから',
        '書かない。公示は1月1日時点の標準地の目安で、その部屋の価格ではない。価格評価の資格は宅建士とは別である',
        '書いてよい。大阪の公示は、すべての部屋の売値である',
        '書いてよい。このアプリに部屋の売値が載っているから',
      ],
      en: [
        'Yes. The posted price is that room’s sale price',
        'No. The notice is a January 1 reference for a standard site, not that room’s price. Appraising value is a different qualification',
        'Yes. Osaka’s posted prices are the sale price of every room',
        'Yes, because this app lists the room’s sale price',
      ],
    },
    why: {
      ja: [
        '標準地の公示は、目の前の部屋の売値そのものではない。',
        '目安として扱い、部屋の値段としては書かない。鑑定は別の資格である。',
        '大阪の公示が、市内の全部屋の売値になるわけではない。',
        'このアプリは、個別の部屋の売値を持っていない。',
      ],
      en: [
        'A standard-site figure is not the sale price of the room in front of you.',
        'Treat it as a reference. Do not write it as the unit’s price. Appraisal is another qualification.',
        'Osaka’s notice does not set the sale price of every room in the city.',
        'This app does not carry any unit’s sale price.',
      ],
    },
  },
  {
    id: 'Q24', subject: 'tax', answer: 1,
    stem: {
      ja: '所有権の移転登記のときにかかる登録免許税と、仲介手数料の関係で正しいのはどれか。',
      en: 'Which statement about registration tax on an ownership transfer, and brokerage commission, is right?',
    },
    choices: {
      ja: [
        '登録免許税は仲介手数料の内訳で、同じ上限表で計算する',
        '別の支払いである。手数料には大臣が定める上限があるが、その表も税率もこのアプリにはない',
        '登録免許税は、宅建士個人の年会費である',
        '大阪では登録免許税はかからない',
      ],
      en: [
        'Registration tax is a line inside the commission, calculated from the same cap table',
        'They are separate payments. Commission has a cap set by the minister, and neither that table nor the tax rate is in this app',
        'Registration tax is the takken specialist’s personal annual fee',
        'Registration tax is not charged in Osaka',
      ],
    },
    why: {
      ja: [
        '登記の税と、仲介の手数料は、同じ表の内訳ではない。',
        '別の支払いである。上限表と税率は、動かしやすいのでこのアプリに載せていない。',
        '宅建士の会費と、登記のときに払う税は別である。',
        '大阪だから登録免許税がない、ということはない。',
      ],
      en: [
        'The registry tax is not a slice of the commission table.',
        'They are separate. The cap table and the rate are left out because they move.',
        'A specialist’s dues are not the tax paid at registration.',
        'Osaka does not cancel registration tax.',
      ],
    },
  },
];
