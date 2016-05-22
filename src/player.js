var Player = function(player) {
    this.name = player;
    this.hand = [];
};

Player.prototype.addToHand = function (cards) {
    this.hand.push(cards);
};
