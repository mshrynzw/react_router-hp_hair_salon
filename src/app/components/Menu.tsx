export function Menu() {
  const menuCategories = [
    {
      category: "カット",
      items: [
        { name: "カット", price: "¥5,000", duration: "60分" },
        { name: "カット＋シャンプー", price: "¥6,000", duration: "70分" },
        { name: "前髪カット", price: "¥1,000", duration: "15分" },
      ],
    },
    {
      category: "カラー",
      items: [
        { name: "フルカラー", price: "¥8,000", duration: "90分" },
        { name: "リタッチカラー", price: "¥6,000", duration: "60分" },
        { name: "ハイライト", price: "¥10,000", duration: "120分" },
        { name: "グラデーションカラー", price: "¥12,000", duration: "150分" },
      ],
    },
    {
      category: "パーマ",
      items: [
        { name: "デジタルパーマ", price: "¥12,000", duration: "150分" },
        { name: "コールドパーマ", price: "¥8,000", duration: "90分" },
        { name: "ポイントパーマ", price: "¥5,000", duration: "60分" },
      ],
    },
    {
      category: "トリートメント",
      items: [
        { name: "集中トリートメント", price: "¥3,000", duration: "30分" },
        { name: "ヘッドスパ", price: "¥4,000", duration: "45分" },
        { name: "プレミアムトリートメント", price: "¥6,000", duration: "60分" },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">メニュー</h1>
        <p className="text-gray-600">
          お客様のご要望に合わせた豊富なメニューをご用意しています
        </p>
      </div>

      <div className="space-y-12">
        {menuCategories.map((category) => (
          <div key={category.category}>
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-900">
              {category.category}
            </h2>
            <div className="space-y-4">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.duration}</p>
                  </div>
                  <div className="text-xl font-bold">{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gray-100 rounded-lg">
        <h3 className="font-bold mb-2">ご予約・お問い合わせ</h3>
        <p className="text-gray-700 mb-4">
          お電話またはWebフォームからご予約を承っております。
        </p>
        <p className="font-semibold">TEL: 03-1234-5678</p>
        <p className="text-sm text-gray-600 mt-2">
          ※料金は税込価格です。メニューの組み合わせにより割引がございます。
        </p>
      </div>
    </div>
  );
}
