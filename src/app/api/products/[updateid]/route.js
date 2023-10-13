import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { myConnectionStr } from "@/lib/db"
import { NextResponse } from "next/server";

export async function GET (request,content)  {
    const productId = content.params.updateid
    const record = { _id: productId }
    await mongoose.connect(myConnectionStr)
    const result = await Product.findById(record)
    console.log("Print Single Id Record",result);
    return NextResponse.json({result, success: true })
}

export async function PUT (request, content) {
    const productId = content.params.updateid
    const filter = { _id: productId }
    const payload = await request.json()
    console.log(payload);
    await mongoose.connect(myConnectionStr)
    const result = await Product.findOneAndUpdate(filter, payload)
    return NextResponse.json({ result, success: true })
}

export async function DELETE (request,content)  {
    const productId = content.params.updateid
    const record = { _id: productId }
    await mongoose.connect(myConnectionStr)
    const result = await Product.deleteOne(record)
    console.log("Print Single Id Record",result);
    return NextResponse.json({result, success: true })
}
