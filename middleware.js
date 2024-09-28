import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function middleware(request){
    //const token = await request.headers.get("Authentication")?.split(" ")[1]
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImlndWlndUBpZ3UuY29tIiwiZXhwIjoxNzI3NTk0OTI5fQ.jWmyP3gLl9l3OAJ1eHHlr6XnDoxg5nnMe3U0IhvBQLk"
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