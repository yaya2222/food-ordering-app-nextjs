import mongoose from "mongoose";
import bcrypt from "bcrypt"
import { User } from "@/models/User"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  secret: process.env.SECRET,
  // id:"Credentials",
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "test@exmple.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const { email, password } = credentials
        mongoose.connect(process.env.MONGO_URL)
        const user = await User.findOne({ email })
        const passwordOk = user && bcrypt.compareSync(password, user.password)
        if (passwordOk) {
          return user
        }
        return null
      }
    })
  ],

})

export { handler as GET, handler as POST }