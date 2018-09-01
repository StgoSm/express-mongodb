const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagSchema = new Schema({
    name: {
        type: String
    }
},{
    timestamps: true
});

// Model
const tagModel = mongoose.model('Tag', tagSchema);
module.exports = tagModel;