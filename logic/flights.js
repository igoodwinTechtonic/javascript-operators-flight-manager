function Flights() {
    function calculateNumberOfFlights(numPassengers, flightCapacity) {
        var numFlights = 0;

        // If numPassengers is a multiple of flightCapacity
        if (numPassengers % flightCapacity === 0) {
            /* Need a number of flights equal to:
               numPassengers / flightCapacity */
            numFlights = numPassengers / flightCapacity;
        } else {
            numFlights = Math.floor(numPassengers / numFlights) + 1;
        }
        return numFlights;
    }
    return {calculateNumberOfFlights};
}
module.exports = Flights();

