import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { UserIcon, HeartIcon } from "@heroicons/react/24/outline";

import Post from "../../components/modals/Post";

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;

  const [postOpen, setPostOpen] = useState(false);
  const [description, setDescription] = useState("");

  let currentDate = new Date().toJSON().slice(0, 10);

  const { data: post } = useSWR(
    id ? `https://jsonplaceholder.typicode.com/posts/${id}` : null
  );

  useEffect(() => {
    if (!post) return;
    let desc = post.body || post.title;
    desc = desc.substring(0, 158).concat(".."); // Hello world..
    setDescription(desc);
  }, [post]);

  return (
    <>
      <Head>
        <title>{post && "Miniapp - " + post.title}</title>
        <meta name="description" content={description}></meta>
        <meta property="og:description" content={description} />
        <meta property="og:title" content={post?.title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:title" content={post?.title} />
      </Head>
      {post ? (
        <div>
          <div className="p-6 mb-6 bg-white rounded-xl dark:bg-zinc-800">
            <h1 className="mb-6 text-3xl">{post.title}</h1>
            <div className="flex items-center mb-6 ">
              <div className="flex items-center justify-center flex-shrink-0 bg-gray-300 rounded-full dark:bg-gray-700 h-9 w-9">
                <UserIcon className="w-5 h-5" />
              </div>
              <span className="ml-3">Username</span>
              <span className="ml-6">{currentDate}</span>
            </div>
            <div className="flex mb-3 ">
              <span className="mr-2 roundedTag">Tag 1</span>
              <span className="mr-2 roundedTag">Tag 2</span>
              <div className="flex items-center ml-2 mr-2 text-sm">
                n <HeartIcon className="w-5 h-5 ml-1" />
              </div>
            </div>
            <p>{post.body}</p>
          </div>
          <div>
            <button className="roundedButton" onClick={() => setPostOpen(true)}>
              New reply
            </button>
          </div>
        </div>
      ) : (
        <p className="animate-pulse">...</p>
      )}
      <Post postOpen={postOpen} setPostOpen={setPostOpen} type="b" />
    </>
  );
}

// This gets called on every request
// export async function getServerSideProps(context) {
//   const res = await Axios.get(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   return { props: { post: res.data } };
// }

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
