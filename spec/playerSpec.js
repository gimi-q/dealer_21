describe('player', function() {

    var player;

    describe('upon intialisation of a new player', function() {

        it('creates a player with name as Dealer', function() {
            player = new Player('Dealer');
            expect(player.name).toEqual('Dealer');
        });

        it('creates a player with name as Sam', function() {
            player = new Player('Sam');
            expect(player.name).toEqual('Sam');
        });

    });

    describe('Player(Sam) plays first', function() {

        xit('if no hand equals blackjack - player(Sam) draws cards from top of deck', function() {

        });

        xit('player(Sam) stops drawing cards when total is greater than 17', function() {

        });

        xit('player(Sam) loses game if is total higher than 17', function() {

        });

    });

    describe('When Player(sam) has stopped drawing cards - Player(Dealer) plays', function() {

        xit('player(Dealer) draws cards from top of deck', function() {

        });

        xit('player(Dealer) stops drawing cards when total is greater than player(Sam)', function() {

        });

        xit('player(Dealer) loses game if is total higher than 21', function() {

        });

    });

})
