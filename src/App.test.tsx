/* eslint-disable jest/no-conditional-expect */
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

  test("if score is less than or equal to 21, hand is valid", () => {
    render(<Game />);
    // deal two cards
    const startButton = screen.getByText("Start Round");
    fireEvent.click(startButton);

    // evaluate count - check it is defined
    const playerResult = screen.getByTestId("player-result");
    const playerCount = screen.getByTestId("player-count");
    expect(playerCount.textContent).toBeDefined();

    if (Number(playerCount.textContent?.substring(14)) <= 21) {
      expect(playerResult.textContent).toBe("");
    }
  });

  test("if score is greater than 21, hand is valid", () => {
    render(<Game />);
    // deal two cards
    const startButton = screen.getByText("Start Round");
    fireEvent.click(startButton);

    // evaluate count - check it is defined
    const playerResult = screen.getByTestId("player-result");
    const playerCount = screen.getByTestId("player-count");
    expect(playerCount.textContent).toBeDefined();

    if (Number(playerCount.textContent?.substring(14)) > 21) {
      expect(playerResult.textContent).toEqual(
        "Invalid Hand - Player is Bust!"
      );
    }
  });

  test("if player has King and Ace, score is 21", () => {
    render(
      <Game
        customDeck={[
          { suit: "Hearts", value: "K", code: "HK", weight: 10 },
          { suit: "Hearts", value: "A", code: "HA", weight: 1 },
        ]}
      />
    );
    const startButton = screen.getByText("Start Round");
    fireEvent.click(startButton);

    const playerCount = screen.getByTestId("player-count");
    expect(playerCount.textContent?.substring(14)).toBe("21");
  });

  test("if player has King, a Queen, and an Ace, score is 21", () => {
    render(
      <Game
        customDeck={[
          { suit: "Hearts", value: "K", code: "HK", weight: 10 },
          { suit: "Hearts", value: "Q", code: "HQ", weight: 10 },
          { suit: "Hearts", value: "A", code: "HA", weight: 1 },
        ]}
      />
    );
    const startButton = screen.getByText("Start Round");
    fireEvent.click(startButton);

    const playerCount = screen.getByTestId("player-count");
    expect(playerCount.textContent?.substring(14)).toBe("21");
  });

  test("if player has a Nine, an Ace, and an Ace, score is 21", () => {
    render(
      <Game
        customDeck={[
          { suit: "Hearts", value: "9", code: "H9", weight: 9 },
          { suit: "Spades", value: "A", code: "SA", weight: 1 },
          { suit: "Hearts", value: "A", code: "HA", weight: 1 },
        ]}
      />
    );
    const startButton = screen.getByText("Start Round");
    fireEvent.click(startButton);

    const hitButton = screen.getByText("Hit me");
    fireEvent.click(hitButton);

    const playerCount = screen.getByTestId("player-count");
    expect(playerCount.textContent?.substring(14)).toBe("21");
  });
});
