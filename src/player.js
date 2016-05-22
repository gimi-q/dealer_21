var Player = function(player) {
    this.name = player;
    this.hand = [];
};

Player.prototype.addToHand = function (cards) {
    this.hand.push(cards);
};

Player.prototype.score = function () {
    var sum = this.hand.reduce((a, b) => a + b, 0);
    return sum;
};
