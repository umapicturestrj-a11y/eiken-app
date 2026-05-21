import React, { useState, useRef } from 'react';

// ============================================================
// PART 1: 四択問題プール（422語）
// ============================================================
const QUIZ_POOL = [
  {
    id: 1,
    word: 'ability',
    pos: '名詞',
    correct: '能力',
    wrongs: ['感情', '経験', '習慣'],
  },
  {
    id: 2,
    word: 'advantage',
    pos: '名詞',
    correct: '利点',
    wrongs: ['欠点', '危険', '負担'],
  },
  {
    id: 3,
    word: 'atmosphere',
    pos: '名詞',
    correct: '大気・雰囲気',
    wrongs: ['地形', '海流', '気候'],
  },
  {
    id: 4,
    word: 'career',
    pos: '名詞',
    correct: '職業・経歴',
    wrongs: ['趣味', '旅行', '勉強'],
  },
  {
    id: 5,
    word: 'century',
    pos: '名詞',
    correct: '世紀',
    wrongs: ['年代', '十年', '千年'],
  },
  {
    id: 6,
    word: 'challenge',
    pos: '名詞',
    correct: '挑戦',
    wrongs: ['失敗', '休憩', '命令'],
  },
  {
    id: 7,
    word: 'climate',
    pos: '名詞',
    correct: '気候',
    wrongs: ['天気', '地形', '環境'],
  },
  {
    id: 8,
    word: 'consequence',
    pos: '名詞',
    correct: '結果・影響',
    wrongs: ['原因', '理由', '証拠'],
  },
  {
    id: 9,
    word: 'custom',
    pos: '名詞',
    correct: '習慣・風習',
    wrongs: ['法律', '時間', '場所'],
  },
  {
    id: 10,
    word: 'disaster',
    pos: '名詞',
    correct: '災害',
    wrongs: ['奇跡', '冒険', '計画'],
  },
  {
    id: 11,
    word: 'environment',
    pos: '名詞',
    correct: '環境',
    wrongs: ['政治', '経済', '文化'],
  },
  {
    id: 12,
    word: 'evidence',
    pos: '名詞',
    correct: '証拠',
    wrongs: ['推測', '意見', '感情'],
  },
  {
    id: 13,
    word: 'experience',
    pos: '名詞',
    correct: '経験',
    wrongs: ['想像', '未来', '恐怖'],
  },
  {
    id: 14,
    word: 'feature',
    pos: '名詞',
    correct: '特徴',
    wrongs: ['欠点', '価格', '形状'],
  },
  {
    id: 15,
    word: 'fund',
    pos: '名詞',
    correct: '資金',
    wrongs: ['借金', '損失', '収入'],
  },
  {
    id: 16,
    word: 'goods',
    pos: '名詞',
    correct: '商品',
    wrongs: ['サービス', '利益', '費用'],
  },
  {
    id: 17,
    word: 'harvest',
    pos: '名詞',
    correct: '収穫',
    wrongs: ['種まき', '灌漑', '耕作'],
  },
  {
    id: 18,
    word: 'influence',
    pos: '名詞',
    correct: '影響',
    wrongs: ['原因', '結果', '目的'],
  },
  {
    id: 19,
    word: 'instance',
    pos: '名詞',
    correct: '例・事例',
    wrongs: ['瞬間', '原則', '例外'],
  },
  {
    id: 20,
    word: 'knowledge',
    pos: '名詞',
    correct: '知識',
    wrongs: ['才能', '努力', '記憶'],
  },
  {
    id: 21,
    word: 'opportunity',
    pos: '名詞',
    correct: '機会',
    wrongs: ['危機', '制限', '義務'],
  },
  {
    id: 22,
    word: 'situation',
    pos: '名詞',
    correct: '状況',
    wrongs: ['解決策', '問題点', '手段'],
  },
  {
    id: 23,
    word: 'population',
    pos: '名詞',
    correct: '人口',
    wrongs: ['面積', '密度', '移民'],
  },
  {
    id: 24,
    word: 'pollution',
    pos: '名詞',
    correct: '汚染',
    wrongs: ['保護', '開発', '循環'],
  },
  {
    id: 25,
    word: 'purpose',
    pos: '名詞',
    correct: '目的',
    wrongs: ['結果', '手段', '原因'],
  },
  {
    id: 26,
    word: 'resource',
    pos: '名詞',
    correct: '資源',
    wrongs: ['廃棄物', '製品', '需要'],
  },
  {
    id: 27,
    word: 'safety',
    pos: '名詞',
    correct: '安全',
    wrongs: ['危険', '速度', '強度'],
  },
  {
    id: 28,
    word: 'society',
    pos: '名詞',
    correct: '社会',
    wrongs: ['経済', '文化', '政治'],
  },
  {
    id: 29,
    word: 'solution',
    pos: '名詞',
    correct: '解決策',
    wrongs: ['問題', '原因', '議論'],
  },
  {
    id: 30,
    word: 'source',
    pos: '名詞',
    correct: '源・出所',
    wrongs: ['結果', '目的', '手段'],
  },
  {
    id: 31,
    word: 'species',
    pos: '名詞',
    correct: '種（生物）',
    wrongs: ['個体', '群れ', '進化'],
  },
  {
    id: 32,
    word: 'structure',
    pos: '名詞',
    correct: '構造',
    wrongs: ['機能', '形状', '材質'],
  },
  {
    id: 33,
    word: 'supply',
    pos: '名詞',
    correct: '供給',
    wrongs: ['需要', '消費', '生産'],
  },
  {
    id: 34,
    word: 'technology',
    pos: '名詞',
    correct: '技術',
    wrongs: ['科学', '芸術', '文学'],
  },
  {
    id: 35,
    word: 'tradition',
    pos: '名詞',
    correct: '伝統',
    wrongs: ['革新', '流行', '変化'],
  },
  {
    id: 36,
    word: 'transportation',
    pos: '名詞',
    correct: '輸送・交通',
    wrongs: ['通信', '貿易', '観光'],
  },
  {
    id: 37,
    word: 'trend',
    pos: '名詞',
    correct: '傾向・流行',
    wrongs: ['規則', '例外', '逆行'],
  },
  {
    id: 38,
    word: 'volunteer',
    pos: '名詞',
    correct: 'ボランティア',
    wrongs: ['専門家', '従業員', '管理者'],
  },
  {
    id: 39,
    word: 'waste',
    pos: '名詞',
    correct: '廃棄物・無駄',
    wrongs: ['資源', '利益', '節約'],
  },
  {
    id: 40,
    word: 'wealth',
    pos: '名詞',
    correct: '富・財産',
    wrongs: ['貧困', '負債', '損失'],
  },
  {
    id: 41,
    word: 'accident',
    pos: '名詞',
    correct: '事故',
    wrongs: ['事件', '災害', '犯罪'],
  },
  {
    id: 42,
    word: 'agreement',
    pos: '名詞',
    correct: '合意・協定',
    wrongs: ['対立', '誤解', '拒絶'],
  },
  {
    id: 43,
    word: 'ancestor',
    pos: '名詞',
    correct: '先祖',
    wrongs: ['子孫', '兄弟', '親戚'],
  },
  {
    id: 44,
    word: 'audience',
    pos: '名詞',
    correct: '聴衆・観客',
    wrongs: ['出演者', '批評家', '司会者'],
  },
  {
    id: 45,
    word: 'candidate',
    pos: '名詞',
    correct: '候補者',
    wrongs: ['有権者', '当選者', '評価者'],
  },
  {
    id: 46,
    word: 'ceremony',
    pos: '名詞',
    correct: '式典・儀式',
    wrongs: ['会議', '催し物', '祝日'],
  },
  {
    id: 47,
    word: 'charity',
    pos: '名詞',
    correct: '慈善・慈善団体',
    wrongs: ['利益団体', '政党', '企業'],
  },
  {
    id: 48,
    word: 'citizen',
    pos: '名詞',
    correct: '市民',
    wrongs: ['旅行者', '外国人', '観光客'],
  },
  {
    id: 49,
    word: 'conflict',
    pos: '名詞',
    correct: '争い・対立',
    wrongs: ['協力', '和解', '友好'],
  },
  {
    id: 50,
    word: 'construction',
    pos: '名詞',
    correct: '建設',
    wrongs: ['解体', '改修', '設計'],
  },
  {
    id: 51,
    word: 'continent',
    pos: '名詞',
    correct: '大陸',
    wrongs: ['島', '半島', '海峡'],
  },
  {
    id: 52,
    word: 'courage',
    pos: '名詞',
    correct: '勇気',
    wrongs: ['恐怖', '怠慢', '弱さ'],
  },
  {
    id: 53,
    word: 'creature',
    pos: '名詞',
    correct: '生き物',
    wrongs: ['植物', '物体', '機械'],
  },
  {
    id: 54,
    word: 'crop',
    pos: '名詞',
    correct: '作物',
    wrongs: ['土地', '農薬', '肥料'],
  },
  {
    id: 55,
    word: 'culture',
    pos: '名詞',
    correct: '文化',
    wrongs: ['言語', '歴史', '地理'],
  },
  {
    id: 56,
    word: 'cure',
    pos: '名詞',
    correct: '治療法',
    wrongs: ['病気', '症状', '予防'],
  },
  {
    id: 57,
    word: 'damage',
    pos: '名詞',
    correct: '損害',
    wrongs: ['修理', '保険', '費用'],
  },
  {
    id: 58,
    word: 'deadline',
    pos: '名詞',
    correct: '締め切り',
    wrongs: ['開始日', '予定日', '記念日'],
  },
  {
    id: 59,
    word: 'debate',
    pos: '名詞',
    correct: '討論',
    wrongs: ['協議', '発表', '演説'],
  },
  {
    id: 60,
    word: 'decade',
    pos: '名詞',
    correct: '10年間',
    wrongs: ['5年間', '20年間', '100年間'],
  },
  {
    id: 61,
    word: 'demand',
    pos: '名詞',
    correct: '需要・要求',
    wrongs: ['供給', '提供', '満足'],
  },
  {
    id: 62,
    word: 'democracy',
    pos: '名詞',
    correct: '民主主義',
    wrongs: ['独裁', '君主制', '社会主義'],
  },
  {
    id: 63,
    word: 'diet',
    pos: '名詞',
    correct: '食事・ダイエット',
    wrongs: ['運動', '睡眠', '習慣'],
  },
  {
    id: 64,
    word: 'discovery',
    pos: '名詞',
    correct: '発見',
    wrongs: ['発明', '実験', '研究'],
  },
  {
    id: 65,
    word: 'disease',
    pos: '名詞',
    correct: '病気',
    wrongs: ['怪我', '薬', '症状'],
  },
  {
    id: 66,
    word: 'distance',
    pos: '名詞',
    correct: '距離',
    wrongs: ['速度', '方向', '時間'],
  },
  {
    id: 67,
    word: 'doubt',
    pos: '名詞',
    correct: '疑い',
    wrongs: ['確信', '信頼', '期待'],
  },
  {
    id: 68,
    word: 'electricity',
    pos: '名詞',
    correct: '電気',
    wrongs: ['熱', '光', '音'],
  },
  {
    id: 69,
    word: 'emotion',
    pos: '名詞',
    correct: '感情',
    wrongs: ['思考', '行動', '記憶'],
  },
  {
    id: 70,
    word: 'energy',
    pos: '名詞',
    correct: 'エネルギー',
    wrongs: ['物質', '空間', '時間'],
  },
  {
    id: 71,
    word: 'freedom',
    pos: '名詞',
    correct: '自由',
    wrongs: ['制限', '義務', '規則'],
  },
  {
    id: 72,
    word: 'gender',
    pos: '名詞',
    correct: '性別',
    wrongs: ['年齢', '国籍', '職業'],
  },
  {
    id: 73,
    word: 'habitat',
    pos: '名詞',
    correct: '生息地',
    wrongs: ['天敵', '食料', '繁殖期'],
  },
  {
    id: 74,
    word: 'heritage',
    pos: '名詞',
    correct: '遺産・文化財',
    wrongs: ['未来計画', '発明品', '輸出品'],
  },
  {
    id: 75,
    word: 'impact',
    pos: '名詞',
    correct: '影響・衝撃',
    wrongs: ['原因', '結果', '過程'],
  },
  {
    id: 76,
    word: 'income',
    pos: '名詞',
    correct: '収入',
    wrongs: ['支出', '貯蓄', '負債'],
  },
  {
    id: 77,
    word: 'industry',
    pos: '名詞',
    correct: '産業',
    wrongs: ['農業', '商業', '観光'],
  },
  {
    id: 78,
    word: 'inequality',
    pos: '名詞',
    correct: '不平等',
    wrongs: ['平等', '均衡', '公平'],
  },
  {
    id: 79,
    word: 'ingredient',
    pos: '名詞',
    correct: '材料・成分',
    wrongs: ['調理法', '分量', '料理名'],
  },
  {
    id: 80,
    word: 'investment',
    pos: '名詞',
    correct: '投資',
    wrongs: ['消費', '節約', '借金'],
  },
  // 動詞
  {
    id: 101,
    word: 'achieve',
    pos: '動詞',
    correct: '達成する',
    wrongs: ['諦める', '失う', '避ける'],
  },
  {
    id: 102,
    word: 'attract',
    pos: '動詞',
    correct: '引きつける',
    wrongs: ['拒否する', '破壊する', '無視する'],
  },
  {
    id: 103,
    word: 'communicate',
    pos: '動詞',
    correct: '伝達する',
    wrongs: ['競争する', '決断する', '出発する'],
  },
  {
    id: 104,
    word: 'conclude',
    pos: '動詞',
    correct: '結論を出す',
    wrongs: ['始める', '延長する', '報告する'],
  },
  {
    id: 105,
    word: 'consider',
    pos: '動詞',
    correct: '考慮する',
    wrongs: ['否定する', '発見する', '省略する'],
  },
  {
    id: 106,
    word: 'contribute',
    pos: '動詞',
    correct: '貢献する',
    wrongs: ['妨害する', '依存する', '反対する'],
  },
  {
    id: 107,
    word: 'decrease',
    pos: '動詞',
    correct: '減少する',
    wrongs: ['増加する', '維持する', '変化する'],
  },
  {
    id: 108,
    word: 'depend',
    pos: '動詞',
    correct: '依存する',
    wrongs: ['拒絶する', '競争する', '独立する'],
  },
  {
    id: 109,
    word: 'describe',
    pos: '動詞',
    correct: '描写する',
    wrongs: ['削除する', '比較する', '発明する'],
  },
  {
    id: 110,
    word: 'develop',
    pos: '動詞',
    correct: '発展させる',
    wrongs: ['破壊する', '停止する', '隠す'],
  },
  {
    id: 111,
    word: 'encourage',
    pos: '動詞',
    correct: '励ます',
    wrongs: ['批判する', '禁止する', '無視する'],
  },
  {
    id: 112,
    word: 'examine',
    pos: '動詞',
    correct: '調べる',
    wrongs: ['隠す', '壊す', '忘れる'],
  },
  {
    id: 113,
    word: 'exist',
    pos: '動詞',
    correct: '存在する',
    wrongs: ['消える', '変化する', '移動する'],
  },
  {
    id: 114,
    word: 'improve',
    pos: '動詞',
    correct: '改善する',
    wrongs: ['悪化する', '維持する', '測定する'],
  },
  {
    id: 115,
    word: 'include',
    pos: '動詞',
    correct: '含む',
    wrongs: ['除く', '選ぶ', '数える'],
  },
  {
    id: 116,
    word: 'increase',
    pos: '動詞',
    correct: '増加する',
    wrongs: ['減少する', '停止する', '変化する'],
  },
  {
    id: 117,
    word: 'intend',
    pos: '動詞',
    correct: '意図する',
    wrongs: ['諦める', '達成する', '報告する'],
  },
  {
    id: 118,
    word: 'permit',
    pos: '動詞',
    correct: '許可する',
    wrongs: ['禁止する', '要求する', '拒否する'],
  },
  {
    id: 119,
    word: 'protect',
    pos: '動詞',
    correct: '守る',
    wrongs: ['攻撃する', '放棄する', '無視する'],
  },
  {
    id: 120,
    word: 'require',
    pos: '動詞',
    correct: '必要とする',
    wrongs: ['提供する', '拒否する', '説明する'],
  },
  {
    id: 121,
    word: 'absorb',
    pos: '動詞',
    correct: '吸収する',
    wrongs: ['放出する', '反射する', '蒸発する'],
  },
  {
    id: 122,
    word: 'accept',
    pos: '動詞',
    correct: '受け入れる',
    wrongs: ['拒否する', '無視する', '批判する'],
  },
  {
    id: 123,
    word: 'affect',
    pos: '動詞',
    correct: '影響を与える',
    wrongs: ['保護する', '無視する', '改善する'],
  },
  {
    id: 124,
    word: 'allow',
    pos: '動詞',
    correct: '許す・可能にする',
    wrongs: ['禁止する', '阻止する', '要求する'],
  },
  {
    id: 125,
    word: 'announce',
    pos: '動詞',
    correct: '発表する',
    wrongs: ['隠す', '否定する', '調査する'],
  },
  {
    id: 126,
    word: 'apply',
    pos: '動詞',
    correct: '応募する・適用する',
    wrongs: ['拒否する', '取り消す', '無視する'],
  },
  {
    id: 127,
    word: 'argue',
    pos: '動詞',
    correct: '議論する・主張する',
    wrongs: ['同意する', '諦める', '従う'],
  },
  {
    id: 128,
    word: 'arrange',
    pos: '動詞',
    correct: '手配する・整理する',
    wrongs: ['壊す', '無視する', '隠す'],
  },
  {
    id: 129,
    word: 'avoid',
    pos: '動詞',
    correct: '避ける',
    wrongs: ['求める', '受け入れる', '向き合う'],
  },
  {
    id: 130,
    word: 'borrow',
    pos: '動詞',
    correct: '借りる',
    wrongs: ['貸す', '買う', '盗む'],
  },
  {
    id: 131,
    word: 'cancel',
    pos: '動詞',
    correct: '取り消す',
    wrongs: ['予約する', '確認する', '延期する'],
  },
  {
    id: 132,
    word: 'celebrate',
    pos: '動詞',
    correct: '祝う',
    wrongs: ['悼む', '批判する', '無視する'],
  },
  {
    id: 133,
    word: 'collect',
    pos: '動詞',
    correct: '集める',
    wrongs: ['分散させる', '捨てる', '配る'],
  },
  {
    id: 134,
    word: 'compare',
    pos: '動詞',
    correct: '比較する',
    wrongs: ['区別する', '混同する', '無視する'],
  },
  {
    id: 135,
    word: 'connect',
    pos: '動詞',
    correct: 'つなぐ',
    wrongs: ['切る', '分ける', '壊す'],
  },
  {
    id: 136,
    word: 'control',
    pos: '動詞',
    correct: '管理する・制御する',
    wrongs: ['無視する', '破壊する', '従う'],
  },
  {
    id: 137,
    word: 'create',
    pos: '動詞',
    correct: '作り出す',
    wrongs: ['破壊する', '隠す', '盗む'],
  },
  {
    id: 138,
    word: 'decide',
    pos: '動詞',
    correct: '決める',
    wrongs: ['迷う', '諦める', '延期する'],
  },
  {
    id: 139,
    word: 'deliver',
    pos: '動詞',
    correct: '届ける',
    wrongs: ['受け取る', '返す', '盗む'],
  },
  {
    id: 140,
    word: 'disappear',
    pos: '動詞',
    correct: '消える',
    wrongs: ['現れる', '増える', '変化する'],
  },
  {
    id: 141,
    word: 'discover',
    pos: '動詞',
    correct: '発見する',
    wrongs: ['隠す', '忘れる', '失う'],
  },
  {
    id: 142,
    word: 'earn',
    pos: '動詞',
    correct: '稼ぐ',
    wrongs: ['使う', '借りる', '盗む'],
  },
  {
    id: 143,
    word: 'establish',
    pos: '動詞',
    correct: '設立する',
    wrongs: ['廃止する', '破壊する', '批判する'],
  },
  {
    id: 144,
    word: 'expect',
    pos: '動詞',
    correct: '期待する',
    wrongs: ['諦める', '恐れる', '疑う'],
  },
  {
    id: 145,
    word: 'explain',
    pos: '動詞',
    correct: '説明する',
    wrongs: ['隠す', '否定する', '無視する'],
  },
  {
    id: 146,
    word: 'fail',
    pos: '動詞',
    correct: '失敗する',
    wrongs: ['成功する', '諦める', '挑戦する'],
  },
  {
    id: 147,
    word: 'focus',
    pos: '動詞',
    correct: '集中する',
    wrongs: ['散漫になる', '無視する', '逃げる'],
  },
  {
    id: 148,
    word: 'generate',
    pos: '動詞',
    correct: '生み出す',
    wrongs: ['消費する', '破壊する', '隠す'],
  },
  {
    id: 149,
    word: 'handle',
    pos: '動詞',
    correct: '扱う',
    wrongs: ['無視する', '破壊する', '避ける'],
  },
  {
    id: 150,
    word: 'identify',
    pos: '動詞',
    correct: '識別する',
    wrongs: ['混同する', '隠す', '忘れる'],
  },
  {
    id: 151,
    word: 'indicate',
    pos: '動詞',
    correct: '示す',
    wrongs: ['隠す', '否定する', '無視する'],
  },
  {
    id: 152,
    word: 'inform',
    pos: '動詞',
    correct: '知らせる',
    wrongs: ['隠す', '無視する', '誤解させる'],
  },
  {
    id: 153,
    word: 'introduce',
    pos: '動詞',
    correct: '紹介する',
    wrongs: ['隠す', '批判する', '拒否する'],
  },
  {
    id: 154,
    word: 'investigate',
    pos: '動詞',
    correct: '調査する',
    wrongs: ['無視する', '隠す', '批判する'],
  },
  {
    id: 155,
    word: 'involve',
    pos: '動詞',
    correct: '含む・関与させる',
    wrongs: ['除外する', '無視する', '避ける'],
  },
  {
    id: 156,
    word: 'limit',
    pos: '動詞',
    correct: '制限する',
    wrongs: ['拡大する', '自由にする', '増やす'],
  },
  {
    id: 157,
    word: 'maintain',
    pos: '動詞',
    correct: '維持する',
    wrongs: ['変える', '破壊する', '無視する'],
  },
  {
    id: 158,
    word: 'manage',
    pos: '動詞',
    correct: '管理する・なんとかする',
    wrongs: ['失敗する', '無視する', '壊す'],
  },
  {
    id: 159,
    word: 'mention',
    pos: '動詞',
    correct: '言及する',
    wrongs: ['隠す', '無視する', '否定する'],
  },
  {
    id: 160,
    word: 'offer',
    pos: '動詞',
    correct: '提供する',
    wrongs: ['拒否する', '要求する', '批判する'],
  },
  {
    id: 161,
    word: 'overcome',
    pos: '動詞',
    correct: '克服する',
    wrongs: ['諦める', '避ける', '無視する'],
  },
  {
    id: 162,
    word: 'perform',
    pos: '動詞',
    correct: '行う・演じる',
    wrongs: ['失敗する', '避ける', '批判する'],
  },
  {
    id: 163,
    word: 'predict',
    pos: '動詞',
    correct: '予測する',
    wrongs: ['無視する', '確認する', '否定する'],
  },
  {
    id: 164,
    word: 'prepare',
    pos: '動詞',
    correct: '準備する',
    wrongs: ['諦める', '遅らせる', '無視する'],
  },
  {
    id: 165,
    word: 'prevent',
    pos: '動詞',
    correct: '防ぐ',
    wrongs: ['促進する', '無視する', '引き起こす'],
  },
  {
    id: 166,
    word: 'produce',
    pos: '動詞',
    correct: '生産する',
    wrongs: ['消費する', '破壊する', '輸入する'],
  },
  {
    id: 167,
    word: 'provide',
    pos: '動詞',
    correct: '提供する',
    wrongs: ['受け取る', '拒否する', '隠す'],
  },
  {
    id: 168,
    word: 'realize',
    pos: '動詞',
    correct: '気づく・実現する',
    wrongs: ['無視する', '忘れる', '誤解する'],
  },
  {
    id: 169,
    word: 'recognize',
    pos: '動詞',
    correct: '認識する',
    wrongs: ['無視する', '否定する', '忘れる'],
  },
  {
    id: 170,
    word: 'reduce',
    pos: '動詞',
    correct: '減らす',
    wrongs: ['増やす', '維持する', '変化させる'],
  },
  {
    id: 171,
    word: 'refuse',
    pos: '動詞',
    correct: '断る',
    wrongs: ['受け入れる', '提案する', '無視する'],
  },
  {
    id: 172,
    word: 'release',
    pos: '動詞',
    correct: '解放する・発売する',
    wrongs: ['閉じ込める', '隠す', '批判する'],
  },
  {
    id: 173,
    word: 'replace',
    pos: '動詞',
    correct: '取り替える',
    wrongs: ['修理する', '維持する', '無視する'],
  },
  {
    id: 174,
    word: 'research',
    pos: '動詞',
    correct: '研究する',
    wrongs: ['無視する', '否定する', '隠す'],
  },
  {
    id: 175,
    word: 'respect',
    pos: '動詞',
    correct: '尊敬する',
    wrongs: ['軽蔑する', '無視する', '批判する'],
  },
  {
    id: 176,
    word: 'save',
    pos: '動詞',
    correct: '救う・節約する',
    wrongs: ['失う', '無駄にする', '危険にする'],
  },
  {
    id: 177,
    word: 'select',
    pos: '動詞',
    correct: '選択する',
    wrongs: ['拒否する', '無視する', '混同する'],
  },
  {
    id: 178,
    word: 'share',
    pos: '動詞',
    correct: '共有する',
    wrongs: ['独占する', '隠す', '捨てる'],
  },
  {
    id: 179,
    word: 'solve',
    pos: '動詞',
    correct: '解決する',
    wrongs: ['引き起こす', '無視する', '悪化させる'],
  },
  {
    id: 180,
    word: 'spread',
    pos: '動詞',
    correct: '広がる・広める',
    wrongs: ['縮む', '集まる', '止まる'],
  },
  // 形容詞
  {
    id: 201,
    word: 'ancient',
    pos: '形容詞',
    correct: '古代の',
    wrongs: ['現代の', '巨大な', '神秘的な'],
  },
  {
    id: 202,
    word: 'anxious',
    pos: '形容詞',
    correct: '心配している',
    wrongs: ['怒っている', '喜んでいる', '疲れている'],
  },
  {
    id: 203,
    word: 'appropriate',
    pos: '形容詞',
    correct: '適切な',
    wrongs: ['不正な', '複雑な', '危険な'],
  },
  {
    id: 204,
    word: 'confident',
    pos: '形容詞',
    correct: '自信がある',
    wrongs: ['不安な', '謙虚な', '消極的な'],
  },
  {
    id: 205,
    word: 'convenient',
    pos: '形容詞',
    correct: '便利な',
    wrongs: ['不便な', '高価な', '複雑な'],
  },
  {
    id: 206,
    word: 'effective',
    pos: '形容詞',
    correct: '効果的な',
    wrongs: ['非効率な', '危険な', '退屈な'],
  },
  {
    id: 207,
    word: 'global',
    pos: '形容詞',
    correct: '世界的な',
    wrongs: ['地域的な', '個人的な', '国内の'],
  },
  {
    id: 208,
    word: 'natural',
    pos: '形容詞',
    correct: '自然の',
    wrongs: ['人工的な', '科学的な', '歴史的な'],
  },
  {
    id: 209,
    word: 'traditional',
    pos: '形容詞',
    correct: '伝統的な',
    wrongs: ['現代的な', '革新的な', '西洋的な'],
  },
  {
    id: 210,
    word: 'various',
    pos: '形容詞',
    correct: '様々な',
    wrongs: ['単一の', '同一の', '少数の'],
  },
  {
    id: 211,
    word: 'active',
    pos: '形容詞',
    correct: '活発な',
    wrongs: ['消極的な', '怠惰な', '静かな'],
  },
  {
    id: 212,
    word: 'affordable',
    pos: '形容詞',
    correct: '手頃な価格の',
    wrongs: ['高価な', '無料の', '貴重な'],
  },
  {
    id: 213,
    word: 'available',
    pos: '形容詞',
    correct: '利用できる',
    wrongs: ['利用不可の', '必要な', '禁止された'],
  },
  {
    id: 214,
    word: 'careful',
    pos: '形容詞',
    correct: '注意深い',
    wrongs: ['不注意な', '乱暴な', '怠惰な'],
  },
  {
    id: 215,
    word: 'certain',
    pos: '形容詞',
    correct: '確かな',
    wrongs: ['不確かな', '不明な', '疑わしい'],
  },
  {
    id: 216,
    word: 'common',
    pos: '形容詞',
    correct: '一般的な・共通の',
    wrongs: ['珍しい', '特別な', '個別の'],
  },
  {
    id: 217,
    word: 'complex',
    pos: '形容詞',
    correct: '複雑な',
    wrongs: ['単純な', '明確な', '簡単な'],
  },
  {
    id: 218,
    word: 'creative',
    pos: '形容詞',
    correct: '創造的な',
    wrongs: ['模倣的な', '退屈な', '平凡な'],
  },
  {
    id: 219,
    word: 'critical',
    pos: '形容詞',
    correct: '重大な・批判的な',
    wrongs: ['些細な', '肯定的な', '無関係な'],
  },
  {
    id: 220,
    word: 'current',
    pos: '形容詞',
    correct: '現在の',
    wrongs: ['過去の', '未来の', '古い'],
  },
  {
    id: 221,
    word: 'dangerous',
    pos: '形容詞',
    correct: '危険な',
    wrongs: ['安全な', '無害な', '快適な'],
  },
  {
    id: 222,
    word: 'equal',
    pos: '形容詞',
    correct: '平等な',
    wrongs: ['不平等な', '優れた', '劣った'],
  },
  {
    id: 223,
    word: 'flexible',
    pos: '形容詞',
    correct: '柔軟な',
    wrongs: ['硬直した', '複雑な', '不安定な'],
  },
  {
    id: 224,
    word: 'foreign',
    pos: '形容詞',
    correct: '外国の',
    wrongs: ['国内の', '地域の', '伝統的な'],
  },
  {
    id: 225,
    word: 'harmful',
    pos: '形容詞',
    correct: '有害な',
    wrongs: ['有益な', '無害な', '安全な'],
  },
  {
    id: 226,
    word: 'helpful',
    pos: '形容詞',
    correct: '役に立つ',
    wrongs: ['邪魔な', '無意味な', '危険な'],
  },
  {
    id: 227,
    word: 'honest',
    pos: '形容詞',
    correct: '正直な',
    wrongs: ['不正直な', '狡猾な', '秘密主義の'],
  },
  {
    id: 228,
    word: 'huge',
    pos: '形容詞',
    correct: '巨大な',
    wrongs: ['小さな', '細い', '薄い'],
  },
  {
    id: 229,
    word: 'ideal',
    pos: '形容詞',
    correct: '理想的な',
    wrongs: ['現実的な', '不完全な', '失望的な'],
  },
  {
    id: 230,
    word: 'independent',
    pos: '形容詞',
    correct: '独立した',
    wrongs: ['依存した', '従属した', '関連した'],
  },
  {
    id: 231,
    word: 'local',
    pos: '形容詞',
    correct: '地域の・地元の',
    wrongs: ['全国の', '海外の', '都市の'],
  },
  {
    id: 232,
    word: 'modern',
    pos: '形容詞',
    correct: '現代の',
    wrongs: ['古代の', '伝統的な', '歴史的な'],
  },
  {
    id: 233,
    word: 'negative',
    pos: '形容詞',
    correct: '否定的な・マイナスの',
    wrongs: ['肯定的な', '中立の', '積極的な'],
  },
  {
    id: 234,
    word: 'obvious',
    pos: '形容詞',
    correct: '明らかな',
    wrongs: ['不明な', '複雑な', '曖昧な'],
  },
  {
    id: 235,
    word: 'original',
    pos: '形容詞',
    correct: '独創的な・元の',
    wrongs: ['模倣の', '改良された', '最新の'],
  },
  {
    id: 236,
    word: 'physical',
    pos: '形容詞',
    correct: '身体的な・物理的な',
    wrongs: ['精神的な', '感情的な', '社会的な'],
  },
  {
    id: 237,
    word: 'positive',
    pos: '形容詞',
    correct: '肯定的な・プラスの',
    wrongs: ['否定的な', '中立の', '消極的な'],
  },
  {
    id: 238,
    word: 'powerful',
    pos: '形容詞',
    correct: '力強い',
    wrongs: ['弱い', '穏やかな', '無力な'],
  },
  {
    id: 239,
    word: 'practical',
    pos: '形容詞',
    correct: '実用的な',
    wrongs: ['理論的な', '抽象的な', '無駄な'],
  },
  {
    id: 240,
    word: 'rare',
    pos: '形容詞',
    correct: '珍しい',
    wrongs: ['一般的な', '普通の', '頻繁な'],
  },
  // 副詞・熟語
  {
    id: 251,
    word: 'actually',
    pos: '副詞',
    correct: '実際には',
    wrongs: ['理論的には', 'おそらく', 'めったに'],
  },
  {
    id: 252,
    word: 'already',
    pos: '副詞',
    correct: 'すでに',
    wrongs: ['まだ', 'もうすぐ', 'めったに'],
  },
  {
    id: 253,
    word: 'especially',
    pos: '副詞',
    correct: '特に',
    wrongs: ['一般に', 'めったに', '突然'],
  },
  {
    id: 254,
    word: 'finally',
    pos: '副詞',
    correct: 'ついに・最後に',
    wrongs: ['最初に', '突然', 'めったに'],
  },
  {
    id: 255,
    word: 'however',
    pos: '接続詞',
    correct: 'しかしながら',
    wrongs: ['したがって', 'そのうえ', '例えば'],
  },
  {
    id: 256,
    word: 'instead',
    pos: '副詞',
    correct: 'その代わりに',
    wrongs: ['同時に', 'さらに', 'そのため'],
  },
  {
    id: 257,
    word: 'mostly',
    pos: '副詞',
    correct: '主に・大部分は',
    wrongs: ['たまに', 'まったく', '少しだけ'],
  },
  {
    id: 258,
    word: 'nearly',
    pos: '副詞',
    correct: 'ほぼ・もう少しで',
    wrongs: ['全く', '遠く', '正確に'],
  },
  {
    id: 259,
    word: 'otherwise',
    pos: '副詞',
    correct: 'さもなければ',
    wrongs: ['したがって', '例えば', 'しかし'],
  },
  {
    id: 260,
    word: 'perhaps',
    pos: '副詞',
    correct: 'おそらく',
    wrongs: ['絶対に', 'めったに', 'たまに'],
  },
  {
    id: 261,
    word: 'probably',
    pos: '副詞',
    correct: 'おそらく',
    wrongs: ['絶対に', 'めったに', '決して'],
  },
  {
    id: 262,
    word: 'recently',
    pos: '副詞',
    correct: '最近',
    wrongs: ['昔', '将来', 'めったに'],
  },
  {
    id: 263,
    word: 'seriously',
    pos: '副詞',
    correct: '真剣に',
    wrongs: ['冗談で', '軽く', 'いい加減に'],
  },
  {
    id: 264,
    word: 'suddenly',
    pos: '副詞',
    correct: '突然',
    wrongs: ['ゆっくり', '定期的に', 'めったに'],
  },
  {
    id: 265,
    word: 'therefore',
    pos: '接続詞',
    correct: 'したがって',
    wrongs: ['しかし', '例えば', 'さらに'],
  },
  {
    id: 266,
    word: 'usually',
    pos: '副詞',
    correct: 'たいてい',
    wrongs: ['めったに', '決して', 'たまに'],
  },
  {
    id: 267,
    word: 'as well as',
    pos: '熟語',
    correct: '〜だけでなく',
    wrongs: ['〜の代わりに', '〜のために', '〜にもかかわらず'],
  },
  {
    id: 268,
    word: 'at least',
    pos: '熟語',
    correct: '少なくとも',
    wrongs: ['多くとも', 'だいたい', 'せいぜい'],
  },
  {
    id: 269,
    word: 'come up with',
    pos: '熟語',
    correct: '思いつく',
    wrongs: ['諦める', '批判する', '無視する'],
  },
  {
    id: 270,
    word: 'in addition',
    pos: '熟語',
    correct: 'そのうえ・加えて',
    wrongs: ['しかし', 'したがって', '例えば'],
  },
  {
    id: 271,
    word: 'in order to',
    pos: '熟語',
    correct: '〜するために',
    wrongs: ['〜にもかかわらず', '〜の間に', '〜のせいで'],
  },
  {
    id: 272,
    word: 'look forward to',
    pos: '熟語',
    correct: '楽しみにする',
    wrongs: ['心配する', '諦める', '無視する'],
  },
  {
    id: 273,
    word: 'make sure',
    pos: '熟語',
    correct: '確認する・必ず〜する',
    wrongs: ['忘れる', '無視する', '諦める'],
  },
  {
    id: 274,
    word: 'on the other hand',
    pos: '熟語',
    correct: '一方では',
    wrongs: ['したがって', '例えば', 'そのうえ'],
  },
  {
    id: 275,
    word: 'take care of',
    pos: '熟語',
    correct: '世話をする',
    wrongs: ['無視する', '批判する', '諦める'],
  },
  {
    id: 276,
    word: 'used to',
    pos: '熟語',
    correct: '以前は〜だった',
    wrongs: ['〜するべきだ', '〜するつもりだ', '〜できる'],
  },
  {
    id: 277,
    word: 'be interested in',
    pos: '熟語',
    correct: '〜に興味がある',
    wrongs: ['〜が得意だ', '〜が嫌いだ', '〜を心配している'],
  },
  {
    id: 278,
    word: 'find out',
    pos: '熟語',
    correct: '調べて知る・発見する',
    wrongs: ['無視する', '忘れる', '隠す'],
  },
  {
    id: 279,
    word: 'give up',
    pos: '熟語',
    correct: '諦める',
    wrongs: ['挑戦する', '成功する', '続ける'],
  },
  {
    id: 280,
    word: 'run out of',
    pos: '熟語',
    correct: '〜を使い果たす',
    wrongs: ['〜を節約する', '〜を増やす', '〜を補充する'],
  },

  {
    id: 281,
    word: 'build',
    pos: '動詞',
    correct: '建てる・作る',
    wrongs: ['壊す', '売る', '借りる'],
  },
  {
    id: 282,
    word: 'hurt',
    pos: '動詞',
    correct: '傷つける・痛む',
    wrongs: ['治す', '助ける', '喜ばせる'],
  },
  {
    id: 283,
    word: 'practice',
    pos: '動詞',
    correct: '練習する',
    wrongs: ['休む', '諦める', '忘れる'],
  },
  {
    id: 284,
    word: 'forget',
    pos: '動詞',
    correct: '忘れる',
    wrongs: ['覚える', '思い出す', '学ぶ'],
  },
  {
    id: 285,
    word: 'invite',
    pos: '動詞',
    correct: '招待する',
    wrongs: ['断る', '無視する', '追い出す'],
  },
  {
    id: 286,
    word: 'own',
    pos: '動詞',
    correct: '所有する',
    wrongs: ['借りる', '売る', '失う'],
  },
  {
    id: 287,
    word: 'turn',
    pos: '動詞',
    correct: '曲がる・回る',
    wrongs: ['止まる', '進む', '落ちる'],
  },
  {
    id: 288,
    word: 'win',
    pos: '動詞',
    correct: '勝つ',
    wrongs: ['負ける', '引き分ける', '諦める'],
  },
  {
    id: 289,
    word: 'leave',
    pos: '動詞',
    correct: '去る・出発する',
    wrongs: ['到着する', '残る', '待つ'],
  },
  {
    id: 290,
    word: 'travel',
    pos: '動詞',
    correct: '旅行する',
    wrongs: ['帰宅する', '休む', '働く'],
  },
  {
    id: 291,
    word: 'worry',
    pos: '動詞',
    correct: '心配する',
    wrongs: ['安心する', '楽しむ', '喜ぶ'],
  },
  {
    id: 292,
    word: 'happen',
    pos: '動詞',
    correct: '起こる',
    wrongs: ['終わる', '始める', '計画する'],
  },
  {
    id: 293,
    word: 'join',
    pos: '動詞',
    correct: '参加する',
    wrongs: ['やめる', '無視する', '断る'],
  },
  {
    id: 294,
    word: 'serve',
    pos: '動詞',
    correct: '提供する・仕える',
    wrongs: ['受け取る', '注文する', '断る'],
  },
  {
    id: 295,
    word: 'hold',
    pos: '動詞',
    correct: '持つ・開催する',
    wrongs: ['放す', '壊す', '失う'],
  },
  {
    id: 296,
    word: 'follow',
    pos: '動詞',
    correct: 'ついていく・従う',
    wrongs: ['逃げる', '無視する', '反抗する'],
  },
  {
    id: 297,
    word: 'fix',
    pos: '動詞',
    correct: '修理する・固定する',
    wrongs: ['壊す', '汚す', '捨てる'],
  },
  {
    id: 298,
    word: 'throw',
    pos: '動詞',
    correct: '投げる',
    wrongs: ['受け取る', '拾う', '落とす'],
  },
  {
    id: 299,
    word: 'draw',
    pos: '動詞',
    correct: '描く・引く',
    wrongs: ['消す', '塗る', '切る'],
  },
  {
    id: 300,
    word: 'hide',
    pos: '動詞',
    correct: '隠す・隠れる',
    wrongs: ['見せる', '探す', '見つける'],
  },
  {
    id: 301,
    word: 'interview',
    pos: '動詞',
    correct: '面接する',
    wrongs: ['解雇する', '採用する', '訓練する'],
  },
  {
    id: 302,
    word: 'bite',
    pos: '動詞',
    correct: 'かむ',
    wrongs: ['なめる', '吹く', '触れる'],
  },
  {
    id: 303,
    word: 'marry',
    pos: '動詞',
    correct: '結婚する',
    wrongs: ['離婚する', '付き合う', '別れる'],
  },
  {
    id: 304,
    word: 'recommend',
    pos: '動詞',
    correct: '勧める・推薦する',
    wrongs: ['反対する', '批判する', '無視する'],
  },
  {
    id: 305,
    word: 'match',
    pos: '動詞',
    correct: '一致する・合う',
    wrongs: ['外れる', '違う', 'ずれる'],
  },
  {
    id: 306,
    word: 'pull',
    pos: '動詞',
    correct: '引く',
    wrongs: ['押す', '持ち上げる', '投げる'],
  },
  {
    id: 307,
    word: 'cover',
    pos: '動詞',
    correct: 'おおう・含む',
    wrongs: ['開ける', '外す', '除く'],
  },
  {
    id: 308,
    word: 'agree',
    pos: '動詞',
    correct: '同意する',
    wrongs: ['反対する', '断る', '無視する'],
  },
  {
    id: 309,
    word: 'push',
    pos: '動詞',
    correct: '押す',
    wrongs: ['引く', '持ち上げる', '投げる'],
  },
  {
    id: 310,
    word: 'continue',
    pos: '動詞',
    correct: '続ける',
    wrongs: ['やめる', '諦める', '中断する'],
  },
  {
    id: 311,
    word: 'wonder',
    pos: '動詞',
    correct: '不思議に思う',
    wrongs: ['確信する', '知っている', '理解する'],
  },
  {
    id: 312,
    word: 'recycle',
    pos: '動詞',
    correct: 'リサイクルする',
    wrongs: ['捨てる', '燃やす', '埋める'],
  },
  {
    id: 313,
    word: 'paint',
    pos: '動詞',
    correct: '塗る・描く',
    wrongs: ['消す', '削る', '切る'],
  },
  {
    id: 314,
    word: 'seem',
    pos: '動詞',
    correct: '〜に見える・思われる',
    wrongs: ['証明する', '確認する', '否定する'],
  },
  {
    id: 315,
    word: 'feed',
    pos: '動詞',
    correct: 'えさを与える・食べさせる',
    wrongs: ['飢えさせる', '無視する', '奪う'],
  },
  {
    id: 316,
    word: 'receive',
    pos: '動詞',
    correct: '受け取る',
    wrongs: ['送る', '渡す', '断る'],
  },
  {
    id: 317,
    word: 'express',
    pos: '動詞',
    correct: '表現する',
    wrongs: ['隠す', '否定する', '抑える'],
  },
  {
    id: 318,
    word: 'suit',
    pos: '動詞',
    correct: '似合う・適する',
    wrongs: ['似合わない', '不釣り合いだ', '適さない'],
  },
  {
    id: 319,
    word: 'wish',
    pos: '動詞',
    correct: '願う',
    wrongs: ['諦める', '断念する', '忘れる'],
  },
  {
    id: 320,
    word: 'remember',
    pos: '動詞',
    correct: '覚えている・思い出す',
    wrongs: ['忘れる', '無視する', '混乱する'],
  },
  {
    id: 321,
    word: 'pay',
    pos: '動詞',
    correct: '払う',
    wrongs: ['受け取る', '借りる', '貯める'],
  },
  {
    id: 322,
    word: 'check',
    pos: '動詞',
    correct: '確認する',
    wrongs: ['無視する', '見落とす', '間違える'],
  },
  {
    id: 323,
    word: 'surprise',
    pos: '動詞',
    correct: '驚かせる',
    wrongs: ['安心させる', '失望させる', '慰める'],
  },
  {
    id: 324,
    word: 'admit',
    pos: '動詞',
    correct: '認める',
    wrongs: ['否定する', '隠す', '言い訳する'],
  },
  {
    id: 325,
    word: 'afford',
    pos: '動詞',
    correct: '〜する余裕がある',
    wrongs: ['〜できない', '〜を断念する', '〜を諦める'],
  },
  {
    id: 326,
    word: 'appreciate',
    pos: '動詞',
    correct: '感謝する・高く評価する',
    wrongs: ['批判する', '無視する', '軽視する'],
  },
  {
    id: 327,
    word: 'rely',
    pos: '動詞',
    correct: '頼る・信頼する',
    wrongs: ['疑う', '無視する', '避ける'],
  },
  {
    id: 328,
    word: 'treat',
    pos: '動詞',
    correct: '扱う・おごる',
    wrongs: ['無視する', '傷つける', '奪う'],
  },
  {
    id: 329,
    word: 'award',
    pos: '動詞',
    correct: '授与する',
    wrongs: ['剥奪する', '返却する', '断る'],
  },
  {
    id: 330,
    word: 'contain',
    pos: '動詞',
    correct: '含む・入っている',
    wrongs: ['除外する', '空にする', '捨てる'],
  },
  {
    id: 331,
    word: 'prove',
    pos: '動詞',
    correct: '証明する',
    wrongs: ['否定する', '疑う', '隠す'],
  },
  {
    id: 332,
    word: 'disappoint',
    pos: '動詞',
    correct: 'がっかりさせる',
    wrongs: ['喜ばせる', '驚かせる', '安心させる'],
  },
  {
    id: 333,
    word: 'hire',
    pos: '動詞',
    correct: '雇う',
    wrongs: ['解雇する', '断る', '無視する'],
  },
  {
    id: 334,
    word: 'forgive',
    pos: '動詞',
    correct: '許す',
    wrongs: ['責める', '批判する', '怒る'],
  },
  {
    id: 335,
    word: 'stare',
    pos: '動詞',
    correct: 'じっと見る',
    wrongs: ['見逃す', '無視する', 'そらす'],
  },
  {
    id: 336,
    word: 'survive',
    pos: '動詞',
    correct: '生き残る',
    wrongs: ['死ぬ', '倒れる', '逃げる'],
  },
  {
    id: 337,
    word: 'employ',
    pos: '動詞',
    correct: '雇用する',
    wrongs: ['解雇する', '退職する', '無視する'],
  },
  {
    id: 338,
    word: 'raise',
    pos: '動詞',
    correct: '上げる・育てる',
    wrongs: ['下げる', '捨てる', '壊す'],
  },
  {
    id: 339,
    word: 'recover',
    pos: '動詞',
    correct: '回復する',
    wrongs: ['悪化する', '倒れる', '諦める'],
  },
  {
    id: 340,
    word: 'attend',
    pos: '動詞',
    correct: '出席する',
    wrongs: ['欠席する', '退出する', '無視する'],
  },
  {
    id: 341,
    word: 'suffer',
    pos: '動詞',
    correct: '苦しむ',
    wrongs: ['楽しむ', '喜ぶ', '安心する'],
  },
  {
    id: 342,
    word: 'discuss',
    pos: '動詞',
    correct: '話し合う・議論する',
    wrongs: ['黙る', '無視する', '避ける'],
  },
  {
    id: 343,
    word: 'trust',
    pos: '動詞',
    correct: '信頼する',
    wrongs: ['疑う', '無視する', '嫌う'],
  },
  {
    id: 344,
    word: 'measure',
    pos: '動詞',
    correct: '測る',
    wrongs: ['推測する', '無視する', '間違える'],
  },
  {
    id: 345,
    word: 'trade',
    pos: '動詞',
    correct: '取引する・交換する',
    wrongs: ['保持する', '拒否する', '返却する'],
  },
  {
    id: 346,
    word: 'plant',
    pos: '動詞',
    correct: '植える',
    wrongs: ['抜く', '捨てる', '切る'],
  },
  {
    id: 347,
    word: 'order',
    pos: '動詞',
    correct: '注文する・命令する',
    wrongs: ['断る', 'キャンセルする', '返す'],
  },
  {
    id: 348,
    word: 'relax',
    pos: '動詞',
    correct: 'リラックスする',
    wrongs: ['緊張する', '心配する', '頑張る'],
  },
  {
    id: 349,
    word: 'design',
    pos: '動詞',
    correct: '設計する・デザインする',
    wrongs: ['壊す', '無視する', '模倣する'],
  },
  {
    id: 350,
    word: 'idea',
    pos: '名詞',
    correct: '考え・アイデア',
    wrongs: ['事実', '証拠', '結果'],
  },
  {
    id: 351,
    word: 'fact',
    pos: '名詞',
    correct: '事実',
    wrongs: ['意見', '推測', '嘘'],
  },
  {
    id: 352,
    word: 'sale',
    pos: '名詞',
    correct: '販売・セール',
    wrongs: ['購入', '返品', '注文'],
  },
  {
    id: 353,
    word: 'reservation',
    pos: '名詞',
    correct: '予約',
    wrongs: ['キャンセル', '変更', '確認'],
  },
  {
    id: 354,
    word: 'medicine',
    pos: '名詞',
    correct: '薬・医学',
    wrongs: ['毒', '治療', '症状'],
  },
  {
    id: 355,
    word: 'trouble',
    pos: '名詞',
    correct: '問題・困難',
    wrongs: ['解決', '成功', '喜び'],
  },
  {
    id: 356,
    word: 'sign',
    pos: '名詞',
    correct: '標識・兆候',
    wrongs: ['証拠', '理由', '結果'],
  },
  {
    id: 357,
    word: 'instrument',
    pos: '名詞',
    correct: '楽器・器具',
    wrongs: ['衣服', '食料', '家具'],
  },
  {
    id: 358,
    word: 'discount',
    pos: '名詞',
    correct: '割引',
    wrongs: ['増額', '税金', '手数料'],
  },
  {
    id: 359,
    word: 'date',
    pos: '名詞',
    correct: '日付・デート',
    wrongs: ['時刻', '場所', '金額'],
  },
  {
    id: 360,
    word: 'tool',
    pos: '名詞',
    correct: '道具',
    wrongs: ['材料', '食料', '衣服'],
  },
  {
    id: 361,
    word: 'noise',
    pos: '名詞',
    correct: '騒音',
    wrongs: ['沈黙', '音楽', '声'],
  },
  {
    id: 362,
    word: 'flavor',
    pos: '名詞',
    correct: '味・風味',
    wrongs: ['香り', '色', '形'],
  },
  {
    id: 363,
    word: 'vegetable',
    pos: '名詞',
    correct: '野菜',
    wrongs: ['果物', '肉', '穀物'],
  },
  {
    id: 364,
    word: 'flight',
    pos: '名詞',
    correct: 'フライト・飛行',
    wrongs: ['航海', '旅行', '乗車'],
  },
  {
    id: 365,
    word: 'neighbor',
    pos: '名詞',
    correct: '隣人',
    wrongs: ['友人', '親戚', '同僚'],
  },
  {
    id: 366,
    word: 'center',
    pos: '名詞',
    correct: '中心・センター',
    wrongs: ['端', '端点', '外側'],
  },
  {
    id: 367,
    word: 'bill',
    pos: '名詞',
    correct: '請求書・紙幣',
    wrongs: ['領収書', '合計', '割引'],
  },
  {
    id: 368,
    word: 'information',
    pos: '名詞',
    correct: '情報',
    wrongs: ['意見', '推測', 'うわさ'],
  },
  {
    id: 369,
    word: 'mistake',
    pos: '名詞',
    correct: '間違い',
    wrongs: ['正解', '成功', '成果'],
  },
  {
    id: 370,
    word: 'result',
    pos: '名詞',
    correct: '結果',
    wrongs: ['原因', '理由', '目的'],
  },
  {
    id: 371,
    word: 'chance',
    pos: '名詞',
    correct: 'チャンス・機会',
    wrongs: ['危険', '失敗', '問題'],
  },
  {
    id: 372,
    word: 'effort',
    pos: '名詞',
    correct: '努力',
    wrongs: ['怠惰', '失敗', '諦め'],
  },
  {
    id: 373,
    word: 'method',
    pos: '名詞',
    correct: '方法',
    wrongs: ['問題', '結果', '目的'],
  },
  {
    id: 374,
    word: 'opinion',
    pos: '名詞',
    correct: '意見',
    wrongs: ['事実', '証拠', '報告'],
  },
  {
    id: 375,
    word: 'success',
    pos: '名詞',
    correct: '成功',
    wrongs: ['失敗', '諦め', '後退'],
  },
  {
    id: 376,
    word: 'decision',
    pos: '名詞',
    correct: '決断・決定',
    wrongs: ['迷い', '後悔', '混乱'],
  },
  {
    id: 377,
    word: 'effect',
    pos: '名詞',
    correct: '効果・影響',
    wrongs: ['原因', '理由', '過程'],
  },
  {
    id: 378,
    word: 'sense',
    pos: '名詞',
    correct: '感覚・センス',
    wrongs: ['混乱', '無関心', '無知'],
  },
  {
    id: 379,
    word: 'fee',
    pos: '名詞',
    correct: '料金・手数料',
    wrongs: ['返金', '割引', '無料'],
  },
  {
    id: 380,
    word: 'temperature',
    pos: '名詞',
    correct: '温度・気温',
    wrongs: ['湿度', '気圧', '風速'],
  },
  {
    id: 381,
    word: 'education',
    pos: '名詞',
    correct: '教育',
    wrongs: ['無知', '怠惰', '失業'],
  },
  {
    id: 382,
    word: 'spirit',
    pos: '名詞',
    correct: '精神・やる気',
    wrongs: ['肉体', '疲労', '諦め'],
  },
  {
    id: 383,
    word: 'nation',
    pos: '名詞',
    correct: '国家・国民',
    wrongs: ['地域', '市町村', '個人'],
  },
  {
    id: 384,
    word: 'direction',
    pos: '名詞',
    correct: '方向・指示',
    wrongs: ['場所', '距離', '速度'],
  },
  {
    id: 385,
    word: 'role',
    pos: '名詞',
    correct: '役割',
    wrongs: ['責任', '義務', '権利'],
  },
  {
    id: 386,
    word: 'silence',
    pos: '名詞',
    correct: '沈黙',
    wrongs: ['騒音', '声', '音楽'],
  },
  {
    id: 387,
    word: 'habit',
    pos: '名詞',
    correct: '習慣',
    wrongs: ['変化', '例外', '偶然'],
  },
  {
    id: 388,
    word: 'quality',
    pos: '名詞',
    correct: '質・品質',
    wrongs: ['量', '価格', '色'],
  },
  {
    id: 389,
    word: 'crime',
    pos: '名詞',
    correct: '犯罪',
    wrongs: ['正義', '法律', '許可'],
  },
  {
    id: 390,
    word: 'expert',
    pos: '名詞',
    correct: '専門家',
    wrongs: ['初心者', '素人', '学生'],
  },
  {
    id: 391,
    word: 'tax',
    pos: '名詞',
    correct: '税金',
    wrongs: ['割引', '返金', '補助金'],
  },
  {
    id: 392,
    word: 'meal',
    pos: '名詞',
    correct: '食事',
    wrongs: ['間食', '飲み物', '菓子'],
  },
  {
    id: 393,
    word: 'behavior',
    pos: '名詞',
    correct: '行動・振る舞い',
    wrongs: ['思考', '感情', '意見'],
  },
  {
    id: 394,
    word: 'activity',
    pos: '名詞',
    correct: '活動',
    wrongs: ['休息', '怠惰', '停止'],
  },
  {
    id: 395,
    word: 'lecture',
    pos: '名詞',
    correct: '講義・説教',
    wrongs: ['試験', '課題', '休憩'],
  },
  {
    id: 396,
    word: 'campaign',
    pos: '名詞',
    correct: 'キャンペーン・運動',
    wrongs: ['反対', '中止', '失敗'],
  },
  {
    id: 397,
    word: 'shortage',
    pos: '名詞',
    correct: '不足',
    wrongs: ['余剰', '増加', '充足'],
  },
  {
    id: 398,
    word: 'athlete',
    pos: '名詞',
    correct: 'アスリート・運動選手',
    wrongs: ['観客', '審判', '観戦者'],
  },
  {
    id: 399,
    word: 'adventure',
    pos: '名詞',
    correct: '冒険',
    wrongs: ['日常', '安全', '退屈'],
  },
  {
    id: 400,
    word: 'soil',
    pos: '名詞',
    correct: '土・土壌',
    wrongs: ['岩', '砂', '水'],
  },
  {
    id: 401,
    word: 'muscle',
    pos: '名詞',
    correct: '筋肉',
    wrongs: ['骨', '皮膚', '神経'],
  },
  {
    id: 402,
    word: 'ordinary',
    pos: '形容詞',
    correct: '普通の',
    wrongs: ['特別な', '珍しい', '特殊な'],
  },
  {
    id: 403,
    word: 'polite',
    pos: '形容詞',
    correct: '丁寧な・礼儀正しい',
    wrongs: ['失礼な', '乱暴な', '無礼な'],
  },
  {
    id: 404,
    word: 'empty',
    pos: '形容詞',
    correct: '空の',
    wrongs: ['いっぱいの', '重い', '中身のある'],
  },
  {
    id: 405,
    word: 'calm',
    pos: '形容詞',
    correct: '穏やかな・落ち着いた',
    wrongs: ['興奮した', '怒った', '不安な'],
  },
  {
    id: 406,
    word: 'comfortable',
    pos: '形容詞',
    correct: '快適な',
    wrongs: ['不快な', '窮屈な', '厳しい'],
  },
  {
    id: 407,
    word: 'formal',
    pos: '形容詞',
    correct: '正式な・フォーマルな',
    wrongs: ['非公式の', 'カジュアルな', '私的な'],
  },
  {
    id: 408,
    word: 'similar',
    pos: '形容詞',
    correct: '似ている',
    wrongs: ['異なる', '正反対の', '無関係な'],
  },
  {
    id: 409,
    word: 'necessary',
    pos: '形容詞',
    correct: '必要な',
    wrongs: ['不必要な', '余分な', '無関係な'],
  },
  {
    id: 410,
    word: 'possible',
    pos: '形容詞',
    correct: '可能な',
    wrongs: ['不可能な', '困難な', '危険な'],
  },
  {
    id: 411,
    word: 'specific',
    pos: '形容詞',
    correct: '具体的な・特定の',
    wrongs: ['一般的な', '曖昧な', '漠然とした'],
  },
  {
    id: 412,
    word: 'professional',
    pos: '形容詞',
    correct: 'プロの・専門的な',
    wrongs: ['アマチュアの', '素人の', '初心者の'],
  },
  {
    id: 413,
    word: 'suitable',
    pos: '形容詞',
    correct: '適切な・ふさわしい',
    wrongs: ['不適切な', '不釣り合いな', '不向きな'],
  },
  {
    id: 414,
    word: 'patient',
    pos: '形容詞',
    correct: '忍耐強い',
    wrongs: ['短気な', '焦った', '怒りっぽい'],
  },
  {
    id: 415,
    word: 'unique',
    pos: '形容詞',
    correct: '独特な・ユニークな',
    wrongs: ['普通の', '平凡な', '一般的な'],
  },
  {
    id: 416,
    word: 'extra',
    pos: '形容詞',
    correct: '余分な・追加の',
    wrongs: ['不足した', '基本の', '標準の'],
  },
  {
    id: 417,
    word: 'portable',
    pos: '形容詞',
    correct: '携帯できる・持ち運び可能な',
    wrongs: ['重い', '固定された', '大きい'],
  },
  {
    id: 418,
    word: 'gradual',
    pos: '形容詞',
    correct: '徐々の・段階的な',
    wrongs: ['急激な', '突然の', '即座の'],
  },
  {
    id: 419,
    word: 'official',
    pos: '形容詞',
    correct: '公式の・正式な',
    wrongs: ['非公式の', '私的な', '個人的な'],
  },
  {
    id: 420,
    word: 'immediately',
    pos: '副詞',
    correct: 'すぐに・直ちに',
    wrongs: ['ゆっくりと', 'やがて', 'いつか'],
  },
  {
    id: 421,
    word: 'eventually',
    pos: '副詞',
    correct: 'ついに・最終的に',
    wrongs: ['決して', '絶対に', 'すぐに'],
  },
  {
    id: 422,
    word: 'currently',
    pos: '副詞',
    correct: '現在・今のところ',
    wrongs: ['以前', 'かつて', '将来'],
  },
  {
    id: 423,
    word: 'hardly',
    pos: '副詞',
    correct: 'ほとんど〜ない',
    wrongs: ['十分に', 'よく', 'たびたび'],
  },
  {
    id: 424,
    word: 'quite',
    pos: '副詞',
    correct: 'かなり・まったく',
    wrongs: ['少し', 'ほとんど', 'わずかに'],
  },
  {
    id: 425,
    word: 'rather',
    pos: '副詞',
    correct: 'むしろ・かなり',
    wrongs: ['少しも', 'まったく', 'わずかに'],
  },
  {
    id: 426,
    word: 'afterward',
    pos: '副詞',
    correct: 'その後・後で',
    wrongs: ['以前', '同時に', '最初に'],
  },
  {
    id: 427,
    word: 'regularly',
    pos: '副詞',
    correct: '定期的に',
    wrongs: ['不規則に', 'たまに', 'めったに'],
  },
  {
    id: 428,
    word: 'gradually',
    pos: '副詞',
    correct: '徐々に',
    wrongs: ['急に', '突然', 'すぐに'],
  },
  {
    id: 429,
    word: 'exactly',
    pos: '副詞',
    correct: 'ちょうど・正確に',
    wrongs: ['おおよそ', 'だいたい', '不正確に'],
  },
  {
    id: 430,
    word: 'generally',
    pos: '副詞',
    correct: '一般的に',
    wrongs: ['特別に', '例外的に', '特殊に'],
  },
  {
    id: 431,
    word: 'originally',
    pos: '副詞',
    correct: 'もともと・最初は',
    wrongs: ['最終的に', '現在は', '後から'],
  },
  {
    id: 432,
    word: 'apparently',
    pos: '副詞',
    correct: '明らかに・どうやら',
    wrongs: ['秘密に', '実は', '実際には'],
  },
  {
    id: 433,
    word: 'be aware of',
    pos: '熟語',
    correct: '〜に気づいている',
    wrongs: ['〜を無視する', '〜を否定する', '〜を嫌う'],
  },
  {
    id: 434,
    word: 'be sure to',
    pos: '熟語',
    correct: '必ず〜する',
    wrongs: ['〜しないようにする', '〜を避ける', '〜を諦める'],
  },
  {
    id: 435,
    word: 'be used to',
    pos: '熟語',
    correct: '〜に慣れている',
    wrongs: ['〜に驚く', '〜が苦手だ', '〜を嫌がる'],
  },
  {
    id: 436,
    word: 'be willing to',
    pos: '熟語',
    correct: '喜んで〜する',
    wrongs: ['〜を嫌がる', '〜を断る', '〜を避ける'],
  },
  {
    id: 437,
    word: 'be afraid of',
    pos: '熟語',
    correct: '〜を恐れている',
    wrongs: ['〜が好きだ', '〜を楽しむ', '〜を求める'],
  },
  {
    id: 438,
    word: 'be proud of',
    pos: '熟語',
    correct: '〜を誇りに思う',
    wrongs: ['〜を恥じる', '〜を嫌う', '〜を隠す'],
  },
  {
    id: 439,
    word: 'be different from',
    pos: '熟語',
    correct: '〜と異なる',
    wrongs: ['〜と同じだ', '〜に似ている', '〜と一致する'],
  },
  {
    id: 440,
    word: 'be familiar with',
    pos: '熟語',
    correct: '〜をよく知っている',
    wrongs: ['〜を知らない', '〜を無視する', '〜を避ける'],
  },
  {
    id: 441,
    word: 'make use of',
    pos: '熟語',
    correct: '〜を利用する',
    wrongs: ['〜を無駄にする', '〜を無視する', '〜を捨てる'],
  },
  {
    id: 442,
    word: 'make fun of',
    pos: '熟語',
    correct: '〜をからかう',
    wrongs: ['〜を褒める', '〜を助ける', '〜を守る'],
  },
  {
    id: 443,
    word: 'take advantage of',
    pos: '熟語',
    correct: '〜を活用する・利用する',
    wrongs: ['〜を無駄にする', '〜を避ける', '〜を拒否する'],
  },
  {
    id: 444,
    word: 'take part in',
    pos: '熟語',
    correct: '〜に参加する',
    wrongs: ['〜を欠席する', '〜を退出する', '〜を無視する'],
  },
  {
    id: 445,
    word: 'take place',
    pos: '熟語',
    correct: '起こる・開催される',
    wrongs: ['終了する', '延期される', 'キャンセルされる'],
  },
  {
    id: 446,
    word: 'take off',
    pos: '熟語',
    correct: '離陸する・脱ぐ',
    wrongs: ['着陸する', '着る', '止まる'],
  },
  {
    id: 447,
    word: 'put off',
    pos: '熟語',
    correct: '延期する',
    wrongs: ['前倒しにする', '取り消す', '急ぐ'],
  },
  {
    id: 448,
    word: 'put up with',
    pos: '熟語',
    correct: '我慢する',
    wrongs: ['逃げ出す', '抗議する', '解決する'],
  },
  {
    id: 449,
    word: 'put on',
    pos: '熟語',
    correct: '着る・身につける',
    wrongs: ['脱ぐ', '洗う', 'しまう'],
  },
  {
    id: 450,
    word: 'put away',
    pos: '熟語',
    correct: 'しまう・片付ける',
    wrongs: ['取り出す', '散らかす', '忘れる'],
  },
  {
    id: 451,
    word: 'get along with',
    pos: '熟語',
    correct: '〜と仲良くやっていく',
    wrongs: ['〜と対立する', '〜を無視する', '〜を避ける'],
  },
  {
    id: 452,
    word: 'get over',
    pos: '熟語',
    correct: '〜を乗り越える・回復する',
    wrongs: ['〜に負ける', '〜から逃げる', '〜を諦める'],
  },
  {
    id: 453,
    word: 'get rid of',
    pos: '熟語',
    correct: '〜を取り除く',
    wrongs: ['〜を増やす', '〜を保つ', '〜にしがみつく'],
  },
  {
    id: 454,
    word: 'in charge of',
    pos: '熟語',
    correct: '〜を担当して・管理して',
    wrongs: ['〜から外れて', '〜に無関係で', '〜を避けて'],
  },
  {
    id: 455,
    word: 'so far',
    pos: '熟語',
    correct: 'これまでのところ',
    wrongs: ['これから', 'その後', 'いつか'],
  },
  {
    id: 456,
    word: 'by chance',
    pos: '熟語',
    correct: '偶然に',
    wrongs: ['意図的に', '計画的に', '故意に'],
  },
  {
    id: 457,
    word: 'in spite of',
    pos: '熟語',
    correct: '〜にもかかわらず',
    wrongs: ['〜のおかげで', '〜のために', '〜に基づいて'],
  },
  {
    id: 458,
    word: 'instead of',
    pos: '熟語',
    correct: '〜の代わりに',
    wrongs: ['〜に加えて', '〜とともに', '〜のために'],
  },
  {
    id: 459,
    word: 'according to',
    pos: '熟語',
    correct: '〜によると',
    wrongs: ['〜に反して', '〜を無視して', '〜とは違って'],
  },
  {
    id: 460,
    word: 'as a result of',
    pos: '熟語',
    correct: '〜の結果として',
    wrongs: ['〜の原因で', '〜にもかかわらず', '〜とは無関係に'],
  },
  {
    id: 461,
    word: 'pick up',
    pos: '熟語',
    correct: '拾う・迎えに行く',
    wrongs: ['置き忘れる', '捨てる', '送り出す'],
  },
  {
    id: 462,
    word: 'figure out',
    pos: '熟語',
    correct: '理解する・解決する',
    wrongs: ['諦める', '混乱する', '無視する'],
  },
  {
    id: 463,
    word: 'keep up with',
    pos: '熟語',
    correct: '〜についていく・最新情報を把握する',
    wrongs: ['〜に遅れる', '〜を無視する', '〜を諦める'],
  },
  {
    id: 464,
    word: 'catch up with',
    pos: '熟語',
    correct: '〜に追いつく',
    wrongs: ['〜に遅れる', '〜を追い越す', '〜から離れる'],
  },
  {
    id: 465,
    word: 'depend on',
    pos: '熟語',
    correct: '〜に頼る・〜次第だ',
    wrongs: ['〜を無視する', '〜に反抗する', '〜を避ける'],
  },
  {
    id: 466,
    word: 'consist of',
    pos: '熟語',
    correct: '〜から成り立つ',
    wrongs: ['〜を除く', '〜に反する', '〜を超える'],
  },
  {
    id: 467,
    word: 'belong to',
    pos: '熟語',
    correct: '〜に属する・〜のものだ',
    wrongs: ['〜から離れる', '〜に反する', '〜を無視する'],
  },
  {
    id: 468,
    word: 'as soon as',
    pos: '熟語',
    correct: '〜するとすぐに',
    wrongs: ['〜した後で', '〜する前に', '〜しない限り'],
  },
  {
    id: 469,
    word: 'as long as',
    pos: '熟語',
    correct: '〜する限り・〜の間は',
    wrongs: ['〜でない限り', '〜した後で', '〜する前に'],
  },
  {
    id: 470,
    word: 'in conclusion',
    pos: '熟語',
    correct: '結論として',
    wrongs: ['はじめに', '次に', '一方で'],
  },
  {
    id: 471,
    word: 'hand in',
    pos: '熟語',
    correct: '提出する',
    wrongs: ['受け取る', '保持する', '返却する'],
  },
  {
    id: 472,
    word: 'point out',
    pos: '熟語',
    correct: '指摘する',
    wrongs: ['無視する', '隠す', '誤魔化す'],
  },
];

