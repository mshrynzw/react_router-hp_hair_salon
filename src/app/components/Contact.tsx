import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">お問い合わせ</h1>
        <p className="text-gray-600">
          ご質問やご予約など、お気軽にお問い合わせください
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">店舗情報</h2>

          <div className="space-y-4 mb-8">
            <div>
              <h3 className="font-semibold mb-1">住所</h3>
              <p className="text-gray-700">
                〒150-0001
                <br />
                東京都渋谷区神宮前1-2-3
                <br />
                ビューティービル2F
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">電話番号</h3>
              <p className="text-gray-700">03-1234-5678</p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">メールアドレス</h3>
              <p className="text-gray-700">info@beautysalon.jp</p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">営業時間</h3>
              <p className="text-gray-700">
                平日: 10:00 - 20:00
                <br />
                土日祝: 9:00 - 19:00
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">定休日</h3>
              <p className="text-gray-700">毎週火曜日</p>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">アクセス</h3>
            <p className="text-gray-700 text-sm">
              東京メトロ 表参道駅 A1出口より徒歩3分
              <br />
              JR原宿駅 表参道口より徒歩8分
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">お問い合わせフォーム</h2>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <p className="text-green-800 font-semibold mb-2">
                送信が完了しました
              </p>
              <p className="text-green-700 text-sm">
                お問い合わせいただきありがとうございます。
                <br />
                2営業日以内にご返信いたします。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block font-semibold mb-2 text-sm"
                >
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-semibold mb-2 text-sm"
                >
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block font-semibold mb-2 text-sm"
                >
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-semibold mb-2 text-sm"
                >
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                送信する
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
