import Head from "next/head";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export default function About() {
  return (
    <>
      <Head>
        <title>Miniapp - About</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="w-full p-6 mb-6 bg-white dark:bg-zinc-800 rounded-xl">
        <div className="flex items-center mb-6 ">
          <InformationCircleIcon className="sectionIcon" />
          About
        </div>
        <p className="text-sm ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </>
  );
}
