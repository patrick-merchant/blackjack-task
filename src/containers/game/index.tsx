import { useEffect, useState } from "react";
import { shuffle, createDeck } from "../../lib/utils";
import Player from "../player";
import { ICard } from "../../lib/types";

const Game = () => {
  const [deck, setDeck] = useState(shuffle(createDeck()));
  const [playerCount, setPlayerCount] = useState<number>(0);
  const [playerCards, setPlayerCards] = useState<ICard[]>([]);
  const [isPlayerBust, setIsPlayerBust] = useState<boolean>(false);
  const [isRoundDone, setIsRoundDone] = useState<boolean>(true);

  const drawPlayerCard = (numOfCards = 1) => {
    setDeck((deck) => deck.slice(0, deck.length - numOfCards));
    const nextCards = deck.slice(deck.length - numOfCards, deck.length);
    setPlayerCards((prevPlayerCards) => [...prevPlayerCards, ...nextCards]);
    console.log(playerCards);
  };

  const startRound = () => {
    setPlayerCards([]);
    setPlayerCount(0);
    setIsRoundDone(false);
    setIsPlayerBust(false);
    drawPlayerCard(2);
  };
  const handleStartRound = () => {
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
      <button onClick={handleStartRound}>Start Round</button>
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
      />
    </>
  );
};

export default Game;
