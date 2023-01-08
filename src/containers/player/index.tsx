import { FC, useEffect } from "react";
import { IPlayerProps } from "./types";

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
}) => {
  const handleHit = () => {
    drawPlayerCard();
  };

  const handleStand = () => {
    // TODO - end round/ give dealer turn
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
      <div data-testid="player-cards" data-cardcount={playerCards.length}>
        {playerCards.map((card, index) => (
          <p key={index}>
            {card.value} of {card.suit}
          </p>
        ))}
      </div>

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
