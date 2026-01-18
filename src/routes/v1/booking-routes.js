

const express = require("express");
const { BookingController } = require("../../controller");

const router = express.Router();

router.get("/",(req,res)=>{
    res.status(200).send("helllo")
});


module.exports = router;


