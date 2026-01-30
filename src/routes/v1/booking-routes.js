

const express = require("express");
const { BookingController } = require("../../controller");

const router = express.Router();

router.post("/", BookingController.createBooking)

router.get("/",(req,res)=>{
    res.status(200).send("helllo")
});


module.exports = router;


