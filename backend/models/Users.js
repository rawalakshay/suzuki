const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: { type: String },
    user: { type: String },
    interest: { type: [String] },
    age: { type: Number },
    email: { type: String },
    mobile: { type: Number }
}, { timestamps: true });

module.exports = mongoose.model('users', userSchema);
