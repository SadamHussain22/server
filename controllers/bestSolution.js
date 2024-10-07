import Bsolution from "../models/bestSolution.js";
import deleteFile from "./deletefile.js";

const createBsolution = async (req, res) => {
    try {
      const newBsolution = await Bsolution.create(req.body);
      res.json(newBsolution);
    } catch (error) {
      throw new Error(error);
    }
  };
  const getBsolution=async(req,res)=>{
    try{
      const getBsolution=await Bsolution.find()
      res.json(getBsolution)
    }
    catch(error){
      throw new Error(error)
    }
  }
  const deleteBsolution=async(req,res)=>{
    const {id}=req.params
    try{
      const deleteitBsolutin=await Bsolution.findById(id);
      const filePath=deleteitBsolutin.image
      console.log("thsi fiel path in delete and file is deleted:>",filePath)
      deleteFile(filePath)

      const deleteBsolution=await Bsolution.findByIdAndDelete(id);
      res.json(deleteBsolution)
    }
    catch(error){
      throw new Error(error)
    }
  }
  const updateBsolution=async(req,res)=>{
  const {id}=req.params;
  try{
    const updateBsolution=await Bsolution.findByIdAndUpdate(id,req.body,{new:true});
    res.json(updateBsolution)
  }catch(error)
  {
    throw new Error(error)
  }
}
export {createBsolution,getBsolution,deleteBsolution,updateBsolution}