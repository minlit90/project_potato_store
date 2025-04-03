import React, { useState } from "react";
export default function MainModal({ onClose, description }: mainModalProp) {
  const [isVisible, setIsVisble] = useState(true);
  const colseModal = () => {
    setIsVisble(false);
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="bg-white w-44 h-44 rounded-2xl overflow-hidden relative flex items-center justify-center">
      {description}
      <button
        onClick={colseModal}
        className="cursor-pointer absolute top-3 right-3 w-[30px] h-[30px] bg-black rounded-full text-white text-[12px] leading-[30px]"
      >
        팔기
      </button>
    </div>
  );
}

interface mainModalProp {
  onClose: () => void;
  description: React.ReactNode;
}
