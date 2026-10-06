"use client";

import type { LinkItem } from "@/data/profile";

type Props = {
  link: LinkItem;
  count: number;
  onClick: () => void;
};

export default function LinkCard({ link, count, onClick }: Props) {
  function handleClick() {
    // 페이지를 떠나도 요청이 끝까지 전송되도록 sendBeacon을 사용한다.
    const body = new Blob([JSON.stringify({ id: link.id })], {
      type: "application/json",
    });
    navigator.sendBeacon("/api/clicks", body);
    onClick();
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="relative block w-full rounded-2xl border border-white/70 bg-white/45 px-16 py-4 text-center text-[15px] font-medium tracking-tight text-slate-700 shadow-[0_6px_24px_-10px_rgba(40,90,150,0.25)] backdrop-blur-md transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/60 hover:shadow-[0_12px_28px_-10px_rgba(40,90,150,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {link.title}
      {/* 제목이 가운데에 머물도록 클릭 수는 오른쪽에 겹쳐 배치한다. */}
      <span className="absolute inset-y-0 right-5 flex items-center text-xs font-normal tabular-nums text-slate-500">
        {count.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
