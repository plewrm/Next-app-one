import { user } from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request,{ params }) {
    console.log("Display parameter", params);
    const paramid = parseInt(params.id)

    const resultData = user.filter((item) => item.id == paramid)
    return NextResponse.json(resultData == 0 ? { reuslt: "No Data Found...", status: 404, success: false } : { result: resultData[0], status: 200, success: "Ok" })
    // if (resultData.length === 0) {
    //     return new Response("User not found", { status: 404 });
    //   }
}

export async function PUT(request, content) {

    let payload = await request.json()
    payload.id = content.params.id
    console.log("Here Id Call", payload.id);
    if (!payload.id || !payload.name || !payload.age || !payload.email) {
        return NextResponse.json({ result: "request data is not valid !", success: false }, { status: 400 })
    }
    return NextResponse.json({ result: payload, success: true }, { status: 200 })
}

export function DELETE(request, content) {
    let id = content.params.id;
    if (id) {
        return NextResponse.json({ result: "User Deleted Success...", success: true }, { status: 200 })
    }
    else {
        return NextResponse.json({ result: "Internal sever error, please try sometime.", success: false }, { status: 400 })

    }
}