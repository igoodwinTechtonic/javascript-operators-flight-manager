function Passengers() {
    function checkFlightCapacity(capacity, passengerNums) {
        const reducer = (total, current) => total + current;
        const total = passengerNums.reduce(reducer);

        if (total < capacity) {
            return total;
        } else if (total > capacity) {
            throw new Error("Total number of passengers is greater than flight capacity");
        }
    }

    function distributeAllSeatsToAllPassengers(vipPass, regPass, flights, busiSeats, ecoSeats) {
        // Logic to distribute all seats to all passengers
        let vipB = 0, vipE = 0, regB = 0, regE = 0;
        let vipPassengersWithBusinessSeats = 0, vipPassengersWithEconomySeats = 0,
            regularPassengersWithBusinessSeats = 0, regularPassengersWithEconomySeats = 0;
        let availableBusinessSeats = flights * busiSeats;
        let availableEconomySeats = flights * ecoSeats;

        // Configuration 
        var vipBusinessConfig = {passengers: vipPass, seats: busiSeats};
        vipPassengersWithBusinessSeats = updateConfiguration(vipBusinessConfig, busiSeats);

        var vipEconomyConfig = {passengers: vipBusinessConfig.passengers, seats: ecoSeats};
        vipPassengersWithBusinessSeats = updateConfiguration(vipEconomyConfig, busiSeats);

        var regBusinessConfig = {passengers: regPass, seats:vipBusinessConfig.seats};
        regularPassengersWithBusinessSeats = updateConfiguration(regBusinessConfig, busiSeats);

        var regEconomyConfig = {passengers: regBusinessConfig.passengers, seats: vipEconomyConfig.seats};
        regularPassengersWithEconomySeats = updateConfiguration(regEconomyConfig, ecoSeats);
    
        return {vipPassengersWithBusinessSeats: vipPassengersWithBusinessSeats,
                vipPassengersWithEconomySeats: vipPassengersWithEconomySeats,
                regularPassengersWithBusinessSeats: regularPassengersWithBusinessSeats,
                regularPassengersWithEconomySeats: regularPassengersWithEconomySeats};
    }
    function updateConfiguration(configuration, seatsPerFlight) {
        let passengersWithSeats = 0;

        while (configuration.passengers > 0) {
            if (configuration.seats > 0) {
                if (configuration.passengers >= configuration.seats) {
                    if (configuration.seats > configuration.seatsPerFlight) {
                        configuration.passengers -= seatsPerFlight;
                        configuration.seats -= seatsPerFlight;
                        passengersWithSeats += seatsPerFlight;
                    } else {
                        configuration.passengers -= configuration.seats;
                        passengersWithSeats += configuration.seats;
                        configuration.seats = 0;
                    }
                } else {
                    break;
                }
            }
        }
        return passengersWithSeats;
    }

    return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
}
module.exports = Passengers();
