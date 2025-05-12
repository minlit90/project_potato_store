"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
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
              검날요고
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
        <nav className="fixed bg-black/70 top-0 left-0 w-screen h-screen">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-[200px] aspect-[406/416] relative">
              <Image
                src="/assets/cat.jpg"
                alt="검날요고"
                fill
                style={{ objectFit: "contain" }}
                priority
                quality={90}
              />
              <div
                className="absolute -top-[30px] -right-[30px] z-10 cursor-pointer"
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
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
