import { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import fs from "fs";
import { join } from "path";
import { parse } from "yaml";

const blogPath = "app/routes/blog/";

type BlogData = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

export const loader: LoaderFunction = () => {
  let blogs: Array<BlogData> = [];
  blogs = fs
    .readdirSync(blogPath)
    .filter((file) => file.endsWith(".mdx"))
    .map(getBlogData)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  return { blogs };
};

function getBlogData(file: string): BlogData {
  const yaml = fs
    .readFileSync(join(blogPath, file))
    .toString()
    .split("---", 3)[1];
  const { title, date, description } = parse(yaml);
  const slug = file.replace(".mdx", "");
  return { title, date, description, slug };
}

export default function BlogIndex() {
  const { blogs }: { blogs: Array<BlogData> } = useLoaderData();
  return (
    <div className="flex justify-center">
      <div className="w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4">
        <ul>
          {blogs.map((blog) => (
            <li key={blog.slug} className="py-4">
              <Link to={blog.slug}>
                <div className="flex items-center space-x-3 border py-4 px-3 shadow-lg hover:shadow-xl">
                  <div className="text-xl p-2 font-black font-planet-benson-2 bg-gradient-to-b from-primary-500 to-secondary-500 bg-clip-text text-transparent hover:font-normal">
                    {"{/}"}
                  </div>

                  <div className="flex-1 space-y-1">
                    <div className="flex flex-col sm:flex-row items-center justify-between">
                      <h3 className="text-sm font-medium">{blog.title}</h3>
                      <p className="text-sm text-gray-500">{blog.date}</p>
                    </div>
                    <p className="text-sm text-gray-500">{blog.description}</p>
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
