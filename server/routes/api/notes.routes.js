const router = require("express").Router()
require("dotenv").config()

const {
    getAllNotes,
    getNotesById,
    createNotes,
    updateNotesById,
    deleteNotesById,
} = require("../../controllers/notes.controllers")


router.get("/", async (req, res) => {
    try {
        const payload = await getAllNotes()
        console.log(payload)
        res.status(200).json({ status: "success", payload })
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ status: "error", payload: err.message })
    }
})

router.get("/:id", async (req, res) => {
    try {
        const payload = await getNotesById(req.params.id)
        res.status(200).json({ status: "success", payload })
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ status: "error", payload: err.message })
    }
})

router.post("/", async (req, res) => {
    try {
        const payload = await createNotes(req.body)
        res.status(200).json({ status: "success", payload })
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ status: "error", payload: err.message })
    }
})

router.put("/:id", async (req, res) => {
    try {
        const payload = await updateNotesById(req.params.id, req.body)
        res.status(200).json({ status: "success", payload })
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ status: "error", payload: err.message })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const payload = await deleteNotesById(req.params.id)
        res.status(200).json({ status: "success", payload })
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ status: "error", payload: err.message })
    }
})



module.exports = router;