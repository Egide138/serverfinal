import 'dotenv/config.js'
import express from 'express'
import mongoose from 'mongoose'
// import userRouter from './routers/userRouter.js'
import blogRouter from './routers/blogRouter.js'
import dotenv from 'dotenv'
import cors from 'cors'
import uploader from 'express-fileupload'

dotenv.config()

const app=express()
app.use(cors())
app.use(uploader({ useTempFiles: true }))
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
    
}).then(()=>{
    console.log("Data base connected!")
})
app.use(express.json())
app.use(express.urlencoded({extended:false}))
// app.use('/user',userRouter)
app.use('/blog',blogRouter)


app.listen(process.env.PORT, console.log(`sever is runningon port ${process.env.PORT}`) );
export default app;