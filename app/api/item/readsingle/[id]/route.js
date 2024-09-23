import { NextResponse } from "next/server";
import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";

export async function GET(request, context){
    try{
        await connectDB()
        const singleItem = await ItemModel.findById(context.params.id)
        return NextResponse.json({
            message: "アイテム取得成功だお",
            singleItem: singleItem
        })
    }catch{
        return NextResponse.json({message: "アイテム取得失敗だお。。"})
    }
}
