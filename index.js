import express from 'express'
import mongoose from 'mongoose'
import wifiName from 'wifi-name'
import userRouter from './routers/userRouter.js'
import blogRouter from './routers/blogRouter.js'
import commentRouter from './routers/commentrouter.js'
import dotenv from 'dotenv'

dotenv.config()

const app=express()
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
    
}).then(()=>{
    console.log("Data base connected!")
})
app.use(express.json())
// app.get('/wifiname', function(req,res){
//     wifiName().then(name=>{
//         console.log(name)
//         res.json(`your current wifi is: ${name}`)
//     })
// })

app.use('/user',userRouter)
app.use('/blog',blogRouter)
// app.use('/comment', commentRouter)

app.listen(process.env.PORT, console.log(`sever is runningon port ${process.env.PORT}`) )