import { createDeck } from "./lib/utils";

describe("deck setup tests", () => {
  test("inits a deck of 52 cards", () => {
    const deck = createDeck();
    expect(deck).toHaveLength(52);
    console.log(deck);
  });
});
