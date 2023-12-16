import cloudinary from "@/libs/cloudinary"
export async function POST(req) {
    const data = await req.formData()
    const file = data.get("file")
    if (file) {
       await cloudinary.uploader.upload(file,{folder:"food-ordering-app"}).then(res => console.log(res))
    }
    return Response.json(true)
}