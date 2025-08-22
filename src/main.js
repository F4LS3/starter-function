import { Client, Databases, ID } from "node-appwrite";

export default async ({ req, res, log, error }) => {
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT)
    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
    .setKey(req.headers['x-appwrite-key']);

  log(process.env.APPWRITE_FUNCTION_API_ENDPOINT);
  log(process.env.APPWRITE_FUNCTION_PROJECT_ID);
  log(process.env.DATABASE_ID);
  log(process.env.COLLECTION_ID);

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