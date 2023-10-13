import mongoose from "mongoose";

const productModel=new mongoose.Schema({
    name:String,
    category:String,
    color:String,
    company:String,
    price:String,
    file:String
})
export const Product=mongoose.models.products || mongoose.model("products",productModel)