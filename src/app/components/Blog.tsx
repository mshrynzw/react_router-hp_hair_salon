import { Link } from "react-router";

const blogPosts = [
  {
    id: "1",
    date: "2026-04-22",
    title: "春のヘアケア特集 - 紫外線対策",
    excerpt:
      "春から夏にかけて強くなる紫外線。髪へのダメージを防ぐケア方法をご紹介します。",
    author: "佐藤 花子",
    category: "ヘアケア",
  },
  {
    id: "2",
    date: "2026-04-18",
    title: "2026年春夏トレンドヘアスタイル",
    excerpt:
      "今年のトレンドカラーやスタイルをまとめてご紹介。あなたに似合うスタイルが見つかるはず。",
    author: "田中 美咲",
    category: "トレンド",
  },
  {
    id: "3",
    date: "2026-04-12",
    title: "メンズスタイリング基本のキ",
    excerpt:
      "朝のスタイリングが苦手な方必見。簡単にできるメンズヘアセット術を解説します。",
    author: "鈴木 一郎",
    category: "スタイリング",
  },
  {
    id: "4",
    date: "2026-04-05",
    title: "カラー長持ちさせるコツ",
    excerpt:
      "せっかく染めたヘアカラー、できるだけ長持ちさせたいですよね。プロが教える秘訣とは。",
    author: "山田 太郎",
    category: "ヘアケア",
  },
];

export function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">ブログ</h1>
        <p className="text-gray-600">
          ヘアケアやスタイリングに関する情報をお届けします
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className="block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-3">
                <time className="text-sm text-gray-500">{post.date}</time>
                <span className="px-3 py-1 bg-gray-100 text-xs rounded-full">
                  {post.category}
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-3 hover:text-gray-600">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <p className="text-sm text-gray-500">by {post.author}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
