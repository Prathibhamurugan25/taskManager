const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowerCase: true
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minlength: 8
    }
});

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
