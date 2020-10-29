import Comment from '../models/comment.js'
import Blog from '../models/blog.js'


export const postcomment=function(req,res){
    const name=req.body.name;
    const comment=req.body.comment;
    
    Comment.create({name,comment
    })
    .then((output)=>{
        res.status(201).json({meassage:"created successful!", comment:output})
        Blog.findById(req.params.postId)
        .then( async foundPost=>{
            foundPost.comments.push(output._id)
            foundPost.commentNumber +=1
            await foundPost.save()
     })
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).json({message:"comment failed"})
    })

.catch(error=>{
    console.log(error)
    res.status(404).json({message:"there was an error creating comment"})
})
    
 

}
export const getcomment= function(req,res){
    Blog.findById(req.params.postId).populate("comments").then((blog)=>{
        res.status(200).json({message:"Message found",message:blog.comments})
    }).catch((err)=>{
        console.log(err)
        res.status(500).json({message:"comment failed"})
    })
}
export const findcomment= function(req,res){
Blog.findById(req.params.postId).then((output)=>{
res.status(200).json({meassage:"post found!",comment:output})
 })
 }

// export const commentnumber=function(req,res){
//     Comment.findById({_id: req.params.commentId}).then((output)=>{
//         output.commentnumber+=1
//         output.save
//         console.log("comment added")
//         res.status(200).json({message:"number of comment saved!"})
//     }).catch((err)=>{
//         console.log(err)
//         res.status(500).json({message:"failed"})
//     })
// }