export default function Page() {
  return (
    <div>
      <div className="flex flex-col gap-2 p-8 justify-center items-start">
        <div className="aspect-square w-xs rounded-2xl bg-blue-800"></div>
        <p>제품명 : 감자</p>
        <p>가격 : 5,000,000원</p>
        <button className="cursor-pointer w-24 h-12 aspect-square rounded-md bg-black text-white">
          좋아요
        </button>
        <button className="cursor-pointer w-24 h-12 aspect-square rounded-md bg-black text-white">
          장바구니
        </button>
      </div>
    </div>
  );
}
