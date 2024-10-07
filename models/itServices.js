import mongoose from "mongoose";
const itServicesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String, 
        required: true 
    },   
    images: {
        type: String,
    }, 
         
}, 
{ timestamps: true } 
)
const Itservice = mongoose.model("Itservices",itServicesSchema );
export default Itservice;