// ============================================================
// PART 2: 発声問題プール（130問）
// ============================================================
const SPEECH_POOL = [
  {
    id: 2001,
    display: 'knife',
    hint: 'ナイフ',
    accepted: ['knife'],
    note: 'k は黙字',
  },
  {
    id: 2002,
    display: 'knee',
    hint: 'ニー',
    accepted: ['knee', 'nee'],
    note: 'k は黙字',
  },
  {
    id: 2003,
    display: 'know',
    hint: 'ノウ',
    accepted: ['know', 'no'],
    note: 'k は黙字',
  },
  {
    id: 2004,
    display: 'knock',
    hint: 'ノック',
    accepted: ['knock', 'nock'],
    note: 'k は黙字',
  },
  {
    id: 2005,
    display: 'knight',
    hint: 'ナイト',
    accepted: ['knight', 'night'],
    note: 'k は黙字',
  },
  {
    id: 2006,
    display: 'write',
    hint: 'ライト',
    accepted: ['write', 'right'],
    note: 'w は黙字',
  },
  {
    id: 2007,
    display: 'wrong',
    hint: 'ロング',
    accepted: ['wrong'],
    note: 'w は黙字',
  },
  {
    id: 2008,
    display: 'wrap',
    hint: 'ラップ',
    accepted: ['wrap', 'rap'],
    note: 'w は黙字',
  },
  {
    id: 2009,
    display: 'wrist',
    hint: 'リスト',
    accepted: ['wrist', 'rist'],
    note: 'w は黙字',
  },
  {
    id: 2010,
    display: 'island',
    hint: 'アイランド',
    accepted: ['island'],
    note: 's は黙字',
  },
  {
    id: 2011,
    display: 'climb',
    hint: 'クライム',
    accepted: ['climb'],
    note: 'b は黙字',
  },
  {
    id: 2012,
    display: 'debt',
    hint: 'デット',
    accepted: ['debt'],
    note: 'b は黙字',
  },
  {
    id: 2013,
    display: 'doubt',
    hint: 'ダウト',
    accepted: ['doubt'],
    note: 'b は黙字',
  },
  {
    id: 2014,
    display: 'lamb',
    hint: 'ラム',
    accepted: ['lamb', 'lam'],
    note: 'b は黙字',
  },
  {
    id: 2015,
    display: 'bomb',
    hint: 'ボム',
    accepted: ['bomb'],
    note: 'b は黙字',
  },
  {
    id: 2016,
    display: 'honest',
    hint: 'オネスト',
    accepted: ['honest'],
    note: 'h は黙字',
  },
  {
    id: 2017,
    display: 'hour',
    hint: 'アウアー',
    accepted: ['hour', 'our'],
    note: 'h は黙字',
  },
  {
    id: 2018,
    display: 'honor',
    hint: 'オナー',
    accepted: ['honor'],
    note: 'h は黙字',
  },
  {
    id: 2019,
    display: 'sign',
    hint: 'サイン',
    accepted: ['sign'],
    note: 'g は黙字',
  },
  {
    id: 2020,
    display: 'design',
    hint: 'デザイン',
    accepted: ['design'],
    note: 'g は黙字',
  },
  {
    id: 2021,
    display: 'foreign',
    hint: 'フォーリン',
    accepted: ['foreign', 'foren'],
    note: 'g は黙字',
  },
  {
    id: 2022,
    display: 'castle',
    hint: 'キャッスル',
    accepted: ['castle'],
    note: 't は黙字',
  },
  {
    id: 2023,
    display: 'listen',
    hint: 'リッスン',
    accepted: ['listen'],
    note: 't は黙字',
  },
  {
    id: 2024,
    display: 'often',
    hint: 'オーフン',
    accepted: ['often', 'ofen'],
    note: 't は発音しないことも',
  },
  {
    id: 2025,
    display: 'fasten',
    hint: 'ファッスン',
    accepted: ['fasten'],
    note: 't は黙字',
  },
  {
    id: 2026,
    display: 'receipt',
    hint: 'リシート',
    accepted: ['receipt'],
    note: 'p は黙字',
  },
  {
    id: 2027,
    display: 'psychology',
    hint: 'サイコロジー',
    accepted: ['psychology', 'sycology'],
    note: 'p は黙字',
  },
  {
    id: 2028,
    display: 'sword',
    hint: 'ソード',
    accepted: ['sword'],
    note: 'w は黙字',
  },
  {
    id: 2029,
    display: 'answer',
    hint: 'アンサー',
    accepted: ['answer'],
    note: 'w は黙字',
  },
  {
    id: 2030,
    display: 'muscle',
    hint: 'マッスル',
    accepted: ['muscle'],
    note: 'c は黙字',
  },
  {
    id: 2031,
    display: 'vehicle',
    hint: 'ヴィーイクル',
    accepted: ['vehicle'],
    note: 'h は黙字',
  },
  {
    id: 2032,
    display: 'schedule',
    hint: 'スケジュール',
    accepted: ['schedule', 'skedule'],
    note: 'ch → sk 音',
  },
  {
    id: 2033,
    display: 'colonel',
    hint: 'カーネル',
    accepted: ['colonel', 'kernel', 'curnel'],
    note: '綴りと発音が全然違う',
  },
  {
    id: 2034,
    display: 'enough',
    hint: 'イナフ',
    accepted: ['enough', 'enuf'],
    note: 'gh → f 音',
  },
  {
    id: 2035,
    display: 'rough',
    hint: 'ラフ',
    accepted: ['rough', 'ruf'],
    note: 'gh → f 音',
  },
  {
    id: 2036,
    display: 'laugh',
    hint: 'ラフ',
    accepted: ['laugh', 'laf'],
    note: 'gh → f 音',
  },
  {
    id: 2037,
    display: 'tough',
    hint: 'タフ',
    accepted: ['tough', 'tuf'],
    note: 'gh → f 音',
  },
  {
    id: 2038,
    display: 'through',
    hint: 'スルー',
    accepted: ['through', 'thru'],
    note: 'gh は黙字',
  },
  {
    id: 2039,
    display: 'although',
    hint: 'オールゾウ',
    accepted: ['although', 'altho'],
    note: 'gh は黙字',
  },
  {
    id: 2040,
    display: 'thorough',
    hint: 'サロウ',
    accepted: ['thorough', 'thoro'],
    note: 'gh は黙字',
  },
  {
    id: 2041,
    display: 'night',
    hint: 'ナイト',
    accepted: ['night', 'nite'],
    note: 'gh は黙字',
  },
  {
    id: 2042,
    display: 'light',
    hint: 'ライト',
    accepted: ['light', 'lite'],
    note: 'gh は黙字',
  },
  {
    id: 2043,
    display: 'thought',
    hint: 'ソート',
    accepted: ['thought'],
    note: 'gh は黙字',
  },
  {
    id: 2044,
    display: 'daughter',
    hint: 'ドーター',
    accepted: ['daughter'],
    note: 'gh は黙字',
  },
  {
    id: 2045,
    display: 'Wednesday',
    hint: 'ウェンズデー',
    accepted: ['wednesday'],
    note: 'd は発音しない',
  },
  {
    id: 2046,
    display: 'February',
    hint: 'フェブラリー',
    accepted: ['february', 'febuary'],
    note: 'r の発音に注意',
  },
  {
    id: 2047,
    display: 'vegetable',
    hint: 'ベジタブル',
    accepted: ['vegetable', 'vegtable'],
    note: 'ge が省略されがち',
  },
  {
    id: 2048,
    display: 'comfortable',
    hint: 'カンフォータブル',
    accepted: ['comfortable', 'comftable'],
    note: '短縮発音',
  },
  {
    id: 2049,
    display: 'temperature',
    hint: 'テンパラチャー',
    accepted: ['temperature', 'temperture'],
    note: 'ra が省略されがち',
  },
  {
    id: 2050,
    display: 'environment',
    hint: 'エンバイロンメント',
    accepted: ['environment', 'enviroment'],
    note: 'n を落とさない',
  },
  {
    id: 2051,
    display: 'government',
    hint: 'ガバンメント',
    accepted: ['government', 'goverment'],
    note: 'n を落とさない',
  },
  {
    id: 2052,
    display: 'necessary',
    hint: 'ネセサリー',
    accepted: ['necessary', 'neccesary'],
    note: 'c, s の数に注意',
  },
  {
    id: 2053,
    display: 'interesting',
    hint: 'インタレスティング',
    accepted: ['interesting', 'intresting'],
    note: '省略に注意',
  },
  {
    id: 2054,
    display: 'especially',
    hint: 'イスペシャリー',
    accepted: ['especially', 'expecially'],
    note: 'e から始まる',
  },
  {
    id: 2055,
    display: 'usually',
    hint: 'ユージャリー',
    accepted: ['usually', 'usally'],
    note: 'zh 音',
  },
  {
    id: 2056,
    display: 'actually',
    hint: 'アクチュアリー',
    accepted: ['actually'],
    note: 'tch 音',
  },
  {
    id: 2057,
    display: 'probably',
    hint: 'プロバブリー',
    accepted: ['probably', 'probly'],
    note: 'b をしっかり',
  },
  {
    id: 2058,
    display: 'suddenly',
    hint: 'サドゥンリー',
    accepted: ['suddenly'],
    note: 'dd の発音',
  },
  {
    id: 2059,
    display: 'technology',
    hint: 'テクノロジー',
    accepted: ['technology'],
    note: 'ch → k 音',
  },
  {
    id: 2060,
    display: 'vocabulary',
    hint: 'ボキャブラリー',
    accepted: ['vocabulary', 'vocablary'],
    note: 'u を忘れずに',
  },
  {
    id: 2061,
    display: 'experience',
    hint: 'エクスピリエンス',
    accepted: ['experience'],
    note: 'per → pir 音',
  },
  {
    id: 2062,
    display: 'electricity',
    hint: 'エレクトリシティ',
    accepted: ['electricity'],
    note: 'tric の発音',
  },
  {
    id: 2063,
    display: 'opportunity',
    hint: 'オポチュニティ',
    accepted: ['opportunity'],
    note: 'tun → チュン',
  },
  {
    id: 2064,
    display: 'communication',
    hint: 'コミュニケーション',
    accepted: ['communication'],
    note: 'mun → ミュン',
  },
  {
    id: 2065,
    display: 'international',
    hint: 'インターナショナル',
    accepted: ['international'],
    note: 'nation → ネーション',
  },
  {
    id: 2066,
    display: 'photography',
    hint: 'フォトグラフィー',
    accepted: ['photography'],
    note: 'ph → f 音',
  },
  {
    id: 2067,
    display: 'want to go',
    hint: 'ウォント・トゥ・ゴー',
    accepted: ['want to go'],
    reject: ['wanna go'],
    note: 'wanna はNG',
  },
  {
    id: 2068,
    display: 'have to study',
    hint: 'ハフ・トゥ・スタディ',
    accepted: ['have to study'],
    reject: ['hafta study'],
    note: 'hafta はNG',
  },
  {
    id: 2069,
    display: 'going to leave',
    hint: 'ゴーイング・トゥ・リーブ',
    accepted: ['going to leave'],
    reject: ['gonna leave'],
    note: 'gonna はNG',
  },
  {
    id: 2070,
    display: 'would like to try',
    hint: 'ウッド・ライク・トゥ・トライ',
    accepted: ['would like to try'],
    note: '短縮しない',
  },
  {
    id: 2071,
    display: 'got to finish',
    hint: 'ガット・トゥ・フィニッシュ',
    accepted: ['got to finish'],
    reject: ['gotta finish'],
    note: 'gotta はNG',
  },
  {
    id: 2072,
    display: 'need to practice',
    hint: 'ニード・トゥ・プラクティス',
    accepted: ['need to practice'],
    note: 'practice の発音',
  },
  {
    id: 2073,
    display: 'bread',
    hint: 'ブレッド',
    accepted: ['bread', 'bred'],
    note: 'ea → e 音',
  },
  {
    id: 2074,
    display: 'health',
    hint: 'ヘルス',
    accepted: ['health', 'helth'],
    note: 'ea → e 音',
  },
  {
    id: 2075,
    display: 'weather',
    hint: 'ウェザー',
    accepted: ['weather', 'wether'],
    note: 'ea → e 音',
  },
  {
    id: 2076,
    display: 'measure',
    hint: 'メジャー',
    accepted: ['measure', 'mezher'],
    note: 's → zh 音',
  },
  {
    id: 2077,
    display: 'pleasure',
    hint: 'プレジャー',
    accepted: ['pleasure', 'plezher'],
    note: 's → zh 音',
  },
  {
    id: 2078,
    display: 'treasure',
    hint: 'トレジャー',
    accepted: ['treasure', 'trezher'],
    note: 's → zh 音',
  },
  {
    id: 2079,
    display: 'cough',
    hint: 'コフ',
    accepted: ['cough', 'cof'],
    note: 'gh → f 音',
  },
  {
    id: 2080,
    display: 'though',
    hint: 'ゾウ',
    accepted: ['though', 'tho'],
    note: 'gh は黙字',
  },
  {
    id: 2081,
    display: 'chaos',
    hint: 'ケイオス',
    accepted: ['chaos', 'kaos'],
    note: 'ch → k 音',
  },
  {
    id: 2082,
    display: 'character',
    hint: 'キャラクター',
    accepted: ['character'],
    note: 'ch → k 音',
  },
  {
    id: 2083,
    display: 'stomach',
    hint: 'スタマク',
    accepted: ['stomach', 'stumak'],
    note: 'ch → k 音',
  },
  {
    id: 2084,
    display: 'machine',
    hint: 'マシーン',
    accepted: ['machine', 'masheen'],
    note: 'ch → sh 音',
  },
  {
    id: 2085,
    display: 'unique',
    hint: 'ユニーク',
    accepted: ['unique', 'yooneek'],
    note: 'u → ユー 音',
  },
  {
    id: 2086,
    display: 'technique',
    hint: 'テクニーク',
    accepted: ['technique', 'tekneek'],
    note: 'que → k 音',
  },
  {
    id: 2087,
    display: 'guarantee',
    hint: 'ギャランティー',
    accepted: ['guarantee', 'garantee'],
    note: 'gua → ガ 音',
  },
  {
    id: 2088,
    display: 'guard',
    hint: 'ガード',
    accepted: ['guard', 'gard'],
    note: 'u は黙字',
  },
  {
    id: 2089,
    display: 'guide',
    hint: 'ガイド',
    accepted: ['guide', 'gide'],
    note: 'u は黙字',
  },
  {
    id: 2090,
    display: 'quite',
    hint: 'クワイト',
    accepted: ['quite', 'kwite'],
    note: 'qu → kw 音',
  },
  {
    id: 2091,
    display: 'quality',
    hint: 'クオリティ',
    accepted: ['quality', 'kwolity'],
    note: 'qu → kw 音',
  },
  {
    id: 2092,
    display: 'clothes',
    hint: 'クローズ',
    accepted: ['clothes', 'cloze'],
    note: 'th は弱い',
  },
  {
    id: 2093,
    display: 'athlete',
    hint: 'アスリート',
    accepted: ['athlete', 'athleet'],
    note: 'th の発音',
  },
  {
    id: 2094,
    display: 'rhythm',
    hint: 'リズム',
    accepted: ['rhythm', 'rithm'],
    note: 'y が母音の役割',
  },
  {
    id: 2095,
    display: 'business',
    hint: 'ビジネス',
    accepted: ['business', 'bizness'],
    note: 'u は黙字',
  },
  {
    id: 2096,
    display: 'cupboard',
    hint: 'カバード',
    accepted: ['cupboard', 'cubboard', 'cubbord'],
    note: 'p は黙字',
  },
  {
    id: 2097,
    display: 'subtle',
    hint: 'サトゥル',
    accepted: ['subtle', 'suttle'],
    note: 'b は黙字',
  },
  {
    id: 2098,
    display: 'scissors',
    hint: 'シザーズ',
    accepted: ['scissors', 'sizzors'],
    note: 'c は黙字',
  },
  {
    id: 2099,
    display: 'wreck',
    hint: 'レック',
    accepted: ['wreck', 'reck'],
    note: 'w は黙字',
  },
  {
    id: 2100,
    display: 'knob',
    hint: 'ノブ',
    accepted: ['knob', 'nob'],
    note: 'k は黙字',
  },
  {
    id: 2101,
    display: 'gnaw',
    hint: 'ノー',
    accepted: ['gnaw', 'naw'],
    note: 'g は黙字',
  },
  {
    id: 2102,
    display: 'solemn',
    hint: 'ソレム',
    accepted: ['solemn', 'solem'],
    note: 'n は黙字',
  },
  {
    id: 2103,
    display: 'autumn',
    hint: 'オータム',
    accepted: ['autumn', 'autum'],
    note: 'n は黙字',
  },
  {
    id: 2104,
    display: 'column',
    hint: 'コラム',
    accepted: ['column', 'colum'],
    note: 'n は黙字',
  },
  {
    id: 2105,
    display: 'whole',
    hint: 'ホール',
    accepted: ['whole', 'hole'],
    note: 'w は黙字',
  },
  {
    id: 2106,
    display: 'whisper',
    hint: 'ウィスパー',
    accepted: ['whisper'],
    note: 'wh → w 音',
  },
  {
    id: 2107,
    display: 'wheat',
    hint: 'ウィート',
    accepted: ['wheat', 'weet'],
    note: 'wh → w 音',
  },
  {
    id: 2108,
    display: 'aisle',
    hint: 'アイル',
    accepted: ['aisle', 'ile'],
    note: 's は黙字',
  },
  {
    id: 2109,
    display: 'mortgage',
    hint: 'モーゲッジ',
    accepted: ['mortgage', 'morgage'],
    note: 't は黙字',
  },
  {
    id: 2110,
    display: 'parliament',
    hint: 'パーラメント',
    accepted: ['parliament', 'parlement'],
    note: 'ia → a 音',
  },
  {
    id: 2111,
    display: 'used to live there',
    hint: 'ユーズド・トゥ・リブ・ゼア',
    accepted: ['used to live there'],
    note: 'used の d を発音',
  },
  {
    id: 2112,
    display: 'ought to practice',
    hint: 'オート・トゥ・プラクティス',
    accepted: ['ought to practice'],
    note: 'ought の発音',
  },
  {
    id: 2113,
    display: 'have been studying',
    hint: 'ハブ・ビーン・スタディイング',
    accepted: ['have been studying'],
    note: '現在完了進行形',
  },
  {
    id: 2114,
    display: 'might be able to',
    hint: 'マイト・ビー・エイブル・トゥ',
    accepted: ['might be able to'],
    note: '助動詞の連続',
  },
  {
    id: 2115,
    display: 'foreign language',
    hint: 'フォーリン・ランゲッジ',
    accepted: ['foreign language'],
    note: 'g は黙字',
  },
  {
    id: 2116,
    display: 'physical exercise',
    hint: 'フィジカル・エクササイズ',
    accepted: ['physical exercise'],
    note: 'ph → f 音',
  },
  {
    id: 2117,
    display: 'ancient ruins',
    hint: 'エインシェント・ルーインズ',
    accepted: ['ancient ruins'],
    note: 'c → sh 音',
  },
  {
    id: 2118,
    display: 'honest opinion',
    hint: 'オネスト・オピニオン',
    accepted: ['honest opinion'],
    note: 'h は黙字',
  },
  {
    id: 2119,
    display: 'natural environment',
    hint: 'ナチュラル・エンバイロンメント',
    accepted: ['natural environment'],
    note: 'tu → チュ 音',
  },
  {
    id: 2120,
    display: 'economic growth',
    hint: 'エコノミック・グロウス',
    accepted: ['economic growth'],
    note: 'th → θ 音',
  },
];

