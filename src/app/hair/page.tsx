"use client";
import { useState } from "react";
import BaseModal from "@/component/Modal/BaseModal";
import MainModal from "@/component/Modal/MainModal";

export default function Page() {
  // 멀티모달
  const vegetableList = [
    { id: "potato", name: "감자" },
    { id: "tomato", name: "토마토" },
    { id: "carrot", name: "당근" },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPopup, setSelectedPopup] = useState<string | null>(null);

  const openModal = (popupString: string) => {
    setSelectedPopup(popupString);
    setModalVisible(true);
  };

  return (
    <>
      {/* 리스트 */}
      <div className="flex gap-4 m-6">
        {vegetableList.map((vegetables, index) => (
          <button
            className="cursor-pointer block bg-amber-500 h-12 leading-12 rounded-full px-7 text-white"
            key={index}
            onClick={() => openModal(`${vegetables.name}`)}
          >
            {vegetables.name}
          </button>
        ))}
      </div>
      {/* 모달을 리스트 밖에서 렌더링 */}
      {modalVisible && (
        <BaseModal visible={modalVisible}>
          <MainModal
            onClose={() => setModalVisible(false)}
            description={<div className="text-black">{selectedPopup}</div>}
          />
        </BaseModal>
      )}
    </>
  );
}
