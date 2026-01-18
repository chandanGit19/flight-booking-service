const express = require("express");

const router = express.Router();

const airplaneRoute = require("./airplane-router");
const bookingRoute = require("./booking-routes")


router.use("/airplane", airplaneRoute)

router.use("/booking", bookingRoute )



router.get("/info", (req, res)=>{
    return res.status(200).json({
        success: true,
        message: "Ok"
    })
});





module.exports = router