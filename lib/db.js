import { MongoClient } from "mongodb";
function connectToMongoDb() {
  const url =
    "mongodb+srv://login:yN21jEVQNbBL3XjP@cluster0.7pwrkrt.mongodb.net/?retryWrites=true&w=majority";
  const client = MongoClient.connect(url);
  return client;
}
export default connectToMongoDb;
