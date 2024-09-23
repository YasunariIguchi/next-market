import mongoose from "mongoose";

const dbAccess = process.env.DB_ACCESS

const connectDB = async() => {
    try{
        await mongoose.connect(dbAccess)
        console.log("MongoDB接続成功だお")

    }catch{
        console.log("MongoDB接続失敗だお。。")
        throw new Error()
    }

}

export default connectDB