import { useState } from "react";
import Basemodal from "./Basemodal";

interface MultiModalProps {
  children: React.ReactNode;
}

export default function MultiModal({ children }: MultiModalProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <Basemodal visible={isModalVisible}>
        <div className="bg-white w-44 h-44 rounded-2xl overflow-hidden relative flex items-center justify-center">
          {children}
          <button
            onClick={() => setIsModalVisible(false)}
            className="cursor-pointer absolute top-3 right-3 w-[30px] h-[30px] bg-black rounded-full text-white text-[12px]"
          >
            팔기
          </button>
        </div>
      </Basemodal>
    </>
  );
}
