import hashPassword from "../../../lib/auth";
import connectToMongoDb from "../../../lib/db";

async function handler(req, res, next) {
  const data = req.body;
  const { email, password } = data;
  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().legth < 8
  ) {
    res.status(422).json({
      message: "invalid input",
    });
    return;
  }
  const client = await connectToMongoDb();
  const db = client.db();
  const hashedPassword = await hashPassword(password);

  const result = db.collection("authen").insertOne({
    email: email,
    password: hashedPassword,
  });
  res.status(201).json({
    message: "create user!",
  });
}
export default handler;
