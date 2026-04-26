import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Menu } from "./components/Menu";
import { News } from "./components/News";
import { NewsDetail } from "./components/NewsDetail";
import { Staff } from "./components/Staff";
import { Blog } from "./components/Blog";
import { BlogDetail } from "./components/BlogDetail";
import { Contact } from "./components/Contact";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "menu", Component: Menu },
      { path: "news", Component: News },
      { path: "news/:id", Component: NewsDetail },
      { path: "staff", Component: Staff },
      { path: "blog", Component: Blog },
      { path: "blog/:id", Component: BlogDetail },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
