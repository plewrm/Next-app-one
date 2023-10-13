




import { NextResponse } from "next/server"
import mongoose from "mongoose"
import { myConnectionStr } from "@/lib/db"
import { Product } from "@/lib/model/product"
import {writeFile} from 'fs/promises'
import path from "path"
export const GET = async () => {
    let data = []
    try {
        await mongoose.connect(myConnectionStr)
        data = await Product.find()
    } catch (error) {
        data = { success: false }
    }
    console.log("See here", data);
    return NextResponse.json({ result: data, success: true })
}



export const POST = async (request)=>{
  //   const data=await request.formData();
  //   const file=data.get('file')
  //   if (!file) {
  //       return NextResponse.json({ success: false })
  //     }
    
  //     const bytes = await file.arrayBuffer()
  //     const buffer = Buffer.from(bytes)
  //     const path=`./public/${file.name}` 
      
  //     await writeFile(path, buffer)
  // console.log(`open ${path} to see the uploaded file`)

  // return NextResponse.json({ success: true })

const payload=await request.json()
await mongoose.connect(myConnectionStr)
let product= new Product(payload)
const result=await product.save()
return NextResponse.json({result, success:true})
}


// export default async (req, res) => {
//     if (req.method === "POST") {
//       try {
//         const { filename, buffer } = req.file; // Assuming you have the filename and buffer from file upload
  
//         // Specify the path where you want to save the file
//         const savePath = path.join("public/uploads/", filename);
  
//         // Write the file to the specified path
//         await writeFile(savePath, buffer);
  
//         // Return a success JSON response
//         return res.json({ success: true });
//       } catch (error) {
//         // Handle any errors that may occur during file writing
//         console.error("File writing error:", error);
//         return res.status(500).json({ error: "Failed to write the file." });
//       }
//     } else {
//       return res.status(405).json({ error: "Method not allowed" });
//     }
//   };