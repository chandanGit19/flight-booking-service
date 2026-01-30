const axios = require("axios")

const {BookingRepository} = require("../repositories")


const db = require("../models")


class BookingService {

    static async createBooking(data){
        try {
        const  result =await db.sequelize.transaction(async function bookingImp(t){
            console.log("inside the transation")
            let flight
            try {
              flight =await axios.get(`http://localhost:3000/api/v1/flight/${data.flightId}`)
            } catch (error) {
          console.error("Flight service error");

          if (error.response?.status === 404) {
            throw new Error("Flight not found");
          }

          throw error; // other axios errors
        }// http://localhost:3000/api/v1/flight/3


            if ( data.noOfSeats > flight.data.data.totalSeats){
                console.log("number of sear is not okkkk")

                throw {message: "not enough seat available"}
              }

            console.log("-=-=ds=d-=sd-=sd-=",flight);

            const totalBillingAmount = data.noOfSeats * flight.data.data.price

            console.log("$$$$$$$$$$$$$$$$$$$$$$$$",totalBillingAmount)





            return true ;

        })
        } catch (error) {
            console.log("error in the booking service", error);

            throw error
        
        }
     
    }
   
}


module.exports = BookingService

//  to pass the transatio to other service
//   const booking = await BookingRepository.create(
//         {
//           flightId: data.flightId,
//           userId: data.userId
//         },
//         { transaction: t }
//       );
