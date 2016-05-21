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

})
