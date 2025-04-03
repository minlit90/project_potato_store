"use client";
import Link from "next/link";
import { useState } from "react";

export default function header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 inset-x-0  z-10">
      <div className="border-b border-gray-500/30">
        <div className="relative content-container max-w-[1440px] px-[1.5rem] m-auto text-xs">
          <div className="flex justify-between items-center h-16">
            <p
              className="leading-none w-[20%] cursor-pointer text-[12px]"
              onClick={() => setIsOpen(true)}
            >
              Menu
            </p>
            <Link
              href="/"
              className="font-bold cursor-pointer block text-gray-600 h-16 w-[200px] leading-[4rem] text-[14px] text-center uppercase"
            >
              GRNA
            </Link>
            <div className="flex gap-6 w-[20%] justify-end text-[12px]">
              <p className="leading-none cursor-pointer">Search</p>
              <p className="leading-none cursor-pointer">Account</p>
              <p className="leading-none cursor-pointer">Cart(0)</p>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <nav className="absolute top-0 left-0 p-[10px] h-[100vh] w-1/3 ">
          <div className="relative h-full backdrop-blur-2xl rounded-lg overflow-hidden">
            <div
              className="absolute top-[10px] right-[10px] z-10 cursor-pointer"
              onClick={handleCloseMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#FFFFFF"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </div>
            <div className="flex justify-center flex-col bg-[rgba(250,243,230,0.3)] h-full p-[20px]">
              <ul className="flex text-4xl text-white justify-center gap-5 flex-col">
                <li>
                  <Link href="/" className="cursor-pointer">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/brand" className="cursor-pointer">
                    Brand
                  </Link>
                </li>
                <li>
                  <Link href="/hair" className="cursor-pointer">
                    Hair&Body
                  </Link>
                </li>
                <li>
                  <Link href="/" className="cursor-pointer">
                    Fragnance
                  </Link>
                </li>
                <li>
                  <Link href="/" className="cursor-pointer">
                    Notice
                  </Link>
                </li>
              </ul>
              <p className="absolute bottom-[20px] text-xs text-white/50 ">
                © 2025 Maison de Pure. All rights reserved.
              </p>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
