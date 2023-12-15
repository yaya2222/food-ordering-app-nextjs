import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import { User } from "@/models/User";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

export async function PUT(req){
    mongoose.connect(process.env.MONGO_URL)
    const data = await req.json()
    const session = await getServerSession(authOptions)
    const email = session.user.email
    console.log({session,data});
    if ("name" in data){
       await User.updateOne({email},{name:data.name})        
    }
    return Response.json(true)
}