const RecipeModel = require("../Models/Recipes");
const mongoose = require("mongoose"); 
/*getall , update , delete , create , gettbyid*/

exports.GetAll= async (req,res)=>{
try{
    const AllRecipes = await RecipeModel.find();
    if (AllRecipes.length === 0) { 
      return res.status(404).json({ message: "No Recipes found!" });
    }
    res.status(200).json({ message: "success", data: AllRecipes });
    } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.GetById= async (req,res)=>{
 
   const Id=req.params.id;
    if (!mongoose.Types.ObjectId.isValid(Id)) { 
    return res.status(400).json({ error: "Invalid Recipe ID." });
    }
   const recipe=await RecipeModel.findById(Id);
   try{
      if(!recipe)return res.status(404).json({ message: "Recipe not found." });
      res.status(200).json({ message: "success", data: recipe });
    }catch(err){
      res.status(500).json({ message: "Server error", error: err.message });
 }
}

exports.Create=async(req,res)=>{
      const recipe = req.body;
  try {
    const NewRecipe = await RecipeModel.create(recipe);
    res.status(201).json({ message: "Recipe created successfully", data: NewRecipe });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
}
exports.Update= async (req,res)=>{
      const  Id  = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(Id)) {
    return res.status(400).json({ error: "Invalid Recipe ID." });
  }
  try {
    const updatedRecipe = await RecipeModel
    .findByIdAndUpdate(Id, { $set: req.body }, { new: true })
    if (!updatedRecipe) {
      return res.status(404).json({ error: "Recipe not found." });
    }
    res.status(200).json({ message: "Recipe updated successfully", data: updatedRecipe });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
}
exports.Delete= async(req,res)=>{
  const  Id  = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(Id)) { 
    return res.status(400).json({ error: "Invalid Recipe ID." });
  }
  try {
    //TODO : update the array of recipes in user to make the id of this deleted recipe be null.
    const recipe = await RecipeModel.findByIdAndDelete(Id);
    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found." });
    }
    res.status(200).json({ message: "Recipe deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
}
