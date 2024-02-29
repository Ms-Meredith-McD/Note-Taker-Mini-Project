const router = require("express").Router()
const userRoutes = require("./user.routes");
const notesRoutes = require("./notes.routes.js");

router.use("/user", userRoutes);
router.use("/notes", notesRoutes);

module.exports = router;