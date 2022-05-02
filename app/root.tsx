import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import Header from "./components/header";

import styles from "./styles/app.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "josephlozano.dev",
  viewport: "width=device-width,initial-scale=1",
});

const bodyClass =
  "min-h-screen bg-gradient-to-tr from-secondary-100 to-primary-50 dark:from-secondary-800 dark:to-primary-800";
export function CatchBoundary() {
  const caught = useCatch();
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body className={bodyClass}>
        <Header />
        {caught.status == 404 && (
          <div className="text-center">
            <h1 className="text-2xl font-mono font-bold text-gray-700">
              not found
            </h1>
          </div>
        )}
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className={bodyClass}>
        <Header />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
