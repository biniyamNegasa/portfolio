import Image from "next/image";

export function Atcoder({ className }: { className?: string }) {
  return (
    <Image
      src="/atcoder.svg"
      alt="AtCoder"
      width={100}
      height={100}
      className={className}
    />
  );
}
