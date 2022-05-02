import { LinksFunction } from "@remix-run/node";
import { Outlet, useLocation } from "@remix-run/react";
import hljsStyles from "highlight.js/styles/base16/dracula.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: hljsStyles,
    },
  ];
};

export default function Blog() {
  const { pathname } = useLocation();
  return pathname.endsWith("/blog") || pathname.endsWith("/blog/") ? (
    <Outlet />
  ) : (
    <div className="flex justify-center py-8">
      <div className="prose prose-secondary dark:prose-invert xl:prose-lg ">
        <Outlet />
      </div>
    </div>
  );
}
