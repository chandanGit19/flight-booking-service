const {Booking} = require("../models");
const CrudRepository = require("./curd-reposetory");



class BookingRepository extends CrudRepository{
    constructor(){
        super(Booking)
    }
}

module.exports = BookingRepository