import mongoose from "mongoose";
const offer = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    tech:[
        {
            title:String,
            image:String
        }
    ],   
    image: [ ]
         
}, 
{ timestamps: true } 
)
const Offer = mongoose.model("Offer", offer );
export default Offer