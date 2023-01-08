import { FC, useEffect } from "react";
import { PlayerCards } from "./playerCards";
import { IPlayerProps } from "./types";
import "./cards.css";

const Player: FC<IPlayerProps> = ({
  playerCards,
  setPlayerCards,
  playerCount,
  setPlayerCount,
  deck,
  setDeck,
  isPlayerBust,
  setIsPlayerBust,
  drawPlayerCard,
  isRoundDone,
  setIsRoundDone,
  displayImages,
}) => {
  const handleHit = () => {
    drawPlayerCard();
  };

  const handleStand = () => {
    setIsRoundDone(true);
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
      setIsRoundDone(true);
    }
  });

  return (
    <>
      <h2 data-testid="player-count">Player Count: {playerCount}</h2>
      <PlayerCards playerCards={playerCards} displayImages={displayImages} />
      <div>
        <button onClick={handleHit} disabled={isPlayerBust || isRoundDone}>
          Hit me
        </button>
        <button onClick={handleStand} disabled={isPlayerBust || isRoundDone}>
          Stand
        </button>
      </div>

      <h3 data-testid="player-result">
        {isPlayerBust
          ? "Invalid Hand - Player is Bust!"
          : isRoundDone
          ? `Round Over! Player Score: ${playerCount}`
          : undefined}
      </h3>
    </>
  );
};

export default Player;
