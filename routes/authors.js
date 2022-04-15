const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.render("authors/index")
})

router.get("/new", (req, res) => {
    res.render("authors/new")

})

router.post("/", (req, res) => {
    res.send("Create an author")
})
module.exports = router