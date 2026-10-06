"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

type Props = {
  links: LinkItem[];
};

export default function LinkList({ links }: Props) {
  // 데이터를 받기 전에는 빈 객체라 모든 카드가 0회로 표시된다.
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/clicks", { cache: "no-store", signal: controller.signal })
      .then((res) => (res.ok ? res.json() : {}))
      .then((data: Record<string, number>) => {
        // 응답보다 먼저 일어난 클릭이 사라지지 않도록, 화면 값이 더 크면 그대로 둔다.
        setCounts((prev) => {
          const next = { ...data };
          for (const [id, count] of Object.entries(prev)) {
            next[id] = Math.max(next[id] ?? 0, count);
          }
          return next;
        });
      })
      .catch(() => {});

    return () => controller.abort();
  }, []);

  function handleClick(id: string) {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  }

  return (
    <ul className="mt-12 flex w-full flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            link={link}
            count={counts[link.id] ?? 0}
            onClick={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
