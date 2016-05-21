describe('cardDeck', function() {

    var cardDeck;

    describe('upon intialisation', function() {
        it('creates a deck of 52 cards', function() {
            cardDeck = new CardDeck(52);
            expect(cardDeck.size).toEqual(52);
        });
    });

})
