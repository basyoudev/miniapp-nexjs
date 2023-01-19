import Link from "next/link";
import { useState } from "react";
import {
  SunIcon,
  MoonIcon,
  ChatBubbleLeftIcon,
  ArrowRightOnRectangleIcon,
  BellIcon,
  LanguageIcon,
  InformationCircleIcon,
  BoltIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { Menu } from "@headlessui/react";

import useDarkMode from "../hooks/useDarkMode";
import SmallMenu from "./modals/SmallMenu";

export default function Header() {
  const [colorTheme, setTheme] = useDarkMode();
  const [smallMenuOpen, setSmallMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 flex items-center justify-center w-full h-16 bg-white border-b dark:border-gray-800 dark:bg-zinc-900">
      <div className="flex items-center w-full max-w-2xl px-3 ">
        <Link href="/" className="flex items-center ">
          <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-2 text-2xl text-white bg-blue-600 ">
            <BoltIcon className="w-6 h-6" />
          </div>
          <span className="font-semibold opacity-80 dark:font-normal">
            Miniapp
          </span>
        </Link>
        <div className="items-center justify-end flex-grow hidden sm:flex">
          <button
            className="headerIcon"
            aria-label="Color theme"
            onClick={() => setTheme(colorTheme)}
          >
            {colorTheme === "light" ? (
              <SunIcon className="w-6 h-6 " />
            ) : (
              <MoonIcon className="w-6 h-6 " />
            )}
          </button>
          <Link href="/notes" className="relative headerIcon">
            <BellIcon className="w-6 h-6 " />
            <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs text-white bg-blue-600 rounded-full">
              1
            </span>
          </Link>
          <Link href="/message" className="headerIcon">
            <ChatBubbleLeftIcon className="w-6 h-6 " />
          </Link>
          <Link href="/about" className="headerIcon">
            <InformationCircleIcon className="w-6 h-6 " />
          </Link>
          <Menu as="div" className="relative ">
            <Menu.Button className="headerIcon" aria-label="Language">
              <LanguageIcon className="w-6 h-6 " />
            </Menu.Button>
            <Menu.Items className="right-0 origin-top-left menuItems ">
              <div className="p-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      aria-label="English"
                      className={`${active ? "menuItemActive" : ""} menuItem  `}
                    >
                      English
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>
          <Link href="/login" className="ml-3 roundedButton">
            Login <ArrowRightOnRectangleIcon className="w-6 h-6 mr-1" />
          </Link>
        </div>
        <div className="flex items-center justify-end flex-grow sm:hidden">
          <button
            className="headerIcon"
            aria-label="Color theme"
            onClick={() => setTheme(colorTheme)}
          >
            {colorTheme === "light" ? (
              <SunIcon className="w-6 h-6 " />
            ) : (
              <MoonIcon className="w-6 h-6 " />
            )}
          </button>
          <button
            className="headerIcon"
            aria-label="Small menu"
            onClick={() => setSmallMenuOpen(true)}
          >
            <Bars3Icon className="w-6 h-6 " />
          </button>
        </div>
      </div>
      <SmallMenu
        smallMenuOpen={smallMenuOpen}
        setSmallMenuOpen={setSmallMenuOpen}
      />
    </nav>
  );
}
