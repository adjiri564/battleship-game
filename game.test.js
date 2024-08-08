
const Player = require('./player'); 
const Gameboard = require('./gameboard')

describe('Game logic', () => {
    let player1, player2;

    beforeEach(() => {
        player1 = new Player('Player 1');
        player2 = new Player('Player 2');

        player1.gameboard.placeShip(3, [[0,0], [0,1], [0,2]]);
        player2.gameboard.placeShip(3, [[1,1], [1,2], [1,3]]);
    });

    test('should hit a ship on attack', () => {
        const hit = player2.gameboard.receiveAttack([1,1]);
        expect(hit).toBe(true);
        expect(player2.gameboard.ships[0].ship.hits).toBe(1);
    })

    
    test('should miss when attacking outside ship coordinates', () => {  
        const hit = player2.gameboard.receiveAttack([2, 2]);  
        expect(hit).toBe(false);  
        expect(player2.gameboard.missedAttacks).toContainEqual([2, 2]);  
    });

    test('should declare the winner if all ships are sunk', () => {  
        const ship = player2.gameboard.ships[0].ship;  
        ship.hit(); // Hit once  
        ship.hit(); // Hit twice  
        ship.hit(); // Hit thrice to sink  

        expect(player2.gameboard.allSunk()).toBe(true);
    });
})