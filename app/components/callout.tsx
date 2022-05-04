/* This example requires Tailwind CSS v2.0+ */
import { ChatAltIcon } from "@heroicons/react/solid";

export default function Callout({
  title,
  body,
}: {
  title?: string;
  body?: string;
}) {
  return (
    <div className="not-prose rounded-md bg-sky-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <ChatAltIcon className="h-5 w-5 text-sky-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          {title && (
            <h3 className="text-sm font-medium text-sky-800">{title}</h3>
          )}
          {body && (
            <div className="mt-2 text-sm text-sky-700">
              <p>{body}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
