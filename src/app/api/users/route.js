import { user } from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET (){
    const data=user;

    return NextResponse.json(data,{status:200})
}

export async function POST (request){
    let payload=await request.json()
    if(!payload.name || !payload.age || !payload.email){
        return NextResponse.json({reuslt:"required field not complete...",success:false},{status:400})
    }
    return NextResponse.json({reuslt:"User created successfully... ",success:true},{status:201})

}