// ============================================================
// 設定値（ここだけ変えれば問題数・配点を調整できる）
// ============================================================
const QUESTIONS_PER_PART = 25; // 各パートの出題数
const POINTS_PER_QUESTION = 2; // 1問あたりの点数
const MAX_SCORE = QUESTIONS_PER_PART * 2 * POINTS_PER_QUESTION; // 100点

// ============================================================
// ユーティリティ
// ============================================================
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z\s]/g, '')
    .trim()
    .replace(/\s+/g, ' ');
}

function checkSpeech(recognized, item) {
  const norm = normalizeText(recognized);
  if (item.reject) {
    for (const r of item.reject) {
      if (norm.includes(normalizeText(r))) return false;
    }
  }
  for (const a of item.accepted) {
    if (norm.includes(normalizeText(a))) return true;
  }
  const key = normalizeText(item.display).split(' ')[0];
  return norm.includes(key);
}

function buildChoices(item) {
  return shuffle([item.correct, ...item.wrongs]);
}

function getRank(score) {
  const pct = (score / MAX_SCORE) * 100;
  if (pct >= 90)
    return {
      rank: 'S',
      color: '#FFD700',
      emoji: '🏆',
      msg: '完璧！合格間違いなし！このまま突き進もう！',
    };
  if (pct >= 75)
    return {
      rank: 'A',
      color: '#4CAF50',
      emoji: '💪',
      msg: 'すごい！合格圏内！あと少しで満点だ！',
    };
  if (pct >= 60)
    return {
      rank: 'B',
      color: '#2196F3',
      emoji: '📚',
      msg: 'いい調子！苦手な単語を復習すれば合格が見えてくる！',
    };
  if (pct >= 40)
    return {
      rank: 'C',
      color: '#FF9800',
      emoji: '🔥',
      msg: 'まだまだこれから。間違えた単語をしっかり覚えよう！',
    };
  return {
    rank: 'D',
    color: '#F44336',
    emoji: '👍',
    msg: '基礎から一緒に頑張ろう！毎日少しずつで大丈夫！',
  };
}

