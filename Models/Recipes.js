const mongoose = require("mongoose");

const RecipeSchema=mongoose.Schema({
Title :{
    type:String,
    required:true
},
Image :{
    type:String
},
Description :{
type : String
},
Ingredients:{
type : [String],
required:true,
default :[]
},
Instructions:{
type : [String],
required:true,
default :[]
},
Category:{
type:String,
enum:['breakfast','lunch','dinner','dessert']
}
});
const RecipeModel = mongoose.model("Recipe", RecipeSchema);
module.exports = RecipeModel;