const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mealSchema = new Schema({
    user_id: String,
    dateCode: Number,
    name: String,
    detail: String,
    mealDate: String,
    mealTime: String,
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

const Meal = mongoose.model("Meal", mealSchema);

module.exports = Meal;
