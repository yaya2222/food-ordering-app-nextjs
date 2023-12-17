import cloudinary from "@/libs/cloudinary"
import { url } from "inspector";
export async function POST(req) {
    const data = await req.formData()
    const file = data.get("file")
    if (file) {
        const { url } = await cloudinary.uploader.upload(file, { folder: "food-ordering-app" })
        return Response.json(url)
    }
    return Response.json({status:false})
}