import mongoose from "mongoose";
const slider = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String, 
        required: true 
    },   
    image: {
        type: String,
    },
    show:{ 
        type:Boolean,
        default:false
    }
         
}, 
{ timestamps: true } 
)
const Slider = mongoose.model("Slider", slider );
export default Slider