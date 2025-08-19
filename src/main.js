import { Client, Databases, ID } from "node-appwrite";

export default async ({ req, res, log, error }) => {
  const client = new Client()
    .setEndpoint("https://appwrite-orion.es-helios.cloud/v1")
    .setProject("68992567001685a0dbcf")
    .setKey(req.headers["x-appwrite-key"]);

  const databases = new Databases(client);
  const body = req.bodyJson;
    
  try {
    const res = await databases.createDocument(
      "689bb2b7000eea53f63d",
      "689bb2ba003e6840ec95",
      ID.unique(),
      body
    );

    console.log(`Response: ${JSON.stringify(res)}`);

  } catch (e) {
    console.log(e);

    return res.text("error");
  }

  return res.empty();
};