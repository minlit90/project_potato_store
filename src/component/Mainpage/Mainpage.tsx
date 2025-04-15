"use client";
import { useEffect, useState } from "react";
import Test from "./Test";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const tab = [
  {
    id: 1,
    name: "감자",
    desc: <div className="text-sky-300">🥔</div>,
  },
  {
    id: 2,
    name: "열무",
    amount: 16,
    desc: <div className="text-sky-500">🥬</div>,
  },
  {
    id: 3,
    name: "당근",
    amount: 18,
    desc: <div className="text-sky-700">🥕</div>,
  },
];

export default function Mainpage() {
  const [istest, setIstest] = useState(false);

  const bgChange = () => {
    setIstest((prev) => !prev);
  };

  return (
    <div className="p-[14px]">
      <section className="mb-[20px]">
        <h2 className="font-semibold mb-2.5">1. type, component, props, map</h2>
        <div className={`p-[14px] rounded-sm ${istest ? "bg-black" : ""}`}>
          {tab.map((tabs, index) => (
            <Test
              num={tabs.amount}
              text={tabs.name}
              key={tabs.id}
              className={`${istest ? "text-white" : "text-black"}`}
            >
              {tabs.desc}
            </Test>
          ))}
          <button
            onClick={bgChange}
            className={`h-10 leading-10 px-4 text-sm  mt-3 rounded-sm cursor-pointer font-semibold ${
              istest ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            배경바꾸기
          </button>
        </div>
      </section>
      <section className="mb-[20px]">
        <h2 className="font-semibold mb-2.5">
          2. imgae 컴포넌트 반응형, 이미지 최적화
        </h2>
        <div className="p-[14px]">
          <div className="relative w-[5%] aspect-[128/130] mb-4">
            <Image
              src="/assets/robin.png"
              alt="로빈"
              fill
              style={{ objectFit: "contain" }}
              priority
              quality={90}
            />
          </div>
          <p>
            🍺 above-the-fold 이미지에 <b>priority</b> 적용
          </p>
          <p>
            🍮 quality=&#123;<b>80~90</b>&#125;
          </p>
        </div>
      </section>
      <section className="mb-[20px]">
        <h2 className="font-semibold mb-2.5">3. framer-motion</h2>
        <div>
          <motion.button
            variants={{
              hover: { scale: 1.1 },
              tap: { scale: 0.95 },
            }}
            whileHover="hover"
            whileTap="tap"
            className="h-10 leading-10 px-4 text-sm  mt-3 rounded-sm cursor-pointer font-semibold bg-black text-white"
          >
            버튼
          </motion.button>
        </div>
      </section>
      <section className="mb-[20px]">
        <h2 className="font-semibold mb-2.5">3. framer-motion</h2>
        <div>
          <motion.button
            variants={{
              hover: { scale: 1.1 },
              tap: { scale: 0.95 },
            }}
            whileHover="hover"
            whileTap="tap"
            className="h-10 leading-10 px-4 text-sm  mt-3 rounded-sm cursor-pointer font-semibold bg-black text-white"
          >
            버튼
          </motion.button>
        </div>
      </section>
    </div>
  );
}
