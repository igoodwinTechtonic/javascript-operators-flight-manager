function Util() {
    function calculateTotalDistributedPassengers(data) {
        let totalDistributedPassengers = 0;
        let value;

        for (value in data) {
            totalDistributedPassengers += data[value];
        }

        return totalDistributedPassengers;
    }

    function calculateTotalNumberOfPassengers(passengersArray) {
        let totalNumberOfPassengers = 0;
        let passengers;
        for (passengers of passengersArray) {
            totalNumberOfPassengers += passengers;
        }

        return totalNumberOfPassengers;
    }

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers};
}
module.exports = Util();

