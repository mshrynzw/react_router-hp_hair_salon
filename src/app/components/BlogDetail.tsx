import { useParams, Link } from "react-router";

export function BlogDetail() {
  const { id } = useParams();

  const blogData: Record<
    string,
    {
      date: string;
      title: string;
      author: string;
      category: string;
      content: string;
    }
  > = {
    "1": {
      date: "2026-04-22",
      title: "春のヘアケア特集 - 紫外線対策",
      author: "佐藤 花子",
      category: "ヘアケア",
      content: `
        春から夏にかけて、紫外線が強くなる季節がやってきます。
        肌の紫外線対策は意識していても、髪の紫外線対策は忘れがちではないでしょうか?

        【紫外線が髪に与える影響】
        紫外線は髪のキューティクルを傷つけ、以下のようなダメージを引き起こします:
        • パサつき、乾燥
        • 色落ち、退色
        • 枝毛、切れ毛の増加
        • ツヤの低下

        【効果的な紫外線対策】
        1. UVカットスプレーの使用
           外出前に髪全体にスプレーすることで、紫外線から髪を守ります。

        2. 帽子や日傘の活用
           物理的に紫外線をブロックする最も確実な方法です。

        3. 洗い流さないトリートメント
           日常的なケアで髪のバリア機能を高めます。

        4. 定期的なサロントリートメント
           月に1回程度のサロントリートメントで、ダメージを補修します。

        当サロンでは、紫外線ダメージに特化したトリートメントメニューもご用意しております。
        お気軽にご相談ください。
      `,
    },
    "2": {
      date: "2026-04-18",
      title: "2026年春夏トレンドヘアスタイル",
      author: "田中 美咲",
      category: "トレンド",
      content: `
        2026年春夏のトレンドヘアスタイルをご紹介します!

        【トレンドカラー】
        • ウォームベージュ系
        • アッシュグレージュ
        • ナチュラルブラウン
        柔らかく優しい印象のカラーが人気です。

        【注目のスタイル】
        1. レイヤーミディアム
           軽やかな動きが特徴。スタイリングも簡単で人気急上昇中。

        2. 外ハネボブ
           カジュアルで可愛らしい印象。どんなファッションにも合わせやすい。

        3. ウルフカット
           トレンド継続中。より洗練されたスタイルに進化しています。

        4. メンズマッシュ
           柔らかい質感が魅力。ビジネスシーンにも対応可能。

        あなたに似合うスタイルを見つけるお手伝いをいたします。
        ぜひご相談ください!
      `,
    },
  };

  const blog = blogData[id || "1"];

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-center text-gray-600">
          お探しのブログ記事が見つかりませんでした。
        </p>
        <div className="text-center mt-6">
          <Link to="/blog" className="text-gray-900 hover:underline">
            ブログ一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <article>
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <time className="text-sm text-gray-500">{blog.date}</time>
            <span className="px-3 py-1 bg-gray-100 text-xs rounded-full">
              {blog.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>
          <p className="text-gray-600">by {blog.author}</p>
        </div>

        <div className="prose max-w-none">
          <div className="whitespace-pre-line text-gray-700 leading-relaxed">
            {blog.content}
          </div>
        </div>
      </article>

      <div className="mt-12 pt-8 border-t">
        <Link to="/blog" className="inline-block text-gray-900 hover:underline">
          ← ブログ一覧に戻る
        </Link>
      </div>
    </div>
  );
}
