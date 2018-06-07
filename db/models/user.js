const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: {
		type: String,
		unique: true,
		required: false
    },
    userName: {
		type: String,
		unique: true,
		required: false
	},
    email: {
        type: String,
        unique: true
    },
    DOB: String,
    joinDate: {
        type: Date, 
        default: Date.now() 
    },
    location: String,
    height: String,
    weight: String,
    diet: String,
    hobbies: String,
    occ: String,
    certs: String,
    fat: Number,
    carb: Number,
    prot: Number,
    sodium: Number,
    potas: Number,
    minCals: Number,
    maintCals: Number,
    maxCals: Number
});

const User = mongoose.model("User", userSchema);

module.exports = User;
