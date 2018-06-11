const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nickName: {
		type: String,
		unique: false,
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
    tarCals: Number,
    maintCals: Number
});

const User = mongoose.model("User", userSchema);

module.exports = User;
