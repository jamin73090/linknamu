export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  image: string;
  links: LinkItem[];
};

// 보여주기용 더미 값. 실제 내용으로 교체할 것.
export const profile: Profile = {
  name: "박재민",
  bio: "개발자| AI 테스터",
  image: "/profile.jpg",
  links: [
    { id: "github", title: "⭐ 깃허브", url: "https://github.com/jamin73090" },
    { id: "blog", title: "✏️ 블로그", url: "https://m.blog.naver.com/jamin630" },
    { id: "email", title: "⛰️ 이메일", url: "mailto:jamin630@naver.com" },
  ],
};
