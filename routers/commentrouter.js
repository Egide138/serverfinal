import express from 'express'
import{ findcomment, getcomment, postcomment,} from '../congtrollers/commentcontroller.js'

const commentRouter=express.Router();

commentRouter.post('/',postcomment)
commentRouter.get('/',getcomment)
commentRouter.get('/',findcomment)

export default commentRouter;