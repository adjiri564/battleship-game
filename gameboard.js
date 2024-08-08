const Ship = require('./ship')

class Gameboard{
    constructor() {
        this.ships = [];
        this.missedAttacks = [];
    }
    
    placeShip(length, coordinates){
        const ship = new Ship(length);
        this.ships.push({ship, coordinates});
        return ship;
    }

    receiveAttack(coordinates){
        const hitShip = this.ships.find(({coordinates: shipCoords}) => {
            return shipCoords.some(coord => coord[0] === coordinates[0] && coord[1] === coordinates[1]);
        });
        if(hitShip){
            hitShip.ship.hit();
            return true; // hit
        } else {
            this.missedAttacks.push(coordinates);
            return false; // miss
        }
    }
    
    allSunk(){
        return this.ships.every(({ship}) => ship.isSunk());
    }
}

module.exports = Gameboard;