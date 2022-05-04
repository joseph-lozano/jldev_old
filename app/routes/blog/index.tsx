import { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import * as helloWorld from "./hello-world.mdx";
import * as multitenancyInEcto from "./multitenancy-in-ecto.mdx";

type BlogData = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

export const loader: LoaderFunction = () => {
  let blogs: BlogData[] = [helloWorld, multitenancyInEcto]
    .map((mdx) => ({
      slug: mdx.filename.replace(".mdx", ""),
      ...mdx.attributes,
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .filter(({ draft }) => !draft || process.env.NODE_ENV === "development");
  return { blogs };
};

export let handle = { isIndex: true };

export default function BlogIndex() {
  const { blogs }: { blogs: BlogData[] } = useLoaderData();
  return (
    <div className="flex justify-center">
      <div className="w-3/4 md:w-2/3 lg:w-1/2 2xl:w-1/3">
        <ul>
          {blogs.map((blog) => (
            <li key={blog.slug} className="py-4">
              <Link to={blog.slug}>
                <div className="flex items-center space-x-3 border py-4 px-3 shadow-lg hover:shadow-2xl dark:shadow-white dark:hover:shadow-white dark:hover:shadow-lg dark:shadow-md">
                  <div className="text-xl p-2 font-black font-planet-benson-2 bg-gradient-to-b from-primary-500 to-secondary-500 bg-clip-text text-transparent hover:font-normal">
                    {"{/}"}
                  </div>

                  <div className="flex-1 space-y-1">
                    <div className="flex flex-col sm:flex-row items-center justify-between">
                      <h3 className="text-sm font-medium dark:text-gray-200 text-gray-800">
                        {blog.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-300">
                        {new Date(blog.date).toDateString()}
                      </p>
                    </div>
                    <p className="text-sm hidden sm:block text-gray-500 dark:text-gray-300">
                      {blog.description}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
