import Head from "next/head";
import { useState } from "react";
import useSWR from "swr";

import PostCard from "../components/PostCard";
import Post from "../components/modals/Post";

export default function Home() {
  let currentDate = new Date().toJSON().slice(0, 10);

  const [postOpen, setPostOpen] = useState(false);

  const { data: posts } = useSWR("https://jsonplaceholder.typicode.com/posts");

  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
  const title = "Miniapp- Home";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:title" content={title} />
      </Head>
      <div className="flex items-center justify-between mb-6">
        <button
          className="roundedButton"
          aria-label="New post"
          onClick={() => setPostOpen(true)}
        >
          New post
        </button>
        <span className="text-sm opacity-90">25 / {posts?.length} records</span>
      </div>
      {posts ? (
        <>
          {posts.slice(0, 25).map((post, index) => (
            <PostCard key={index} post={post} currentDate={currentDate} />
          ))}
        </>
      ) : (
        <p>...</p>
      )}
      <Post postOpen={postOpen} setPostOpen={setPostOpen} type="a" />
    </>
  );
}
