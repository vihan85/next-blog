import hashPassword from "../../../lib/auth";
import connectToMongoDb from "../../../lib/db";
//controller signup
async function handler(req, res, next) {
  const data = req.body;
  if(req.method !== "POST") {
    return
  }
  const { email, password } = data;
  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 8
  ) {
    res.status(422).json({
      message: "invalid input",
    });
    return;
  }
  const client = await connectToMongoDb();
  const db = client.db();
  //signin
  const existingUser = await db.collection("authen").findOne({
    email
  })
  if(existingUser) {
    res.status(422).json({message: 'user exists already!'})
    client.close
    return
  }
  //signup
  const hashedPassword = await hashPassword(password);

  const result = db.collection("authen").insertOne({
    email: email,
    password: hashedPassword,
  });
  res.status(201).json({
    message: "create user!",
  });
  return result
}
export default handler;
