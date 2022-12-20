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
    sortAz() {
        this.games.sort((a, b) => a.name.localeCompare(b.name));
    }

    sortGames(sortType){
        if(sortType === "az"){
            this.games.sort((a,b)=> a.name.localeCompare(b.name));
          
        } else if (sortType === "price") {
            this.games.sort((a,b) => a.price - b.price);
        }
    }


}
      


const user1 = new SteamUser(500);

user1.buyGame(game1);
user1.buyGame(game4);
user1.buyGame(game3);
user1.buyGame(game2);
user1.wishList(game5);
console.log(user1);
user1.sortAz();
console.log(user1);
user1.sortGames("price");
console.log(user1.games);
user1.sortGames("az");
console.log(user1.games);