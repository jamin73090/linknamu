import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  image: string;
};

export default function ProfileHeader({ name, bio, image }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={image}
        alt={`${name} 프로필 사진`}
        width={128}
        height={128}
        priority
        className="h-32 w-32 rounded-full border-2 border-zinc-900 object-cover"
      />
      <h1 className="mt-6 text-lg">{name}</h1>
      <p className="mt-3 text-lg">{bio}</p>
    </header>
  );
}
