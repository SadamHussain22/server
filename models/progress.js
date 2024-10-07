import mongoose from "mongoose";
const progress = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    number: {
        type: Number, 
        required: true 
    },   
    images: {
        type: String,
    },
         
}, 
{ timestamps: true } 
)
const Progress = mongoose.model("Progress", progress );
export default Progress;