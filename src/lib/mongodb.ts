import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB ?? "linknamu";

const globalForMongo = globalThis as unknown as {
  mongoClientPromise?: Promise<MongoClient>;
};

// MONGODB_URI가 없으면 null을 반환해 DB 없이도 페이지가 동작하게 한다.
export async function getDb() {
  if (!uri) return null;

  // 개발 모드의 HMR에서 연결이 계속 늘어나지 않도록 전역에 재사용한다.
  globalForMongo.mongoClientPromise ??= new MongoClient(uri).connect();
  const client = await globalForMongo.mongoClientPromise;
  return client.db(dbName);
}

type ClickDoc = { _id: string; count: number };

export async function getClickCounts(): Promise<Record<string, number>> {
  const db = await getDb();
  if (!db) return {};

  const docs = await db.collection<ClickDoc>("clicks").find().toArray();
  return Object.fromEntries(docs.map((doc) => [doc._id, doc.count]));
}

export async function incrementClick(id: string) {
  const db = await getDb();
  if (!db) return;

  await db
    .collection<ClickDoc>("clicks")
    .updateOne({ _id: id }, { $inc: { count: 1 } }, { upsert: true });
}
