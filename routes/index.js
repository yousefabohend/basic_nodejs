const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.render("index")
    //res.send('Hi')
})

module.exports = router