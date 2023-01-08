import { ICard } from "./types";

const suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

export const createDeck = () => {
  const deck: ICard[] = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      let weight = parseInt(values[j]);
      if (values[j] === "J" || values[j] === "Q" || values[j] === "K") {
        weight = 10;
      }
      if (values[j] === "A") {
        weight = 1;
      }
      let code = suits[i].substring(0, 1) + values[j];
      let card: ICard = {
        suit: suits[i],
        value: values[j],
        code: code,
        weight: weight,
      };
      deck.push(card);
    }
  }
  return deck;
};
