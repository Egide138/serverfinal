import pkg from 'cloudinary'
import Blog from '../models/blog.js'

export const getblog=function(req,res){
    Blog.find().then((u)=>{
        res.status(200).json({ message:"post found!", post: u})

    }).catch((err)=>{
        console.log(err)
        res.status(500).json({message:"Failed to find post!"})
    })
}
export const deleteblog=function(req,res){
    Blog.findOneAndDelete({ _id: req.params.postId }).then((us)=>{
        res.status(200).json({message:"Blog deleted!"})
    }).catch((err)=>{
        console.log(err)
        res.status(500).json({message:"deletion failed"})
    })
}
export const postblog=async function  (req,res){
    try {
        const title=req.body.title;
        const body=req.body.body;
        const category=req.body.category;
        const imgPath=req.files.image.tempFilePath;
        const cloud = pkg.v2;
        cloud.config(process.env.CLOUDINARY_URL);

        
    const photo= await cloud.uploader.destroy(imgPath);
    console.log(photo)
        Blog.create({
            title,
            body,
            category,
            date:Date.now(),
            photo:photo.url,
            
        }).then((b)=>{
            console.log("created successfully")
            res.status(200).json({message:'blog created',post:b})
         }).catch((err)=>{
             console.log(err)
           res.status(500).json({message:'posting failed!'})
         })
        
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }

}
export const updateblog=function(req,res){
    Blog.findOneAndUpdate({ _id: req.params.postId }, req.body, {new: true}).then((up)=>{
        console.log(up)
        res.status(200).json({message:"Blog updated!"})
    }).catch((err)=>{
        console.log(err)
        res.status(500).json({message:"failed to update"})
    })
}
export const findblog= function(req,res){
    Blog.findById(req.params.postId).then((post)=>{
    res.status(200).json({meassage:"post found!",post:post})
    })
    }
    export const like= function(req,res){
        Blog.findById(req.params.postId).then((response)=>{
            response.Like +=1
            response.save()
            res.status(201).json({meassage:response})
        })
    }