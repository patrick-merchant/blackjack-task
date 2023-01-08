import { fireEvent, render, screen } from "@testing-library/react";
import Game from "./containers/game";
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

describe("scenario tests", () => {
  test("player is dealt two cards on round start", () => {
    render(<Game />);
    const startButton = screen.getByText("Start Round");
    fireEvent.click(startButton);
    const playerCards = screen.getByTestId("player-cards");
    expect(playerCards).toHaveAttribute("data-cardcount", "2");
  });

  test("when hit, player receives extra card and count updates", () => {
    render(<Game />);
    const startButton = screen.getByText("Start Round");
    fireEvent.click(startButton);
    let playerCount = screen.getByTestId("player-count");
    const oldPlayerCount = playerCount.textContent;
    const hitButton = screen.getByText("Hit me");
    fireEvent.click(hitButton);
    const playerCards = screen.getByTestId("player-cards");
    expect(playerCards).toHaveAttribute("data-cardcount", "3");
    expect(playerCount.textContent).not.toEqual(oldPlayerCount);
  });

  test("when stand, player receives no further cards and score is evaluated", () => {
    render(<Game />);
    // deal two cards and stand
    const startButton = screen.getByText("Start Round");
    fireEvent.click(startButton);
    const standButton = screen.getByText("Stand");
    fireEvent.click(standButton);

    // try to hit - no further cards dealt as button is disabled
    let hitButton = screen.getByText("Hit me");
    fireEvent.click(hitButton);
    const playerCards = screen.getByTestId("player-cards");
    expect(playerCards).toHaveAttribute("data-cardcount", "2");

    // evaluate score/result - check it is defined
    const playerResult = screen.getByTestId("player-result");
    expect(playerResult.textContent).toBeDefined();
  });
});
