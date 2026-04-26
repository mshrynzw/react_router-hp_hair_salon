const staffMembers = [
  {
    name: "山田 太郎",
    role: "トップスタイリスト",
    experience: "15年",
    specialties: ["カット", "カラー"],
    message:
      "お客様一人ひとりの個性を活かしたスタイルをご提案いたします。お気軽にご相談ください。",
  },
  {
    name: "佐藤 花子",
    role: "スタイリスト",
    experience: "10年",
    specialties: ["パーマ", "トリートメント"],
    message:
      "髪質やライフスタイルに合わせた、扱いやすいスタイルを心がけています。",
  },
  {
    name: "鈴木 一郎",
    role: "スタイリスト",
    experience: "8年",
    specialties: ["メンズカット", "ヘッドスパ"],
    message:
      "メンズスタイルを得意としています。ビジネスシーンに合わせたスタイルもお任せください。",
  },
  {
    name: "田中 美咲",
    role: "スタイリスト",
    experience: "7年",
    specialties: ["カラー", "ヘアアレンジ"],
    message:
      "トレンドを取り入れながらも、似合わせを大切にしたスタイル提案をいたします。",
  },
  {
    name: "伊藤 健太",
    role: "スタイリスト",
    experience: "6年",
    specialties: ["カット", "パーマ"],
    message: "自然な動きのあるスタイルが得意です。日常のスタイリングもサポートします。",
  },
  {
    name: "高橋 愛",
    role: "アシスタント",
    experience: "3年",
    specialties: ["シャンプー", "ブロー"],
    message:
      "丁寧な施術を心がけています。リラックスできる時間を提供できるよう努めます。",
  },
];

export function Staff() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">スタッフ紹介</h1>
        <p className="text-gray-600">
          経験豊富なスタイリストがあなたの魅力を引き出します
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {staffMembers.map((staff) => (
          <div
            key={staff.name}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">👤</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-1">{staff.name}</h2>
                <p className="text-gray-600">{staff.role}</p>
                <p className="text-sm text-gray-500">経験年数: {staff.experience}</p>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold mb-2">得意メニュー</h3>
              <div className="flex flex-wrap gap-2">
                {staff.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="px-3 py-1 bg-gray-100 text-sm rounded-full"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">メッセージ</h3>
              <p className="text-gray-700 text-sm">{staff.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
