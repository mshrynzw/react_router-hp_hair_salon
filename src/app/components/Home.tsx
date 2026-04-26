import { useState } from "react";
import { X } from "lucide-react";

interface GalleryImage {
  url: string;
  title: string;
  description: string;
  stylist: string;
}

const galleryImages: GalleryImage[] = [
  {
    url: "https://images.unsplash.com/photo-1776850476481-2bccba2e35c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjBoYWlyY3V0JTIwc3R5bGluZ3xlbnwxfHx8fDE3NzcxNzQ4NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "モダンなカットスタイル",
    description: "最新のトレンドを取り入れた洗練されたカットスタイル。お客様の骨格に合わせた繊細な技術で仕上げます。",
    stylist: "山田 太郎",
  },
  {
    url: "https://images.unsplash.com/photo-1696835196034-cf22e2b72736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxoYWlyJTIwc2Fsb24lMjBoYWlyY3V0JTIwc3R5bGluZ3xlbnwxfHx8fDE3NzcxNzQ4NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "エレガントなスタイリング",
    description: "上品で洗練されたヘアスタイル。特別な日にぴったりの華やかな仕上がりです。",
    stylist: "佐藤 花子",
  },
  {
    url: "https://images.unsplash.com/photo-1654097801176-cb1795fd0c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxoYWlyJTIwc2Fsb24lMjBoYWlyY3V0JTIwc3R5bGluZ3xlbnwxfHx8fDE3NzcxNzQ4NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "メンズカット",
    description: "ビジネスシーンにも対応できる清潔感のあるメンズスタイル。丁寧なカウンセリングで理想のスタイルを実現します。",
    stylist: "鈴木 一郎",
  },
  {
    url: "https://images.unsplash.com/photo-1762745103094-6760fab8eb50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxoYWlyJTIwc2Fsb24lMjBoYWlyY3V0JTIwc3R5bGluZ3xlbnwxfHx8fDE3NzcxNzQ4NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "ナチュラルスタイル",
    description: "自然な美しさを引き出すスタイリング。日常使いしやすい、飽きのこないデザインです。",
    stylist: "田中 美咲",
  },
  {
    url: "https://images.unsplash.com/photo-1599387737838-660b75526801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxoYWlyJTIwc2Fsb24lMjBoYWlyY3V0JTIwc3R5bGluZ3xlbnwxfHx8fDE3NzcxNzQ4NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "カジュアルスタイル",
    description: "動きのある軽やかなスタイル。アクティブなライフスタイルに合わせた提案をします。",
    stylist: "伊藤 健太",
  },
  {
    url: "https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxoYWlyJTIwc2Fsb24lMjBoYWlyY3V0JTIwc3R5bGluZ3xlbnwxfHx8fDE3NzcxNzQ4NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "キッズカット",
    description: "お子様向けの優しく丁寧な施術。安心してお任せいただけます。",
    stylist: "高橋 愛",
  },
  {
    url: "https://images.unsplash.com/photo-1675034741696-fa9551c31bb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxoYWlyJTIwc2Fsb24lMjBoYWlyY3V0JTIwc3R5bGluZ3xlbnwxfHx8fDE3NzcxNzQ4NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "プロフェッショナルカット",
    description: "確かな技術と経験で、あなたの魅力を最大限に引き出します。",
    stylist: "渡辺 翔",
  },
  {
    url: "https://images.unsplash.com/photo-1675034741473-afed58a142e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMXx8aGFpciUyMHNhbG9uJTIwaGFpcmN1dCUyMHN0eWxpbmd8ZW58MXx8fHwxNzc3MTc0ODcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "レディースカット",
    description: "女性らしい柔らかなラインを大切にしたカット。トレンドと個性を融合させます。",
    stylist: "中村 麻衣",
  },
  {
    url: "https://images.unsplash.com/photo-1675034741621-79a7d07c1369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMnx8aGFpciUyMHNhbG9uJTIwaGFpcmN1dCUyMHN0eWxpbmd8ZW58MXx8fHwxNzc3MTc0ODcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "トータルスタイリング",
    description: "カット、カラー、パーマを組み合わせた総合的なスタイル提案。あなただけの特別なスタイルを。",
    stylist: "小林 純",
  },
];

export function Home() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <div>
      {/* <section className="relative h-[500px] flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Beauty Salon
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            技術と芸術性で、あなたの美しさを引き出します
          </p>
          <a
            href="#gallery"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            ギャラリーを見る
          </a>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">私たちの強み</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            確かな技術と芸術的センスを持つスタイリストが、お客様一人ひとりに最適なスタイルをご提案します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">✂</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">高い技術力</h3>
            <p className="text-gray-600">
              経験豊富なスタイリストによる確かな技術で、理想のスタイルを実現します。
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">芸術的センス</h3>
            <p className="text-gray-600">
              トレンドを取り入れながらも、個性を大切にしたデザインをご提案します。
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">💎</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">清潔で快適な空間</h3>
            <p className="text-gray-600">
              リラックスできる清潔な空間で、上質なサロン体験をお届けします。
            </p>
          </div>
        </div>
      </section> */}

      <section id="gallery" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              スタイルギャラリー
            </h2>
            <p className="text-gray-600">
              私たちの技術と芸術性をご覧ください
            </p>
          </div> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow bg-white"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-600">
                    スタイリスト: {image.stylist}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
              onClick={() => setSelectedImage(null)}
              aria-label="閉じる"
            >
              <X size={24} />
            </button>

            <div className="grid md:grid-cols-2 gap-6 p-6">
              <div>
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-700 mb-6">{selectedImage.description}</p>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600 mb-1">担当スタイリスト</p>
                  <p className="text-lg font-semibold">{selectedImage.stylist}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
