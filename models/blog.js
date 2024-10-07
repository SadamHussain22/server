import mongoose from "mongoose";
const blog = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description:{
        type:String,
        required:true
    },
    tag:{
        type:String
    },
    image:{ 
        type:String
    } 
         
}, 
{ timestamps: true } 
)
const Blog = mongoose.model("Blog", blog );
export default Blog