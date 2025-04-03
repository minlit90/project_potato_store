"use client";
import { useEffect, useState } from "react";
import Test from "./Test";

const tab = [
  {
    id: 1,
    name: "윈터",
    age: 14,
    font: "font-bold",
    desc: <div className="text-sky-300">여자</div>,
  },
  {
    id: 2,
    name: "카리나",
    age: 16,
    font: "font-bold",
    desc: <div className="text-sky-500">사람</div>,
  },
  {
    id: 3,
    name: "지젤",
    age: 18,
    font: "font-bold",
    desc: <div className="text-sky-700">인간</div>,
  },
];

export default function Mainpage() {
  const [istest, setIstest] = useState(false);

  useEffect(() => {
    document.body.classList.add("!bg-[#dfdfdf]");
    return () => {
      document.body.classList.remove("!bg-[#dfdfdf]");
    };
  }, []);

  const bgChange = () => {};

  return (
    <div className="p-[14px]">
      {/* <button onClick={() => setIstest((prev) => !prev)}>배경바꾸기</button> */}
      {tab.map((tabs, index) => (
        <Test
          num={tabs.age}
          text={tabs.name}
          key={tabs.id}
          className={tabs.font}
          chidren={tabs.desc}
        />
      ))}
      {/* <div className="h-[90vh] bg-stone-500 rounded-3xl"></div> */}
    </div>
  );
}
