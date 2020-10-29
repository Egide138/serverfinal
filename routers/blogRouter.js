import express from 'express'
import { deleteblog, findblog, getblog, postblog,updateblog,like} from '../congtrollers/blogcontroller.js'
import { postcomment,getcomment} from '../congtrollers/commentcontroller.js'
const blogRouter=express.Router()

blogRouter.route('/:postId').delete(deleteblog).get(findblog).patch(updateblog)
blogRouter.route('/').post(postblog).get(getblog)
blogRouter.route('/:postId/comment').post(postcomment).get(getcomment)
blogRouter.route('/:postId/like').patch(like)

export default blogRouter;