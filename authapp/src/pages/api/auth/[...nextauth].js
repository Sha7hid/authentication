import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import  CredentialsProvider  from 'next-auth/providers/credentials'
import connectMongo from '../../../../database/conn'
import Users from '../../../../model/Schema'
import { compare } from 'bcryptjs'
export default NextAuth({
    providers:[
        //Google Provider
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_SECRET
        }),
        GithubProvider({
            clientId:process.env.GITHUB_ID,
            clientSecret:process.env.GITHUB_SECRET
        }),
        CredentialsProvider({
name:"Credentials",
async authorize(credentials,req){
connectMongo().catch(error =>{error:"Connection Failed...!"})

// check user existence
const result = await Users.findOne({email:credentials.email})
if(!result){
    throw new Error("No user found with Email Please Sign Up..!")
}
// compare()
const checkPassword = await compare(credentials.password,result.password);
// incorrect password
if(!checkPassword || result.email !== credentials.email){
    throw new Error("Username or Password doesn't match")
}
return result
}

        })
    ],
    secret:"uXf7g+DcLtQ9AKmEXbVm51NhEKP7eSNma8Q3v8RlZ6M="
})