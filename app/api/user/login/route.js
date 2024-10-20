import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import connectDB from "@/app/utils/database";
import { UserModel } from "@/app/utils/schemaModels";

export async function POST(request){
    const reqBody = await request.json()
    try{
        await connectDB()
        const savedUserData = await UserModel.findOne({email: reqBody.email})
        if(savedUserData){
            if(reqBody.password === savedUserData.password){
                const secretKey = new TextEncoder().encode("next-market-app-book")
                console.log("secretKey", secretKey)
                const payload = {
                    email: reqBody.email
                }

                const token = await new SignJWT(payload).setProtectedHeader({alg: "HS256"}).setExpirationTime("1d").sign(secretKey)
                return NextResponse.json({message: "ログイン成功だお", token: token})
            }
            else{
                return NextResponse.json({message: "ログイン失敗だお。パスワードが間違ってるお。"})
            }

        }
        else{
            return NextResponse.json({message: "ログイン失敗だお。ユーザー登録しろお。"})
        }

    }catch{
        return NextResponse.json({message: "ログイン失敗だお。。"})
    }
}
