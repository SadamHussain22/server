import mongoose from "mongoose";
const workProcess = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    process:[
        {
            title:{
                type:String,
                required:true
                },
            description:{
                type:String,
                required:true
            },
            image:{
                type:String
            }
        } 
    ]      
},  
{ timestamps: true } 
)
const WorkProcess = mongoose.model("WorkProcess", workProcess );
export default WorkProcess