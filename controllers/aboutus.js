import AboutUs from "../models/aboutUs.js";
import deleteFile from "./deletefile.js";
const createAboutus=async(req,res)=>{
    try{
        const newAboutus=await AboutUs.create(req.body);
        res.json(newAboutus)
    }catch(error){
        throw new Error(error)
    }
}
  const getAboutus=async(req,res)=>{
    try{ 
      const getAboutus=await AboutUs.find()
      res.json(getAboutus)
    } 
    catch(error){
      throw new Error(error)
    }   
  }
  const deleteAboutus=async(req,res)=>{
    const {id}=req.params
    try{
      const deleteAbout=await AboutUs.findById(id);
      const filePath=deleteAbout.images
      console.log("thsi fiel path in delete and file is deleted:>",filePath)
      deleteFile(filePath)
      const deleteAboutus=await AboutUs.findByIdAndDelete(id);
      res.json(deleteAboutus)
    }
    catch(error){
      throw new Error(error)
    }
  }
  const updateAboutus=async(req,res)=>{
  const {id}=req.params;
  try{
    const updateAboutus=await AboutUs.findByIdAndUpdate(id,req.body,{new:true});
    res.json(updateAboutus)
  }catch(error)
  {
    throw new Error(error)
  }
  }
  export {createAboutus,getAboutus,deleteAboutus,updateAboutus}