import { useState } from "react";

export default function Like() {
  const [like, setLike] = useState(false);
  const handleLIke = () => {
    setLike((prev) => !prev);
  };
  return (
    <button onClick={() => handleLIke()} className="cursor-pointer">{`${
      like ? "🖤" : "🤍"
    }`}</button>
  );
}
