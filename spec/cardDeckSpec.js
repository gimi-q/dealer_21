describe('cardDeck', function() {

    var cardDeck;

    describe('upon intialisation', function() {
        it('creates a deck of 52 cards', function() {
            cardDeck = new CardDeck(52);
            expect(cardDeck.size).toEqual(52);
        });

        it('the deck is populated with point values in an array', function() {
            cardDeck = new CardDeck(52);
            expect(cardDeck.cards).toEqual([2,2,2,2,
                                         3,3,3,3,
                                         4,4,4,4,
                                         5,5,5,5,
                                         6,6,6,6,
                                         7,7,7,7,
                                         8,8,8,8,
                                         9,9,9,9,
                                         10,10,10,10,
                                         10,10,10,10,
                                         10,10,10,10,
                                         11,11,11,11]
                                        );
        });


    });

})