// ============================================================
// プログレスバー
// ============================================================
function ProgressBar({ current, total, part }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div style={s.progressWrap}>
      <div style={s.progressMeta}>
        <span style={s.partTag}>Part {part}</span>
        <span style={s.progressCount}>
          {current} / {total}
        </span>
      </div>
      <div style={s.progressTrack}>
        <div
          style={{
            ...s.progressFill,
            width: `${pct}%`,
            background: part === 1 ? '#4CAF50' : '#2196F3',
          }}
        />
      </div>
    </div>
  );
}

// ============================================================
// スタート画面
// ============================================================
function StartScreen({ onStart }) {
  return (
    <div style={s.center}>
      <div style={s.card}>
        <div style={s.badge}>英検 準2級</div>
        <h1 style={s.title}>
          英単語
          <br />
          チャレンジ
        </h1>
        <p style={s.sub}>
          毎回ランダムな{QUESTIONS_PER_PART * 2}問・{MAX_SCORE}点満点！
          <br />
          <span style={{ fontSize: 11, opacity: 0.7 }}>
            問題プール：語彙280語 ＋ 発音120語
          </span>
        </p>
        <div style={s.infoRow}>
          <div style={s.infoBox}>
            <span style={s.infoN}>{QUESTIONS_PER_PART}問</span>
            <span style={s.infoL}>
              Part 1<br />
              4択クイズ
            </span>
          </div>
          <div style={s.infoPlus}>＋</div>
          <div style={s.infoBox}>
            <span style={s.infoN}>{QUESTIONS_PER_PART}問</span>
            <span style={s.infoL}>
              Part 2<br />
              発声クイズ
            </span>
          </div>
        </div>
        <div style={s.pointNote}>
          1問 {POINTS_PER_QUESTION}点 × {QUESTIONS_PER_PART * 2}問 ＝{' '}
          {MAX_SCORE}点満点
        </div>
        <button style={s.btnPrimary} onClick={onStart}>
          スタート！
        </button>
      </div>
    </div>
  );
}

