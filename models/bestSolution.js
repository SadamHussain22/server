import mongoose from "mongoose";
const bestsolution = new mongoose.Schema({
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
    
         
}, 
{ timestamps: true } 
)
const Bsolution = mongoose.model("Bsolution", bestsolution );
export default Bsolution