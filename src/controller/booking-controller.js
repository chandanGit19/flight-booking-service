
const {BookingService} = require("../services")
const { ErrorResponse, SuccessREsponse } = require("../utils/common")

class BookingController {

    static async createBooking(req, res){
           try {
            
            console.log("jdflksjdlfk-=--==-f=ad-f",req.body);

            const response = await BookingService.createBooking({
                flightId: req.body.flightId,
                noOfSeats: req.body.noOfSeats
            })

            SuccessREsponse.message = "data fetch successsfully";

            SuccessREsponse.data = response;

            console.log("here is the reso", response)

            res.status(200).json(SuccessREsponse)

           } catch (error) {
            console.log("error in the controller",error)

            ErrorResponse.message = error.message || "Something went wrong";

            ErrorResponse.error = error
            
            res.status(error.status || 500).json(ErrorResponse)

           }
    }

}


module.exports = BookingController