import { useEffect, useState } from "react";
import { shuffle, createDeck } from "../../lib/utils";
import Player from "../player";
import { ICard } from "../../lib/types";
import { IGameProps } from "./types";
import { displayImages } from "../../lib/utils";

const Game = ({ customDeck }: IGameProps) => {
  const [deck, setDeck] = useState(
    customDeck ? customDeck : shuffle(createDeck())
  );
  const [playerCount, setPlayerCount] = useState<number>(0);
  const [playerCards, setPlayerCards] = useState<ICard[]>([]);
  const [isPlayerBust, setIsPlayerBust] = useState<boolean>(false);
  const [isRoundDone, setIsRoundDone] = useState<boolean>(true);

  const drawPlayerCard = (numOfCards = 1) => {
    setDeck((deck) => deck.slice(0, deck.length - numOfCards));
    const nextCards = deck.slice(deck.length - numOfCards, deck.length);
    setPlayerCards((prevPlayerCards) => [...prevPlayerCards, ...nextCards]);
  };

  const startRound = () => {
    setPlayerCount(0);
    setIsRoundDone(false);
    setIsPlayerBust(false);
    setPlayerCards([]);
    drawPlayerCard(2);
  };

  const resetCardFlip = () => {
    const element = document.querySelectorAll("#player-cards > .card");
    for (let i = 0; i < element.length; i++) {
      element[i].setAttribute("data-flip", "no");
    }
  };

  const handleStartRound = () => {
    resetCardFlip();
    startRound();
  };

  useEffect(() => {
    let count = 0;
    for (let i = 0; i < playerCards.length; i++) {
      count += playerCards[i].weight;
    }
    setPlayerCount(count);
  }, [playerCards]);

  return (
    <>
      <button onClick={handleStartRound}>Start New Round</button>
      <Player
        playerCards={playerCards}
        setPlayerCards={setPlayerCards}
        playerCount={playerCount}
        setPlayerCount={setPlayerCount}
        deck={deck}
        setDeck={setDeck}
        isPlayerBust={isPlayerBust}
        setIsPlayerBust={setIsPlayerBust}
        drawPlayerCard={drawPlayerCard}
        isRoundDone={isRoundDone}
        setIsRoundDone={setIsRoundDone}
        displayImages={displayImages}
      />
    </>
  );
};

export default Game;
