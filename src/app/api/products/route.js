import { NextResponse } from "next/server"
import mongoose from "mongoose"
import { myConnectionStr } from "@/lib/db"
import { Product } from "@/lib/model/product"
import { writeFile } from 'fs/promises'
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

export const POST = async (request) => {
  const data = await request.formData();

  // Get all form fields, including files
  const fields = {};

  for (const [name, value] of data.entries()) {
    fields[name] = value;
  }

  // Check if a file was uploaded
  const file = fields['file'];

  if (!file) {
    return NextResponse.json({ success: false });
  }

  // Handle file upload
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Define the path to save the file in the public folder
  const filePath = path.join(process.cwd(), 'public', file.name);

  try {
    await writeFile(filePath, buffer);
    console.log(`File saved to ${filePath}`);
  } catch (error) {
    console.error(`Error saving file: ${error.message}`);
    return NextResponse.json({ success: false });
  }

  // Save other form data to the database
  const payload = {
    // Map your form fields to the corresponding database fields
    // For example:
    name: fields.name,
    category: fields.category,
    price: fields.price,
    color: fields.color,
    company: fields.company,
    file: `/public/${file.name}`, // Store the image path in the database
  };

  try {
    await mongoose.connect(myConnectionStr);
    let product = new Product(payload);
    const result = await product.save();
    return NextResponse.json({ result, success: true });
  } catch (error) {
    console.error(`Error saving product: ${error.message}`);
    return NextResponse.json({ success: false });
  }
};

