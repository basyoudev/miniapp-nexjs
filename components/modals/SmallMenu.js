import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef } from "react";
import {
  XMarkIcon,
  ChatBubbleLeftIcon,
  InformationCircleIcon,
  ArrowRightOnRectangleIcon,
  BellIcon,
} from "@heroicons/react/24/outline";

export default function SmallMenu({ smallMenuOpen, setSmallMenuOpen }) {
  const router = useRouter();
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setSmallMenuOpen(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && smallMenuOpen) {
        setSmallMenuOpen(false);
      }
    },
    [setSmallMenuOpen, smallMenuOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  useEffect(() => {
    setSmallMenuOpen(false);
  }, [router]);

  return (
    <>
      {smallMenuOpen && (
        <div
          className="fixed inset-0 z-30 w-full h-full bg-black animate-opacity bg-opacity-40 sm:hidden"
          ref={modalRef}
          onClick={closeModal}
        >
          <div className="w-full bg-gray-200 dark:bg-zinc-900">
            <div className="flex items-center justify-between h-16 px-3 bg-white border-b dark:bg-zinc-900 dark:border-gray-800">
              <XMarkIcon
                className="w-6 h-6 cursor-pointer"
                onClick={() => setSmallMenuOpen(false)}
              />
            </div>
            <div className="p-6 ">
              <div className="flex justify-center mb-5">
                <button
                  className="flex items-center"
                  onClick={() => router.push("/about")}
                >
                  About <InformationCircleIcon className="w-6 h-6 ml-2" />
                </button>
              </div>
              <div className="flex justify-center mb-5">
                <button
                  className="flex items-center"
                  onClick={() => router.push("/message")}
                >
                  Message us <ChatBubbleLeftIcon className="w-6 h-6 ml-2" />
                </button>
              </div>
              <div className="flex justify-center mb-5">
                <button
                  className="flex items-center"
                  onClick={() => router.push("/notes")}
                >
                  Notes <BellIcon className="w-6 h-6 ml-2" />
                </button>
              </div>
              <div className="flex justify-center mb-5">
                <Link href="/login" className="ml-3 roundedButton">
                  Login <ArrowRightOnRectangleIcon className="w-6 h-6 " />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
