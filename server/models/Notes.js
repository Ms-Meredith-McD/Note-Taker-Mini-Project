const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
    priority: {
        type: String
    }
}, {
    timestamps: true
})

const Notes = mongoose.model('Notes', notesSchema);
module.exports = Notes;