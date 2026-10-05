"use client";

import type { LinkItem } from "@/data/profile";

type Props = {
  link: LinkItem;
};

export default function LinkCard({ link }: Props) {
  function handleClick() {
    // 페이지를 떠나도 요청이 끝까지 전송되도록 sendBeacon을 사용한다.
    const body = new Blob([JSON.stringify({ id: link.id })], {
      type: "application/json",
    });
    navigator.sendBeacon("/api/clicks", body);
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="block w-full rounded-xl border-2 border-zinc-900 px-5 py-3 text-center font-medium transition hover:bg-zinc-100"
    >
      {link.title}
    </a>
  );
}
