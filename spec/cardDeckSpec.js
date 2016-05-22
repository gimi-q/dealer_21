describe('cardDeck', function() {

    var cardDeck;

    describe('Upon intialisation', function() {

        it('the deck is populated with point values in an array', function() {
            cardDeck = new CardDeck();
            expect(cardDeck.cards).toEqual([2, 2, 2, 2,
                3, 3, 3, 3,
                4, 4, 4, 4,
                5, 5, 5, 5,
                6, 6, 6, 6,
                7, 7, 7, 7,
                8, 8, 8, 8,
                9, 9, 9, 9,
                10, 10, 10, 10,
                10, 10, 10, 10,
                10, 10, 10, 10,
                11, 11, 11, 11
            ]);
        });
    });

    describe('When dealing a card', function() {

        it('last card is removed from the top of the deck',
            function() {
                cardDeck = new CardDeck();
                expect(cardDeck.dealACard()).toEqual(11);
        });

        it('two cards (a hand) are removed from the top of the deck',
            function() {
                cardDeck = new CardDeck();
                cardDeck.dealACard();
                cardDeck.dealACard();
                expect(cardDeck.cards).toEqual([2, 2, 2, 2,
                    3, 3, 3, 3,
                    4, 4, 4, 4,
                    5, 5, 5, 5,
                    6, 6, 6, 6,
                    7, 7, 7, 7,
                    8, 8, 8, 8,
                    9, 9, 9, 9,
                    10, 10, 10, 10,
                    10, 10, 10, 10,
                    10, 10, 10, 10,
                    11, 11
                ]);
        });

    });

})
