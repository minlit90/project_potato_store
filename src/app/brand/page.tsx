"use client"; // Next.js의 App Router에서 Jotai를 사용할 때 필요

import { useAtom } from "jotai";
import { countAtom } from "@/stores/BrandStore";
import { useState } from "react";
import BaseModal from "@/component/Modal/BaseModal";
import MainModal from "@/component/Modal/MainModal";

export default function Page() {
  const [count, setCount] = useAtom(countAtom);
  const [modalVisible, setModalVisible] = useState<boolean[]>([true, true]);
  // const [modalVisible, setModalVisible] = useState(true);

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1 증가</button>
      <button
        className="block bg-amber-500 h-12 leading-12 rounded-full px-7 text-white"
        onClick={() => {
          setModalVisible([true, true]);
        }}
      >
        메인 팝업오픈
      </button>
      {/* 메인팝업 */}
      {/* some - modalVisible 상태는 배열로 지정, some은 배열중 하나라도 true면 true, 모두 false면 false  */}
      <BaseModal visible={modalVisible.some((visible) => visible)}>
        {/* onClose가 호출되면 setModalVisible 상태에서 첫번째는 false로 변경, 두번째는 배열의 이전 값(prev[1]) 그대로 받기 */}
        <MainModal
          onClose={() => setModalVisible((prev) => [false, prev[1]])}
          description={"감자"}
        />
        {/* onClose가 호출되면 setModalVisible 상태에서 첫번째는 배열의 이전 값(prev[0]) 그대로, 두번째는 false로 변경 */}
        <MainModal
          onClose={() => setModalVisible((prev) => [prev[0], false])}
          description={"토마토"}
        />
      </BaseModal>
    </div>
  );
}
