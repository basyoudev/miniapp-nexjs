import Link from "next/link";
import { UserIcon, HeartIcon } from "@heroicons/react/24/outline";

export default function PostCard({ post, currentDate }) {
  let body = post.body;
  if (body.length > 155) {
    body = post.body.substring(0, 150) + "...";
  }
  return (
    <div className="flex p-3 mb-3 bg-white rounded-xl dark:bg-zinc-800 ">
      <div className="flex items-center justify-center flex-shrink-0 bg-gray-300 rounded-full dark:bg-gray-700 h-9 w-9">
        <UserIcon className="w-5 h-5" />
      </div>
      <div className="pl-3">
        <Link
          className=" hover:text-blue-600"
          href={`${process.env.NEXT_PUBLIC_CLIENT_BASE_URL}/posts/${post.id}`}
        >
          <p className="mb-1">{post.title}</p>
        </Link>
        <p className="mb-2 text-sm opacity-90">{body}</p>
        <div className="flex flex-wrap">
          <span className="text-white mr-2 px-2 py-0.5  text-sm bg-blue-600 rounded-lg">
            user {post.userId}
          </span>
          <span className="mr-2 roundedTag">Tag 1</span>
          <span className="mr-2 roundedTag">Tag 2</span>
          <div className="flex items-center ml-2 mr-2 text-sm">
            n <HeartIcon className="w-5 h-5 ml-1" />
          </div>
          <div className="flex justify-end flex-grow">
            <span className="text-sm opacity-90">{currentDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
