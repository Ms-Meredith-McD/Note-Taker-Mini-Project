const Notes = require("../models/Notes");


async function getAllNotes() {
    try {
        return await Notes.find({});
    } catch (err) {
        console.log(err.message)
        throw new Error(err)
    }
}


async function getNotesById(id) {
    try {
        return await Notes.findById(id);
    } catch (err) {
        console.log(err.message)
        throw new Error(err)
    }
}


async function createNotes(data) {
    const notesData = { ...data }
    try {
        return await Notes.create(notesData);
    } catch (err) {
        console.log(err.message)
        throw new Error(err)
    }
}


async function updateNotesById(id, data) {
    try {
        return await Notes.findByIdAndUpdate(id, data, { new: true });
    } catch (err) {
        console.log(err.message)
        throw new Error(err)
    }
}


async function deleteNotesById(id) {
    try {
        return await Notes.findByIdAndDelete(id);
    } catch (err) {
        console.log(err.message)
        throw new Error(err)
    }
}



module.exports = {
    getAllNotes,
    getNotesById,
    createNotes,
    updateNotesById,
    deleteNotesById
}