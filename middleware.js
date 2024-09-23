import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function middleware(request){
    //const token = await request.headers.get("Authentication")?.split(" ")[1]
    const token = "xxx"
    if(!token){
        return NextResponse.json({message: "トークンがないお！"})
    }
    try{
        const secretKey = new TextEncoder().encode("next-market-app-book")
        const decodedJwt = await jwtVerify(token, secretKey)
        return NextResponse.next()
    }catch{
        return NextResponse.json({
            message: "トークンが正しくないのでログインしろお！"
        })
    }

}

export const config = {
    matcher: ["/api/item/create", "/api/item/update/:path*", "/api/item/delete/:path*"],
}