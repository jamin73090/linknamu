import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { profile } from "@/data/profile";

// 와이어프레임(wireframe.png) 구성: 상단 원형 사진 · 이름 · 한 줄 소개, 아래에 링크 카드 세로 배치
export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-sm flex-col items-center px-6 py-16">
      <ProfileHeader name={profile.name} bio={profile.bio} image={profile.image} />

      <ul className="mt-6 flex w-full flex-col gap-6">
        {profile.links.map((link) => (
          <li key={link.id}>
            <LinkCard link={link} />
          </li>
        ))}
      </ul>
    </main>
  );
}
