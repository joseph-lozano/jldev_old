import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <header className="flex space-x-4 items-center pl-12">
      <Link to="/">
        <div className="text-4xl py-5 font-black font-planet-benson-2 bg-gradient-to-t from-secondary-500 to-primary-500 bg-clip-text text-transparent hover:font-normal">
          {"{/}"}
        </div>
      </Link>
      <Link to="/">
        <div className="text-3xl font-mono text-gray-700 hover:underline">
          josephlozano.dev
        </div>
      </Link>
    </header>
  );
}
