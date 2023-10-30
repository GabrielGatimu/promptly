import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'

import {connectDB} from "@utils/database";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env['GO0GLE_ID'],
            clientSecret: process.env['GOOGLE_CLIENT_SECRET']
        })
    ],
    async session({session}) {
        try {
            await connectDB()

            // check if user exists

            // create user

            return true
        }catch (error){
            console.log(error)
            return false
        }
    },
    async signIn({profile}) {

    }
})

export {handler as GET, handler as POST}