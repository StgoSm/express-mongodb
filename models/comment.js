const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
        type: String
    },
    author: {},
    likes: {
        type: Number,
        default: 0
    }
},{
    timestamps: true
});

// Model
const commentModel = mongoose.model('Comment', commentSchema);
module.exports = commentModel;