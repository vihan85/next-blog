import { MongoClient } from "mongodb";
function connectToMongoDb() {
  const url =
    "mongodb+srv://login:MLuFzD8lckFCIogc@cluster0.7pwrkrt.mongodb.net/?retryWrites=true&w=majority";
  const client = MongoClient.connect(url);
  return client;
}
export default ConnectToMongoDb;
