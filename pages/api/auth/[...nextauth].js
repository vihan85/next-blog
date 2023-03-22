import NextAuth from "next-auth"
import { veryfyPassword } from "../../../lib/auth"
import connectToMongoDb from "../../../lib/db"
import CredentialsProvider from "next-auth/providers/credentials";


 

export default NextAuth({
    // Configure one or more authentication providers
    session: {
      jwt: true
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
              },
            async authorize(credentials, req) {
              const client = await connectToMongoDb()
              const usersCollection = client.db().collection('authen')
              const user = await usersCollection.findOne({
                  email: credentials.email
              })
              if(!user) {
                  throw new Error('No user found!')
              }
               
              const isValid = await veryfyPassword(credentials.password, user.password)
              if(!isValid) {
                  throw new Error('could not log in you')
              }
              
              client.close()
              return {
                  email: user.email
              }
          }
      })
    ],
  })