import { Link } from "react-router";

const newsItems = [
  {
    id: "1",
    date: "2026-04-20",
    title: "ゴールデンウィーク期間の営業時間のお知らせ",
    excerpt:
      "ゴールデンウィーク期間中の営業時間についてお知らせいたします。",
    category: "お知らせ",
  },
  {
    id: "2",
    date: "2026-04-15",
    title: "新メニュー「プレミアムトリートメント」登場",
    excerpt:
      "髪質改善に特化した新しいトリートメントメニューをご用意しました。",
    category: "メニュー",
  },
  {
    id: "3",
    date: "2026-04-10",
    title: "春の新作スタイル特集",
    excerpt: "2026年春夏トレンドを取り入れた最新スタイルをご紹介します。",
    category: "スタイル",
  },
  {
    id: "4",
    date: "2026-04-01",
    title: "新スタッフ加入のお知らせ",
    excerpt: "経験豊富なスタイリストが新たにチームに加わりました。",
    category: "スタッフ",
  },
  {
    id: "5",
    date: "2026-03-25",
    title: "春のキャンペーン実施中",
    excerpt: "カット＋カラーのセットメニューがお得な価格でご利用いただけます。",
    category: "キャンペーン",
  },
];

export function News() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">ニュース</h1>
        <p className="text-gray-600">最新情報をお届けします</p>
      </div>

      <div className="space-y-6">
        {newsItems.map((item) => (
          <Link
            key={item.id}
            to={`/news/${item.id}`}
            className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4 mb-3">
              <time className="text-sm text-gray-500">{item.date}</time>
              <span className="px-3 py-1 bg-gray-900 text-white text-xs rounded-full">
                {item.category}
              </span>
            </div>
            <h2 className="text-xl font-bold mb-2 hover:text-gray-600">
              {item.title}
            </h2>
            <p className="text-gray-600">{item.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
