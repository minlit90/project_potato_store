"use client";

interface TestProps {
  num: number;
  text: string;
  className?: string;
  chidren?: React.ReactNode;
}

export default function Test({ num, text, className, chidren }: TestProps) {
  return (
    <div>
      <div className="flex gap-3">
        <div>
          name: <span className={className}>{text}</span>
        </div>
        <h2>
          age: <span className={className}>{num}</span>
        </h2>
      </div>
      <div>{chidren}</div>
    </div>
  );
}
