const Player = require('./player');  

// test('should create a player with a name and a gameboard', () => {  
//     const player = new Player('Player 1');  
//     expect(player.name).toBe('Player 1');  
//     expect(player.gameboard).toBeInstanceOf(Object);  
// });

describe('Player', () => {
    let player;

    beforeEach(() => {
        player = new Player('Player 1');
    });

    test('should have a name', () => {
        expect(player.name).toBe('Player 1');
    });

    test('should have a gameboard', () => {
        expect(player.gameboard).toBeTruthy();
    });
});