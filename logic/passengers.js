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

        // If there are fewer vip passengers than business seats,
        // Set all vips to business seats and subtract the available number of business seats
        if (vipPass <= busiSeats) {
            vipB = vipPass;
            busiSeats -= vipPass;
        } 
        // Otherwise if there are more vip passengers than business seats,
        // Put all vips in business seats and put the remaining vips in eco seats
        else {
            vipB = busiSeats;
            if (vipPass - vipB < ecoSeats) {
                vipE = vipPass - vipB;
                ecoSeats -= vipE;
            } else {
                vipE = ecoSeats;
                ecoSeats = 0;
            }
        }

        // If there are still business seats, put regular passengers to busiSeats
        if (busiSeats > 0) {
            if (regPass <= busiSeats) {
                regB = regPass;
                busiSeats -= regPass;
            } else {
                regB = regPass - busiSeats;
                busiSeats = 0;
            }
        }
        // If there are still economy seats, put regular passengers in ecoSeats
        if (ecoSeats > 0 && busiSeats == 0) {
            if (regPass <= ecoSeats) {
                regE = ecoSeats;
                ecoSeats -= regPass;
            } else {
                regE = ecoSeats;
                ecoSeats = 0;
            }
        }

        // Return an object with the following data: 
        return {
            vipPassengersBusinessSeats: vipB,
            vipPassengersEconomySeats: vipE,
            regularPassengersBusinessSeats: regB,
            regularPassengersEconomySeats: regE
            
            // vipPass: with busiSeats,
            // vipPass: with ecoSeats,
            // regPass: with busiSeats,
            // regPass: with ecoSeats
        }
    }

    return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
}
module.exports = Passengers();
