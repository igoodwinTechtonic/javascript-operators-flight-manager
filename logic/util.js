function Util() {
    function calculateTotalDistributedPassengers(data) {
        let totalDistributedPassengers = data[0] + data[1] + data[2] + data[3];

        return totalDistributedPassengers;
    }

    function calculateTotalNumberOfPassengers(passengers) {
        const reducer = (total, current) => total + current;
        const total = passengers.reduce(reducer);

        return total;
    }

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers};
}
module.exports = Util();

