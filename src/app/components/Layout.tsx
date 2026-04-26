import { Outlet, Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "ホーム" },
    { path: "/menu", label: "メニュー" },
    { path: "/news", label: "ニュース" },
    { path: "/staff", label: "スタッフ" },
    { path: "/blog", label: "ブログ" },
    { path: "/contact", label: "お問い合わせ" },
  ];

  const getBreadcrumbs = () => {
    const path = location.pathname;
    if (path === "/") return null;

    const segments = path.split("/").filter(Boolean);
    const breadcrumbs = [{ path: "/", label: "ホーム" }];

    segments.forEach((segment, index) => {
      const path = "/" + segments.slice(0, index + 1).join("/");
      let label = segment;

      if (segment === "menu") label = "メニュー";
      else if (segment === "news") label = "ニュース";
      else if (segment === "staff") label = "スタッフ";
      else if (segment === "blog") label = "ブログ";
      else if (segment === "contact") label = "お問い合わせ";

      breadcrumbs.push({ path, label });
    });

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              Beauty Salon
            </Link>

            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="メニュー"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-gray-700 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="pt-16">
        {breadcrumbs && (
          <div className="bg-gray-50 border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
              <nav className="flex items-center space-x-2 text-sm">
                {breadcrumbs.map((crumb, index) => (
                  <div key={crumb.path} className="flex items-center">
                    {index > 0 && <span className="mx-2 text-gray-400">/</span>}
                    {index === breadcrumbs.length - 1 ? (
                      <span className="text-gray-600">{crumb.label}</span>
                    ) : (
                      <Link
                        to={crumb.path}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        )}
        <Outlet />
      </main>

      {/* <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4">Beauty Salon</h3>
              <p className="text-gray-400 text-sm">
                技術と芸術性で、あなたの美しさを引き出します
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">営業時間</h4>
              <p className="text-gray-400 text-sm">平日: 10:00 - 20:00</p>
              <p className="text-gray-400 text-sm">土日祝: 9:00 - 19:00</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">お問い合わせ</h4>
              <p className="text-gray-400 text-sm">TEL: 03-1234-5678</p>
              <p className="text-gray-400 text-sm">
                Email: info@beautysalon.jp
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2026 Beauty Salon. All rights reserved.
          </div>
        </div>
      </footer> */}
    </div>
  );
}
