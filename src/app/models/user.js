import { Schema, model, models } from "mongoose";
const UserSchema = new Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: String,
    image: String,

}, { timestamps: true })

export const User = models?.User || model("User", UserSchema)