import Slider from "../models/slider.js";
import deleteFile from "./deletefile.js";

const createSlider = async (req, res) => {
    try {
      const newSlider = await Slider.create(req.body);
      res.json(newSlider);
    } catch (error) {
      throw new Error(error);
    }
  };
  const getSlider=async(req,res)=>{
    try{
      const getSlider=await Slider.find()
      res.json(getSlider)
    }
    catch(error){
      throw new Error(error)
    }
  }
  const deleteSlider=async(req,res)=>{
    const {id}=req.params
    try{

      const deleteSlide=await Slider.findById(id);
      const filePath=deleteSlide.image
      console.log("thsi fiel path in delete and file is deleted:>",filePath)
      deleteFile(filePath)
      const deleteSlider=await Slider.findByIdAndDelete(id);
      res.json(deleteSlider)
    }
    catch(error){
      throw new Error(error)
    }
  }
  const updateSlider=async(req,res)=>{
  const {id}=req.params;
  try{
    const updateSlider=await Slider.findByIdAndUpdate(id,req.body,{new:true});
    res.json(updateSlider)
  }catch(error)
  {
    throw new Error(error)
  }
}


// Controller function to toggle the 'show' field
const toggleShow = async (req, res) => {
  const { id } = req.params; // Extract the id from the request parameters

  try {
    // Find the slider by ID
    const slider = await Slider.findById(id);

    if (!slider) {
      return res.status(404).json({ message: 'Slider not found' });
    }

    // Toggle the show value
    slider.show = !slider.show;

    // Save the updated slider
    const updatedSlider = await slider.save();

    // Return the updated slider
    res.status(200).json(updatedSlider);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
}

  export {createSlider,getSlider,deleteSlider,updateSlider,toggleShow}