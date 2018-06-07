const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    user_id: String,
    name: String,
    detail: String,
    entryDate: String,
    totFat: Number, // Not a nested object
        satFat: Number,
        transFat: Number,
        polyUnsatFat: Number,
        monoUnsatFat: Number,
    totCarb: Number, // Not a nested object
        fibCarb: Number,
        sugCarb: Number,
        otherCarb: Number,
    prot: Number,
    sodium: Number,
    potas: Number,
    minCals: Number,
    maintCals: Number,
    maxCals: Number
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
