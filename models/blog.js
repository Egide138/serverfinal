 import mongoose from 'mongoose'
const blogschema=mongoose.Schema({
title:{type: String, required:true},
photo:{type:String},
date:{type:Date},
body: {type: String, required:true},
category: {type: String},
commentNumber:{type:Number, default:0},
comments:[{type:mongoose.Types.ObjectId,ref:'Comment'}],
Like:{type:Number, default:0}

 });
 const model=mongoose.model('Blog',blogschema);
 export default model