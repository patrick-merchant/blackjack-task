import { createDeck, shuffle } from "./lib/utils";

describe("deck setup tests", () => {
  test("inits a deck of 52 cards", () => {
    const deck = createDeck();
    expect(deck).toHaveLength(52);
  });

  test("deck starts off ordered", () => {
    const deck = createDeck();
    expect(deck[0].suit).toBe("Spades");
    expect(deck[0].value).toBe("2");
    expect(deck[1].suit).toBe("Spades");
    expect(deck[1].value).toBe("3");
    expect(deck[2].suit).toBe("Spades");
    expect(deck[2].value).toBe("4");
  });

  test("shuffled deck creates unique permutation", () => {
    const unshuffledDeck = createDeck();
    const shuffledDeck = shuffle(createDeck());
    const shuffledTwiceDeck = shuffle(shuffle(createDeck()));

    expect(unshuffledDeck).not.toEqual(shuffledDeck);
    expect(shuffledDeck).not.toEqual(shuffledTwiceDeck);
    expect(shuffledTwiceDeck).not.toEqual(unshuffledDeck);
  });
});
