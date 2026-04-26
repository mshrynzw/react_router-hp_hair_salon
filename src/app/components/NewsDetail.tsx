import { useParams, Link } from "react-router";

export function NewsDetail() {
  const { id } = useParams();

  const newsData: Record<
    string,
    { date: string; title: string; category: string; content: string }
  > = {
    "1": {
      date: "2026-04-20",
      title: "ゴールデンウィーク期間の営業時間のお知らせ",
      category: "お知らせ",
      content: `
        平素より当サロンをご利用いただき、誠にありがとうございます。

        ゴールデンウィーク期間中の営業時間につきまして、以下の通りお知らせいたします。

        【営業時間】
        4月29日(火) 9:00 - 19:00
        4月30日(水) 9:00 - 19:00
        5月1日(木) 9:00 - 19:00
        5月2日(金) 9:00 - 19:00
        5月3日(土) 9:00 - 19:00
        5月4日(日) 9:00 - 19:00
        5月5日(月) 9:00 - 19:00
        5月6日(火) 定休日

        期間中は混雑が予想されますので、事前のご予約をおすすめいたします。
        皆様のご来店を心よりお待ちしております。
      `,
    },
    "2": {
      date: "2026-04-15",
      title: "新メニュー「プレミアムトリートメント」登場",
      category: "メニュー",
      content: `
        髪質改善に特化した新しいトリートメントメニュー「プレミアムトリートメント」の提供を開始いたしました。

        【特徴】
        ・最新の髪質改善技術を採用
        ・ダメージヘアを内側から補修
        ・持続性の高い効果
        ・サラサラ・ツヤツヤの仕上がり

        【料金】
        プレミアムトリートメント 60分 ¥6,000

        カットやカラーと組み合わせることで、さらに効果的なケアが可能です。
        詳しくはスタッフまでお気軽にお問い合わせください。
      `,
    },
  };

  const news = newsData[id || "1"];

  if (!news) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-center text-gray-600">
          お探しのニュースが見つかりませんでした。
        </p>
        <div className="text-center mt-6">
          <Link to="/news" className="text-gray-900 hover:underline">
            ニュース一覧に戻る
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
            <time className="text-sm text-gray-500">{news.date}</time>
            <span className="px-3 py-1 bg-gray-900 text-white text-xs rounded-full">
              {news.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">{news.title}</h1>
        </div>

        <div className="prose max-w-none">
          <div className="whitespace-pre-line text-gray-700 leading-relaxed">
            {news.content}
          </div>
        </div>
      </article>

      <div className="mt-12 pt-8 border-t">
        <Link
          to="/news"
          className="inline-block text-gray-900 hover:underline"
        >
          ← ニュース一覧に戻る
        </Link>
      </div>
    </div>
  );
}
