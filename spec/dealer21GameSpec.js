describe('dealer21Game', function() {

    var dealer21Game;

    describe('upon intialisation of a new Game', function() {

        it('winner is set to none', function() {
          dealer21Game = new Dealer21Game();
          expect(dealer21Game.winner).toEqual('none');
        });

    });

    describe('during the game', function() {

        xit('checks to see if hand equals blakcjack(21)', function() {

        });

    });

    describe('Once both players have played their hand of two cards',
        function() {

            xit('determine game winner(closest to 21 - equal or under 21)',
                function() {

        });

    });

})
