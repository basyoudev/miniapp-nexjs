import Head from "next/head";
import { useState } from "react";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";

import InputGroup from "../components/InputGroup";

export default function Message() {
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    setEmail("");
    setBody("");
  };

  return (
    <>
      <Head>
        <title>Miniapp - Message us</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="max-w-sm mb-5">
        <div className="flex items-center mb-6 ">
          <ChatBubbleBottomCenterIcon className="sectionIcon" />
          Message us
        </div>
        <p className="mb-3 text-sm">
          We are happy to receive your messages at any time
        </p>
        <form onSubmit={submitForm}>
          <InputGroup
            placeholder="email  "
            type="email"
            value={email}
            setValue={setEmail}
            maxLength={99}
            require={true}
          />
          <textarea
            className="mb-3 roundedTextarea"
            placeholder="Message content"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={3}
            maxLength={300}
          ></textarea>
          <div className="flex items-center mb-3 text-sm">
            <button
              className="roundedButton disabled:opacity-50"
              type="submit"
              disabled={body.trim().length === 0}
            >
              Send
            </button>
            <div className="flex justify-end flex-grow">
              <span>{body.trim().length} / 300</span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
