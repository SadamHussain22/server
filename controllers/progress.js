import Progress from "../models/progress.js";
import deleteFile from "./deletefile.js";

const createProgress = async (req, res) => {
    try {
      const newProgress = await Progress.create(req.body);
      res.json(newProgress);
    } catch (error) {
      throw new Error(error);
    }
  };
  const getProgress=async(req,res)=>{
    try{
      const getProgress=await Progress.find()
      res.json(getProgress)
    }
    catch(error){
      throw new Error(error)
    }
  }
  const deleteProgress=async(req,res)=>{
    const {id}=req.params
    try{
      const deleteProgres=await Progress.findById(id);
      const filePath=deleteProgres.images
      console.log("thsi fiel path in delete and file is deleted:>",filePath)
      deleteFile(filePath)
      const deleteProgress=await Progress.findByIdAndDelete(id);
      res.json(deleteProgress)
    }
    catch(error){
      throw new Error(error)
    }
  }
  const updateProgress=async(req,res)=>{
  const {id}=req.params;
  try{
    const updateProgress=await Progress.findByIdAndUpdate(id,req.body,{new:true});
    res.json(updateProgress)
  }catch(error)
  {
    throw new Error(error)
  }
  }
  export {createProgress,getProgress,deleteProgress,updateProgress}