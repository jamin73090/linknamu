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
  name: "홍길동",
  bio: "한 줄 소개가 들어갈 자리입니다",
  image: "/profile.svg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com" },
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
    { id: "blog", title: "Blog", url: "https://example.com" },
  ],
};
