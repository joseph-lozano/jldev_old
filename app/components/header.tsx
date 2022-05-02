import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-12">
      <div className="flex space-x-4 items-baseline">
        <Link to="/">
          <div className="text-4xl py-5 font-black font-planet-benson-2 bg-gradient-to-t from-secondary-500 to-primary-500 bg-clip-text text-transparent hover:font-normal">
            {"{/}"}
          </div>
        </Link>
        <Link to="/" className="hidden md:inline">
          <div className="text-3xl font-mono text-gray-700 hover:underline dark:text-gray-200">
            josephlozano.dev
          </div>
        </Link>
      </div>
      <div className="flex space-x-4 items-baseline">
        <Link to="/blog">
          <div className="text-xl font-mono text-gray-700 dark:text-gray-200 hover:underline">
            blog
          </div>
        </Link>
        {/*
        <Link to="/timeline">
          <div className="text-xl font-mono text-gray-700 dark:text-gray-200 hover:underline">
            timeline
          </div>
        </Link>
        */}
        <a href="mailto:me@josephlozano.dev">
          <div className="text-xl font-mono text-gray-700 dark:text-gray-200 hover:underline">
            contact
          </div>
        </a>
      </div>
    </header>
  );
}
