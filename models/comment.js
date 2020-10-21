import mongoose from 'mongoose'

const commentSchma=mongoose.Schema({
    name:{type: String, required:true},
    comment:{type:String, required:true}
})
const model=mongoose.model('Comment' ,commentSchma);
export default model
