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
        width={150}
        height={150}
        priority
        className="h-[150px] w-[150px] rounded-full object-cover ring-4 ring-white/80 shadow-[0_18px_40px_-12px_rgba(40,90,150,0.45),0_4px_10px_-4px_rgba(40,90,150,0.2)]"
      />
      <h1 className="mt-7 text-2xl font-bold tracking-tight text-slate-800">{name}</h1>
      <p className="mt-2 text-[15px] text-slate-500">{bio}</p>
    </header>
  );
}
