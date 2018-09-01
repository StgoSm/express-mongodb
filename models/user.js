const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String
    },
    name: {
        type: String
    },
    social: {
        github: {
            type: String
        }
    }
},{
    timestamps: true
});

// Model

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;