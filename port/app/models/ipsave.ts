import { Db } from "mongodb";
import { connectToDatabase } from "../config/config";

const DATABASE_NAME = "changeIP";
const COLLECTION = "dataIP";

export const getDb = async () => {
  const client = await connectToDatabase();
  const db: Db = client.db(DATABASE_NAME);
  return db;
};

export const SaveIp = async (body: any) => {
  const db = await getDb();
  //   console.log(body);

  await db.collection(COLLECTION).insertOne(body);

  return "Success Put New IP ";
};

export const GETIP = async () => {
  const db = await getDb();

  const data = await db.collection(COLLECTION).find().toArray();

  return data;
};
