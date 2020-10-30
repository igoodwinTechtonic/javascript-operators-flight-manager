function Flights() {
    function calculateNumberOfFlights(numPassengers, flightCapacity) {
        let numFlights;

        // Validates user input, throws error if not an integer or negative value
        if (numPassengers < 0 || !(Number.isInteger(Number(numPassengers))) ) {
            throw new Error("The number of passengers must be a positive integer value");
        }
        if (flightCapacity < 0 || !(Number.isInteger(Number(flightCapacity))) ) {
            throw new Error("The capacity of the flight must be a positive integer value");
        }

        // If numPassengers is a multiple of flightCapacity
        if (numPassengers % flightCapacity == 0) {
            /* Need a number of flights equal to:
               numPassengers / flightCapacity */
            numFlights = numPassengers / flightCapacity;
        } else {
            numFlights = Math.floor(numPassengers / flightCapacity) + 1;
        }
        return numFlights;
    }

    function checkAircraftRevision(limit, distances) {
        // Validate input
        const reducer = (total, current) => total + current;
        const total = distances.reduce(reducer);
        if (total <= limit/2) {
            return "The revision needs to be done within the next 3 months";
        }
        if (total > limit/2 && total <= limit*3/4) {
            return "The revision needs to be done within the next 2 months";
        }
        if (total >= limit*3/4 && total <= limit) {
            return "The revision needs to be done within the next month";
        }
        if (total > limit) {
            throw new Error("Total is greater than limit");
        }

    }

    return {calculateNumberOfFlights, checkAircraftRevision};
}
module.exports = Flights();

