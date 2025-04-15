"use client";

interface TestProps {
  num?: number;
  text: string;
  className?: string;
  children?: React.ReactNode;
}

export default function Test({
  num = 10,
  text,
  className,
  children,
}: TestProps) {
  return (
    <div>
      <div className="flex gap-3">
        <div>{children}</div>
        <div className={className}>
          name: <span>{text}</span>
        </div>
        <h2 className={className}>
          amount: <span>{num}</span>
        </h2>
      </div>
    </div>
  );
}