// ============================================================
// Part1 問題
// ============================================================
function QuizQuestion({ item, qNo, total, onNext }) {
  const [choices] = useState(() => buildChoices(item));
  const [selected, setSelected] = useState(null);

  function select(c) {
    if (selected) return;
    setSelected(c);
  }

  function getBtnStyle(c) {
    if (!selected) return s.choiceBtn;
    if (c === item.correct) return { ...s.choiceBtn, ...s.correctBtn };
    if (c === selected) return { ...s.choiceBtn, ...s.wrongBtn };
    return { ...s.choiceBtn, opacity: 0.3 };
  }

  return (
    <div style={s.qWrap}>
      <ProgressBar current={qNo} total={total} part={1} />
      <div style={s.wordCard}>
        <div style={s.pos}>{item.pos}</div>
        <div style={s.word}>{item.word}</div>
        <div style={s.instruct}>日本語の意味を選んでね</div>
      </div>
      <div style={s.grid2}>
        {choices.map((c, i) => (
          <button key={i} style={getBtnStyle(c)} onClick={() => select(c)}>
            {c}
          </button>
        ))}
      </div>
      {selected && (
        <div style={s.fbArea}>
          <div style={selected === item.correct ? s.fbOk : s.fbNg}>
            {selected === item.correct
              ? `✅ 正解！ +${POINTS_PER_QUESTION}点`
              : `❌ 不正解… 正解は「${item.correct}」`}
          </div>
          <button
            style={s.btnPrimary}
            onClick={() => onNext(selected === item.correct)}
          >
            次へ →
          </button>
        </div>
      )}
    </div>
  );
}

