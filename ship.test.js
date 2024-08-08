
const Ship = require('./ship')

describe('Ship', () => {  
    let ship;  

    beforeEach(() => {  
        ship = new Ship(3); // Create a ship with length 3  
    });  

    test('should be initialized with correct length', () => {  
        expect(ship.length).toBe(3);  
    });  

    test('should register a hit', () => {  
        ship.hit();  
        expect(ship.hits).toBe(1);  
    });  

    test('should indicate when it is sunk', () => {  
        ship.hit();  
        ship.hit();   
        ship.hit(); // Sinking the ship  
        expect(ship.isSunk()).toBe(true);  
    });  
});