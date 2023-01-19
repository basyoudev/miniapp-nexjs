import { useCallback, useEffect, useRef, useState } from "react";
import { XMarkIcon, PlusIcon } from "@heroicons/react/24/outline";

export default function Post({ postOpen, setPostOpen, type }) {
  const modalRef = useRef();
  const [body, setBody] = useState("");

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setPostOpen(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && postOpen) {
        setPostOpen(false);
      }
    },
    [setPostOpen, postOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const submitForm = async (event) => {
    event.preventDefault();
    setBody("");
  };

  return (
    <>
      {postOpen && (
        <div
          className="fixed inset-0 z-30 w-full h-full pt-8 overflow-auto text-center bg-black bg-opacity-50 animate-opacity"
          ref={modalRef}
          onClick={closeModal}
        >
          <div className="relative inline-block w-full max-w-lg ">
            <div className="w-full p-5 bg-white dark:bg-zinc-800 rounded-xl">
              <div className="flex items-center mb-6 opacity-90">
                <PlusIcon className="w-6 h-6 mr-2" />
                New {type === "a" ? "post" : "reply"}
                <div className="flex justify-end flex-grow">
                  <XMarkIcon
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => setPostOpen(false)}
                  />
                </div>
              </div>
              <div className="flex">
                <span>{body.trim().length} / 300</span>
              </div>
              <form onSubmit={submitForm}>
                <textarea
                  className=" roundedTextarea"
                  rows="3"
                  placeholder="type something .."
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  maxLength={300}
                ></textarea>
                <div className="flex justify-center mt-6 ">
                  <button
                    className="roundedButton disabled:opacity-50"
                    type="submit"
                    disabled={body.trim().length === 0}
                  >
                    Publish {type === "a" ? "post" : "reply"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