// ============================================================
// Part2 発声問題
// ============================================================
function SpeechQuestion({ item, qNo, total, onNext }) {
  const [status, setStatus] = useState('idle');
  const [recognized, setRecognized] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [retried, setRetried] = useState(false);
  const [supported] = useState(
    () => !!(window.SpeechRecognition || window.webkitSpeechRecognition)
  );
  const [textInput, setTextInput] = useState('');
  const recRef = useRef(null);

  function startRec() {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    const rec = new SR();
    rec.lang = 'en-US';
    rec.interimResults = true;
    recRef.current = rec;
    setStatus('recording');
    setRecognized('');
    let resultGot = false;
    rec.onresult = (e) => {
      const result = e.results[e.results.length - 1];
      if (!result.isFinal) return;
      resultGot = true;
      const text = result[0].transcript;
      setRecognized(text);
      setIsCorrect(checkSpeech(text, item));
      setStatus('done');
    };
    rec.onerror = () => {
      resultGot = true;
      setRecognized('認識できませんでした');
      setIsCorrect(false);
      setStatus('done');
    };
    rec.onend = () => {
      if (!resultGot) {
        setRecognized('認識できませんでした');
        setIsCorrect(false);
        setStatus('done');
      }
    };
    rec.continuous = false;
    rec.maxAlternatives = 1;
    rec.start();
    setTimeout(() => { try { rec.stop(); } catch(e) {} }, 5000);
  }

  function stopRec() {
    recRef.current?.stop();
  }
  function retry() {
    setStatus('idle');
    setRecognized('');
    setIsCorrect(null);
    setRetried(true);
  }
  function submitText() {
    setRecognized(textInput);
    setIsCorrect(checkSpeech(textInput, item));
    setStatus('done');
  }

  return (
    <div style={s.qWrap}>
      <ProgressBar current={qNo} total={total} part={2} />
      <div style={s.wordCard}>
        <div style={s.pos}>声に出して読もう！</div>
        <div style={s.word}>{item.display}</div>
        {item.note && <div style={s.note}>💡 {item.note}</div>}
        <button style={s.hintBtn} onClick={() => setShowHint(!showHint)}>
          {showHint ? 'ヒントを隠す' : 'カタカナヒントを見る'}
        </button>
        {showHint && <div style={s.hint}>{item.hint}</div>}
      </div>

      {!supported ? (
        <div style={s.fallback}>
          <p style={s.fallbackNote}>
            ⚠️ 音声認識非対応。テキストで入力してください。
          </p>
          <input
            style={s.textInput}
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder="英語で入力..."
            onKeyDown={(e) => e.key === 'Enter' && submitText()}
          />
          <button style={s.btnPrimary} onClick={submitText}>
            判定する
          </button>
        </div>
      ) : (
        <div style={s.micArea}>
          {status === 'idle' && (
            <button style={s.micBtn} onClick={startRec}>
              🎤 回答する
            </button>
          )}
          {status === 'recording' && (
            <>
              <button
                style={{
                  ...s.micBtn,
                  background: 'linear-gradient(135deg,#F44336,#FF7043)',
                  boxShadow: '0 8px 24px rgba(244,67,54,.4)',
                }}
                onClick={stopRec}
              >
                ⏹️ 止める
              </button>
              <div style={{ color: '#21CBF3', fontWeight: 700, fontSize: 14 }}>
                録音中...
              </div>
            </>
          )}
        </div>
      )}

      {status === 'done' && (
        <div style={s.fbArea}>
          <div style={s.recText}>認識結果：「{recognized}」</div>
          <div style={isCorrect ? s.fbOk : s.fbNg}>
            {isCorrect
              ? `✅ 正しく読めました！ +${POINTS_PER_QUESTION}点`
              : `❌ もう少し！正しくは「${item.hint}」`}
          </div>
          <div style={s.actionRow}>
            {!isCorrect && !retried && (
              <button style={s.btnSecondary} onClick={retry}>
                もう一度
              </button>
            )}
            <button style={s.btnPrimary} onClick={() => onNext(isCorrect)}>
              次へ →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================
// 中間画面
// ============================================================
function MidScreen({ correctCount, onContinue }) {
  const pts = correctCount * POINTS_PER_QUESTION;
  return (
    <div style={s.center}>
      <div style={s.card}>
        <div
          style={{
            ...s.badge,
            background: 'linear-gradient(90deg,#4CAF50,#8BC34A)',
          }}
        >
          Part 1 完了！
        </div>
        <div
          style={{
            color: '#ffd200',
            fontSize: 64,
            fontWeight: 900,
            lineHeight: 1,
          }}
        >
          {pts}
          <span style={{ fontSize: 28, color: 'rgba(255,255,255,.45)' }}>
            {' '}
            点
          </span>
        </div>
        <div
          style={{
            color: 'rgba(255,255,255,.5)',
            fontSize: 14,
            marginBottom: 8,
          }}
        >
          {correctCount} / {QUESTIONS_PER_PART} 問正解
        </div>
        <p style={s.sub}>
          {correctCount >= QUESTIONS_PER_PART * 0.8
            ? '素晴らしい！'
            : correctCount >= QUESTIONS_PER_PART * 0.5
            ? 'よくできました！'
            : 'ここから挽回しよう！'}
          <br />
          次は発音チャレンジだ！
        </p>
        <button style={s.btnPrimary} onClick={onContinue}>
          Part 2 へ進む 🎤
        </button>
      </div>
    </div>
  );
}

// ============================================================
// 採点結果画面
// ============================================================
function ResultScreen({ answers, onRetryAll, onRetryWrong }) {
  const p1Correct = answers.filter((a) => a.part === 1 && a.correct).length;
  const p2Correct = answers.filter((a) => a.part === 2 && a.correct).length;
  const p1Score = p1Correct * POINTS_PER_QUESTION;
  const p2Score = p2Correct * POINTS_PER_QUESTION;
  const totalScore = p1Score + p2Score;
  const { rank, color, emoji, msg } = getRank(totalScore);
  const wrongs = answers.filter((a) => !a.correct);
  const [showWrong, setShowWrong] = useState(false);

  return (
    <div style={{ ...s.center, alignItems: 'flex-start', paddingTop: 8 }}>
      <div style={s.card}>
        <h2
          style={{
            color: 'rgba(255,255,255,.7)',
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: '0.1em',
            margin: '0 0 16px',
          }}
        >
          採点結果
        </h2>

        {/* ランクバッジ */}
        <div
          style={{
            display: 'inline-block',
            width: 72,
            height: 72,
            lineHeight: '72px',
            borderRadius: '50%',
            background: color,
            fontSize: 32,
            fontWeight: 900,
            color: '#fff',
            marginBottom: 12,
            boxShadow: '0 8px 24px rgba(0,0,0,.3)',
          }}
        >
          {rank}
        </div>

        {/* 合計スコア */}
        <div>
          <span
            style={{
              color: '#ffd200',
              fontSize: 64,
              fontWeight: 900,
              lineHeight: 1,
            }}
          >
            {totalScore}
          </span>
          <span style={{ color: 'rgba(255,255,255,.45)', fontSize: 22 }}>
            {' '}
            / {MAX_SCORE}点
          </span>
        </div>
        <div
          style={{
            color: 'rgba(255,255,255,.5)',
            fontSize: 14,
            marginBottom: 12,
          }}
        >
          正答率 {Math.round((totalScore / MAX_SCORE) * 100)}%
        </div>

        {/* 評価メッセージ */}
        <div
          style={{
            color: '#fff',
            fontSize: 15,
            fontWeight: 600,
            background: 'rgba(255,255,255,.07)',
            borderRadius: 14,
            padding: '12px 16px',
            marginBottom: 20,
            lineHeight: 1.5,
          }}
        >
          {emoji} {msg}
        </div>

        {/* Part別スコア */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
          {[
            { label: 'Part 1（4択）', correct: p1Correct, score: p1Score },
            { label: 'Part 2（発声）', correct: p2Correct, score: p2Score },
          ].map((p, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                background: 'rgba(255,255,255,.06)',
                borderRadius: 14,
                padding: 14,
              }}
            >
              <div
                style={{
                  color: 'rgba(255,255,255,.5)',
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  marginBottom: 4,
                }}
              >
                {p.label}
              </div>
              <div style={{ color: '#fff', fontSize: 24, fontWeight: 800 }}>
                {p.score}
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,.45)' }}>
                  点
                </span>
              </div>
              <div
                style={{
                  color: 'rgba(255,255,255,.4)',
                  fontSize: 12,
                  marginTop: 2,
                }}
              >
                {p.correct} / {QUESTIONS_PER_PART} 問
              </div>
            </div>
          ))}
        </div>

        {/* アクション */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            marginBottom: 16,
          }}
        >
          <button style={s.btnPrimary} onClick={onRetryAll}>
            🔄 もう一度チャレンジ
          </button>
          {wrongs.length > 0 && (
            <button style={s.btnSecondary} onClick={onRetryWrong}>
              ❌ 間違えた問題だけ（{wrongs.length}問）
            </button>
          )}
        </div>

        {/* 間違えた問題一覧トグル */}
        <button
          style={{
            background: 'transparent',
            border: 'none',
            color: 'rgba(255,255,255,.4)',
            fontSize: 13,
            cursor: 'pointer',
            padding: 4,
            fontFamily: 'inherit',
          }}
          onClick={() => setShowWrong(!showWrong)}
        >
          {showWrong
            ? '▲ 間違えた問題を隠す'
            : `▼ 間違えた問題を見る（${wrongs.length}問）`}
        </button>

        {showWrong && (
          <div
            style={{
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              maxHeight: 300,
              overflowY: 'auto',
              marginTop: 8,
            }}
          >
            {wrongs.map((a, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(244,67,54,.1)',
                  border: '1px solid rgba(244,67,54,.2)',
                  borderRadius: 10,
                  padding: '10px 14px',
                }}
              >
                <div
                  style={{
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: 15,
                    marginBottom: 4,
                  }}
                >
                  {a.display}
                </div>
                <div style={{ color: 'rgba(255,255,255,.55)', fontSize: 13 }}>
                  正解:{' '}
                  <span style={{ color: '#81C784', fontWeight: 600 }}>
                    {a.correctAnswer}
                  </span>
                  {a.yourAnswer && (
                    <>
                      {' '}
                      ／ あなた:{' '}
                      <span style={{ color: '#EF9A9A', fontWeight: 600 }}>
                        {a.yourAnswer}
                      </span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================
// メインアプリ
// ============================================================
export default function App() {
  const [screen, setScreen] = useState('start');
  const [q1, setQ1] = useState([]);
  const [q2, setQ2] = useState([]);
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState([]);

  function initGame(retryWrong = false, wrongAnswers = []) {
    if (retryWrong && wrongAnswers.length > 0) {
      const w1ids = wrongAnswers
        .filter((a) => a.part === 1)
        .map((a) => a.itemId);
      const w2ids = wrongAnswers
        .filter((a) => a.part === 2)
        .map((a) => a.itemId);
      setQ1(shuffle(QUIZ_POOL.filter((q) => w1ids.includes(q.id))));
      setQ2(shuffle(SPEECH_POOL.filter((q) => w2ids.includes(q.id))));
    } else {
      setQ1(shuffle(QUIZ_POOL).slice(0, QUESTIONS_PER_PART));
      setQ2(shuffle(SPEECH_POOL).slice(0, QUESTIONS_PER_PART));
    }
    setIdx(0);
    setAnswers([]);
    setScreen('part1');
  }

  function handleQ1(isCorrect) {
    const item = q1[idx];
    const newAns = [
      ...answers,
      {
        part: 1,
        itemId: item.id,
        display: item.word,
        correct: isCorrect,
        correctAnswer: item.correct,
        yourAnswer: null,
      },
    ];
    setAnswers(newAns);
    if (idx + 1 >= q1.length) {
      setScreen('mid');
      setIdx(0);
    } else setIdx(idx + 1);
  }

  function handleQ2(isCorrect, recognized) {
    const item = q2[idx];
    const newAns = [
      ...answers,
      {
        part: 2,
        itemId: item.id,
        display: item.display,
        correct: isCorrect,
        correctAnswer: item.hint,
        yourAnswer: recognized,
      },
    ];
    setAnswers(newAns);
    if (idx + 1 >= q2.length) setScreen('result');
    else setIdx(idx + 1);
  }

  const p1Correct = answers.filter((a) => a.part === 1 && a.correct).length;

  return (
    <div style={s.root}>
      {screen === 'start' && <StartScreen onStart={() => initGame()} />}
      {screen === 'part1' && q1.length > 0 && (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignSelf: 'flex-start', paddingTop: 8 }}>
          <QuizQuestion
            key={`q1-${idx}`}
            item={q1[idx]}
            qNo={idx + 1}
            total={q1.length}
            onNext={handleQ1}
          />
        </div>
      )}
      {screen === 'mid' && (
        <MidScreen
          correctCount={p1Correct}
          onContinue={() => {
            setIdx(0);
            setScreen('part2');
          }}
        />
      )}
      {screen === 'part2' && q2.length > 0 && (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignSelf: 'flex-start', paddingTop: 8 }}>
          <SpeechQuestion
            key={`q2-${idx}`}
            item={q2[idx]}
            qNo={idx + 1}
            total={q2.length}
            onNext={handleQ2}
          />
        </div>
      )}
      {screen === 'result' && (
        <ResultScreen
          answers={answers}
          onRetryAll={() => initGame()}
          onRetryWrong={() =>
            initGame(
              true,
              answers.filter((a) => !a.correct)
            )
          }
        />
      )}
    </div>
  );
}

// ============================================================
// スタイル
// ============================================================
const s = {
  root: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',
    fontFamily: "'Noto Sans JP','Hiragino Sans',sans-serif",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  center: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    background: 'rgba(255,255,255,.07)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,.15)',
    borderRadius: 24,
    padding: '40px 32px',
    maxWidth: 420,
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 20px 60px rgba(0,0,0,.4)',
  },
  badge: {
    display: 'inline-block',
    background: 'linear-gradient(90deg,#f7971e,#ffd200)',
    borderRadius: 20,
    padding: '4px 16px',
    color: '#1a1a2e',
    fontWeight: 700,
    fontSize: 13,
    marginBottom: 16,
    letterSpacing: '0.05em',
  },
  title: {
    color: '#fff',
    fontSize: 'clamp(28px,8vw,44px)',
    fontWeight: 800,
    margin: '0 0 12px',
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
  },
  sub: {
    color: 'rgba(255,255,255,.65)',
    fontSize: 13,
    marginBottom: 16,
    lineHeight: 1.7,
  },
  infoRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 12,
  },
  infoBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
  },
  infoN: { color: '#ffd200', fontSize: 28, fontWeight: 800 },
  infoL: { color: 'rgba(255,255,255,.6)', fontSize: 12, lineHeight: 1.4 },
  infoPlus: { color: 'rgba(255,255,255,.3)', fontSize: 24, fontWeight: 300 },
  pointNote: {
    color: 'rgba(255,255,255,.45)',
    fontSize: 12,
    marginBottom: 24,
    letterSpacing: '0.03em',
  },
  btnPrimary: {
    background: 'linear-gradient(90deg,#f7971e,#ffd200)',
    border: 'none',
    borderRadius: 50,
    padding: '16px 48px',
    fontSize: 18,
    fontWeight: 700,
    color: '#1a1a2e',
    cursor: 'pointer',
    boxShadow: '0 8px 24px rgba(247,151,30,.4)',
    fontFamily: 'inherit',
  },
  btnSecondary: {
    background: 'rgba(255,255,255,.08)',
    border: '1px solid rgba(255,255,255,.2)',
    borderRadius: 50,
    padding: '14px 28px',
    fontSize: 15,
    fontWeight: 600,
    color: '#fff',
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  progressWrap: { width: '100%' },
  progressMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  partTag: {
    color: 'rgba(255,255,255,.5)',
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },
  progressCount: {
    color: 'rgba(255,255,255,.7)',
    fontSize: 13,
    fontWeight: 600,
  },
  progressTrack: {
    height: 6,
    background: 'rgba(255,255,255,.1)',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
    transition: 'width .4s ease',
  },
  qWrap: {
    width: '100%',
    maxWidth: 500,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  wordCard: {
    background: 'rgba(255,255,255,.08)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255,255,255,.12)',
    borderRadius: 20,
    padding: '28px 24px',
    textAlign: 'center',
  },
  pos: {
    color: 'rgba(255,255,255,.45)',
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.1em',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  word: {
    color: '#fff',
    fontSize: 'clamp(26px,7vw,40px)',
    fontWeight: 800,
    letterSpacing: '-0.01em',
    marginBottom: 6,
  },
  instruct: { color: 'rgba(255,255,255,.5)', fontSize: 13 },
  note: { color: 'rgba(255,220,100,.85)', fontSize: 12, marginTop: 8 },
  hintBtn: {
    background: 'transparent',
    border: '1px solid rgba(255,255,255,.2)',
    borderRadius: 20,
    color: 'rgba(255,255,255,.6)',
    padding: '6px 16px',
    fontSize: 12,
    cursor: 'pointer',
    marginTop: 12,
    fontFamily: 'inherit',
  },
  hint: {
    color: '#ffd200',
    fontSize: 20,
    fontWeight: 700,
    marginTop: 8,
    letterSpacing: '0.05em',
  },
  grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 },
  choiceBtn: {
    background: 'rgba(255,255,255,.08)',
    border: '1px solid rgba(255,255,255,.15)',
    borderRadius: 14,
    color: '#fff',
    fontSize: 16,
    fontWeight: 600,
    padding: '18px 8px',
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  correctBtn: {
    background: 'rgba(76,175,80,.35)',
    border: '2px solid #4CAF50',
  },
  wrongBtn: { background: 'rgba(244,67,54,.35)', border: '2px solid #F44336' },
  fbArea: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    alignItems: 'center',
  },
  fbOk: {
    background: 'rgba(76,175,80,.2)',
    border: '1px solid rgba(76,175,80,.5)',
    borderRadius: 12,
    color: '#81C784',
    padding: '12px 20px',
    fontWeight: 700,
    fontSize: 15,
    width: '100%',
    textAlign: 'center',
  },
  fbNg: {
    background: 'rgba(244,67,54,.2)',
    border: '1px solid rgba(244,67,54,.5)',
    borderRadius: 12,
    color: '#EF9A9A',
    padding: '12px 20px',
    fontWeight: 700,
    fontSize: 15,
    width: '100%',
    textAlign: 'center',
  },
  micArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
  },
  micBtn: {
    background: 'linear-gradient(135deg,#2196F3,#21CBF3)',
    border: 'none',
    borderRadius: 50,
    padding: '18px 44px',
    fontSize: 18,
    fontWeight: 700,
    color: '#fff',
    cursor: 'pointer',
    boxShadow: '0 8px 24px rgba(33,150,243,.4)',
    fontFamily: 'inherit',
  },
  recText: {
    color: 'rgba(255,255,255,.6)',
    fontSize: 13,
    background: 'rgba(255,255,255,.05)',
    borderRadius: 10,
    padding: '8px 16px',
    width: '100%',
    textAlign: 'center',
  },
  actionRow: {
    display: 'flex',
    gap: 10,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  fallback: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  },
  fallbackNote: {
    color: 'rgba(255,220,100,.8)',
    fontSize: 13,
    textAlign: 'center',
  },
  textInput: {
    background: 'rgba(255,255,255,.1)',
    border: '1px solid rgba(255,255,255,.2)',
    borderRadius: 12,
    color: '#fff',
    fontSize: 16,
    padding: '12px 16px',
    width: '100%',
    outline: 'none',
    fontFamily: 'inherit',
  },
};
