import { Outlet, useLocation } from "@remix-run/react";

export default function Blog() {
  const { pathname } = useLocation();
  return pathname.endsWith("/blog") || pathname.endsWith("/blog/") ? (
    <Outlet />
  ) : (
    <div className="flex justify-center py-8">
      <div className="prose xl:prose-lg ">
        <Outlet />
      </div>
    </div>
  );
}
