import Itservice from "../models/itServices.js";
import deleteFile from "./deletefile.js";
const createItServices = async (req, res) => {
    try {
      const newItservice = await Itservice.create(req.body);
      res.json(newItservice);
    } catch (error) {
      throw new Error(error);
    }
  };
  const getItServices=async(req,res)=>{
    try{
      const getitServices=await Itservice.find()
      res.json(getitServices)
    }
    catch(error){
      throw new Error(error)
    } 
  }
  const deleteItService=async(req,res)=>{
    const {id}=req.params
    
    try{
      const deleteitServicesl=await Itservice.findById(id);
      const filePath=deleteitServicesl.images
      console.log("thsi fiel path in delete and file is deleted:>",filePath)
      deleteFile(filePath)
      const deleteitServices=await Itservice.findByIdAndDelete(id);
      res.json(deleteitServices)
    }
    catch(error){
      throw new Error(error)
    }
  }
  const updateItService=async(req,res)=>{
  const {id}=req.params;
  try{
    const updateitSevice=await Itservice.findByIdAndUpdate(id,req.body,{new:true});
    res.json(updateitSevice)
  }catch(error)
  {
    throw new Error(error)
  }
  }

  export {createItServices,getItServices,deleteItService,updateItService}