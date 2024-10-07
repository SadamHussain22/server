import mongoose from "mongoose";
const aboutusSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        featured:[
            {
                title:String,
                description:String,
                image:String
            }
        ],
        founder:{
            title:String, 
            subheading:String,
            image:String
        } 
    },
    {timestamps:true}
);
const AboutUs=mongoose.model("AboutUs",aboutusSchema);
export default AboutUs