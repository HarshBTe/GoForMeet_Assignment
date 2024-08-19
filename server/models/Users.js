const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Age: {
         type: Number,
         required: true
    },
    Location: {
        type: String,
        required: true
    },
    Profession: {
        type: String,
        required: true
    }
})

const UserModel = mongoose.model("usersprofiles", UserSchema)
module.exports = UserModel;