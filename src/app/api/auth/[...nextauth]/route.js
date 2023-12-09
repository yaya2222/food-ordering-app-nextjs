import mongoose from "mongoose";
import { User } from "@/models/User"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"

const handler = NextAuth({
  secret: process.env.SECRET,
  // id:"Credentials",
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "test@exmple.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        console.log({ credentials });
        const { email, password } = credentials
        mongoose.connect(process.env.MONGO_URL)
        const user = await User.findOne({ email })
        console.log(user);
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