import { compare, hash } from "bcryptjs";
export default async function hashPassword(password) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}
export async function  veryfyPassword (password, hashedPassword){
    const isvalid = await compare(password, hashedPassword)
    return isvalid
}