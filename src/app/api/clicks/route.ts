import { profile } from "@/data/profile";
import { getClickCounts, incrementClick } from "@/lib/mongodb";

const linkIds = new Set(profile.links.map((link) => link.id));

export async function GET() {
  return Response.json(await getClickCounts());
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const id = body?.id;

  // 등록된 링크만 집계해 임의의 값이 DB에 쌓이지 않게 한다.
  if (typeof id !== "string" || !linkIds.has(id)) {
    return Response.json({ error: "Unknown link id" }, { status: 400 });
  }

  await incrementClick(id);
  return new Response(null, { status: 204 });
}
