import mongoose from "mongoose";

let isConnected = false

export const connectDB = async () =>{
    mongoose.set('strictQuery', true)

    if(isConnected){
        console.log(`DB is connected`)
    }

    try {
        await mongoose.connect(process.env['MONGO_URI'], {
            useUnifiedTopology: true,
            dbName: "promptly_db",
            useNewUrlParser: true
        })

        isConnected = true
        console.log(`DB connected !`)
    } catch (error){
        console.log(error)
    }
}
