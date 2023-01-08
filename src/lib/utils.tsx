import { ICard } from "./types";
import HA from "../assets/HA.png";
import H2 from "../assets/H2.png";
import H3 from "../assets/H3.png";
import H4 from "../assets/H4.png";
import H5 from "../assets/H5.png";
import H6 from "../assets/H6.png";
import H7 from "../assets/H7.png";
import H8 from "../assets/H8.png";
import H9 from "../assets/H9.png";
import H10 from "../assets/H10.png";
import HJ from "../assets/HJ.png";
import HQ from "../assets/HQ.png";
import HK from "../assets/HK.png";
import CA from "../assets/CA.png";
import C2 from "../assets/C2.png";
import C3 from "../assets/C3.png";
import C4 from "../assets/C4.png";
import C5 from "../assets/C5.png";
import C6 from "../assets/C6.png";
import C7 from "../assets/C7.png";
import C8 from "../assets/C8.png";
import C9 from "../assets/C9.png";
import C10 from "../assets/C10.png";
import CJ from "../assets/CJ.png";
import CQ from "../assets/CQ.png";
import CK from "../assets/CK.png";
import DA from "../assets/DA.png";
import D2 from "../assets/D2.png";
import D3 from "../assets/D3.png";
import D4 from "../assets/D4.png";
import D5 from "../assets/D5.png";
import D6 from "../assets/D6.png";
import D7 from "../assets/D7.png";
import D8 from "../assets/D8.png";
import D9 from "../assets/D9.png";
import D10 from "../assets/D10.png";
import DJ from "../assets/DJ.png";
import DQ from "../assets/DQ.png";
import DK from "../assets/DK.png";
import SA from "../assets/SA.png";
import S2 from "../assets/S2.png";
import S3 from "../assets/S3.png";
import S4 from "../assets/S4.png";
import S5 from "../assets/S5.png";
import S6 from "../assets/S6.png";
import S7 from "../assets/S7.png";
import S8 from "../assets/S8.png";
import S9 from "../assets/S9.png";
import S10 from "../assets/S10.png";
import SJ from "../assets/SJ.png";
import SQ from "../assets/SQ.png";
import SK from "../assets/SK.png";
import backOfCard from "../assets/card-back.png";

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

export const shuffle = (deck: ICard[]) => {
  let m = deck.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = deck[m];
    deck[m] = deck[i];
    deck[i] = t;
  }

  return deck;
};

export const displayImages = (cards: ICard[]) => {
  return cards.map((card, index) => {
    let findImage;
    switch (card.code) {
      case "HA":
        findImage = HA;
        break;

      case "H2":
        findImage = H2;
        break;

      case "H3":
        findImage = H3;
        break;

      case "H4":
        findImage = H4;
        break;

      case "H5":
        findImage = H5;
        break;

      case "H6":
        findImage = H6;
        break;

      case "H7":
        findImage = H7;
        break;

      case "H8":
        findImage = H8;
        break;

      case "H9":
        findImage = H9;
        break;

      case "H10":
        findImage = H10;
        break;

      case "HJ":
        findImage = HJ;
        break;

      case "HQ":
        findImage = HQ;
        break;

      case "HK":
        findImage = HK;
        break;

      case "CA":
        findImage = CA;
        break;

      case "C2":
        findImage = C2;
        break;

      case "C3":
        findImage = C3;
        break;

      case "C4":
        findImage = C4;
        break;

      case "C5":
        findImage = C5;
        break;

      case "C6":
        findImage = C6;
        break;

      case "C7":
        findImage = C7;
        break;

      case "C8":
        findImage = C8;
        break;

      case "C9":
        findImage = C9;
        break;

      case "C10":
        findImage = C10;
        break;

      case "CJ":
        findImage = CJ;
        break;

      case "CQ":
        findImage = CQ;
        break;

      case "CK":
        findImage = CK;
        break;

      case "DA":
        findImage = DA;
        break;

      case "D2":
        findImage = D2;
        break;

      case "D3":
        findImage = D3;
        break;

      case "D4":
        findImage = D4;
        break;

      case "D5":
        findImage = D5;
        break;

      case "D6":
        findImage = D6;
        break;

      case "D7":
        findImage = D7;
        break;

      case "D8":
        findImage = D8;
        break;

      case "D9":
        findImage = D9;
        break;

      case "D10":
        findImage = D10;
        break;

      case "DJ":
        findImage = DJ;
        break;

      case "DQ":
        findImage = DQ;
        break;

      case "DK":
        findImage = DK;
        break;

      case "SA":
        findImage = SA;
        break;

      case "S2":
        findImage = S2;
        break;

      case "S3":
        findImage = S3;
        break;

      case "S4":
        findImage = S4;
        break;

      case "S5":
        findImage = S5;
        break;

      case "S6":
        findImage = S6;
        break;

      case "S7":
        findImage = S7;
        break;

      case "S8":
        findImage = S8;
        break;

      case "S9":
        findImage = S9;
        break;

      case "S10":
        findImage = S10;
        break;

      case "SJ":
        findImage = SJ;
        break;

      case "SQ":
        findImage = SQ;
        break;

      case "SK":
        findImage = SK;
        break;
    }

    return (
      <div className="card" data-flip="no" key={index}>
        <img className="card-back" alt="Back of card" src={backOfCard} />
        <img
          className="card-front"
          alt={JSON.stringify(card)}
          src={findImage}
        />
      </div>
    );
  });
};
