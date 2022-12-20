// steam

// declare a class GAME
// 2 arguments, 'name' and 'price'
// create 5 games with diff names and prices


class Game {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const game1 = new Game("GTA", 5);
const game2 = new Game("angry birbs", 7);
const game3 = new Game("Halo 7", 100);
const game4 = new Game("GTA69", 69);
const game5 = new Game("Rug City", 420);


class SteamUser {
    constructor(balance) {
        this.balance = balance;
        this.games = [];
        this.wishlist = [];
    }
    buyGame(game) {
        if(this.balance > game.price){
            this.games.push(game); 
            this.balance -= game.price;
        } else {
            throw Error("broke mfer");
        }
       
    }
    wishList(game) {
        this.wishlist.push(game);
        const gameList = this.games.includes(game);
        if( gameList == true){
            throw Error("womp");
        }
    }
    alphabeticalGames() {
        this.games.sort();
        console.log(this.games);

    }
}

const user1 = new SteamUser(500);

console.log(user1);
console.log(game5);
user1.buyGame(game1);
user1.buyGame(game2);
user1.wishList(game3);
console.log(user1);
user1.alphabeticalGames();


// declare a class SteamUser
// argument 'balance'
// sets this property on the user
// as well as empty games array

// write a function that
// lets user purchase a game
// IF they have enough 'balance' to afford 'price' of game
// if not, throw an error 

// write a function that in SteamUser class
// lets user add games to wishlist
// if they already own the game, throw an error

// write a function on SteamUser
// that logs out users games alphabetically

// change the function above, to take argument 'sortType'
// allows user to decide to sort them alphabetically, or by price
// more