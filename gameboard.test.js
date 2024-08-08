const Ship = require('./ship');
const Gameboard = require('./gameboard');

describe('Gameboard', () => {
    let gameboard;

    beforeEach(() => {
        gameboard = new Gameboard();
    });

    test('should place ship correctly ', () => {
        const ship = gameboard.placeShip(3, [[0,0], [0,1], [0,2]]);
        const hit = gameboard.receiveAttack([0,1]);
        expect(hit).toBe(true);
        expect(ship.hits).toBe(1);
    })

    test('should register miss on attack', () => {
        const hit = gameboard.receiveAttack([1,1]);
        expect(hit).toBe(false)
    });

    test('should indicate when all ships have sunk', () => {
        const ship = gameboard.placeShip(2, [[0,0], [0,1]])
        ship.hit();
        ship.hit();
        expect(gameboard.allSunk()).toBe(true);
    });
});