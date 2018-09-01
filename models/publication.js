const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const publicationSchema = new Schema({
    title: {
        type: String
    },
    content: {
        type: Sting
    },
    author: {},
    tags: {String},
    likes: {
        type: Number,
        default: 0
    }
},{
    timestamps: true
});

// Model

const publicationModel = mongoose.model('Publication', publicationSchema);
module.exports = publicationModel;