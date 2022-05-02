import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="flex justify-center px-3">
      <div className="prose dark:prose-invert max-w-md lg:max-w-lg xl:max-w-xl">
        <p>
          Since April 2021 I have been a senior software consultant at{" "}
          <a
            href="https://testdouble.com"
            className="text-primary-500 hover:text-primary-600"
          >
            Test Double
          </a>
          .
        </p>
        <p>
          Nights and weekends I have been working on a side project. Details to
          come.
        </p>
        <p>
          I am also a recreational poker player.{" "}
          <span className="font-mono">♣️♦️♠️♥️</span>
        </p>
        <p>
          You can see my writings on{" "}
          <Link to="/blog" className="text-primary-500 hover:text-primary-600">
            my blog
          </Link>
          .
        </p>

        <p>
          My socials are:
          <ul>
            <li>
              <a
                href="https://twitter.com/josephlozanodev"
                className="text-primary-500 hover:text-primary-60"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/joseph-lozano"
                className="text-primary-500 hover:text-primary-60"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}
