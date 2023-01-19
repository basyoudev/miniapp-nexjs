import Head from "next/head";
import { useState } from "react";
import { BellAlertIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function Notes() {
  const [showNotes, setShowNotes] = useState(true);
  return (
    <>
      <Head>
        <title>Miniapp - Notes</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="max-w-sm mb-5">
        <div className="flex items-center mb-6 ">
          <BellAlertIcon className="sectionIcon" />
          Notes
        </div>
        <p className="flex justify-between mb-6 text-sm">
          <span>Notes section</span>
          <TrashIcon
            className="w-5 h-5 cursor-pointer hover:text-red-500"
            onClick={() => setShowNotes(false)}
          />
        </p>
        {showNotes ? (
          <div>
            <p className="note">Note 1</p>
            <p className="note">Note 2</p>
            <p className="note">Note 3</p>
            <p className="note">Note 4</p>
          </div>
        ) : (
          <div className="flex justify-center p-6 transition-all bg-white opacity-75 dark:bg-zinc-800 rounded-xl">
            <span>No items here!</span>
          </div>
        )}
      </div>
    </>
  );
}
