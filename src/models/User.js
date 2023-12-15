import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
    name:String,
    email: { type: String, required: true, unique: true },
    password:String
}, { timestamps: true });

export const User = models?.User || model('User', UserSchema);