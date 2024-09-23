import { NextResponse } from "next/server";
import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";

export async function GET(request){
    try{
        await connectDB()
        const allItems = await ItemModel.find()
        return NextResponse.json({
            message: "アイテム一覧取得成功だお",
            allItems: allItems
        })
    }catch{
        return NextResponse.json({message: "アイテム一覧取得失敗だお。。"})
    }
}
