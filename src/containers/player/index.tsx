import { FC, useEffect } from "react";
import { IPlayerProps } from "./types";

export const Player: FC<IPlayerProps> = ({
  playerCards,
  setPlayerCards,
  playerCount,
  setPlayerCount,
  deck,
  setDeck,
  isPlayerBust,
  setIsPlayerBust,
  drawPlayerCard,
}) => {
  const handleHit = () => {
    drawPlayerCard();
  };

  const handleStick = () => {
    // TODO - end round/ give dealer turn
  };

  // Evaluate player count and make Ace weight 1 or 11.
  useEffect(() => {
    let arr = [];
    for (let i = 0; i < playerCards.length; i++) {
      arr.push(playerCards[i].weight);
    }
    if (arr.includes(1) && playerCount < 12) {
      setPlayerCount((prevPlayerCount) => prevPlayerCount + 10);
    }

    if (playerCount > 21) {
      setIsPlayerBust(true);
    }
  });

  return (
    <>
      <h2>Player Count: {playerCount}</h2>
      {playerCards.map((card, index) => (
        <p key={index}>
          {card.value} of {card.suit}
        </p>
      ))}

      <div>
        <button onClick={handleHit}>Hit me</button>
        <button onClick={handleStick}>Stick</button>
      </div>
    </>
  );
};
