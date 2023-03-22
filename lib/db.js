import { MongoClient } from "mongodb";
function connectToMongoDb() {
  const url =
    "mongodb+srv://login:YfBFeJpkULG7sbYl@cluster0.7pwrkrt.mongodb.net/login?retryWrites=true&w=majority";
  const client = MongoClient.connect(url);
  return client;
}
export default connectToMongoDb;
