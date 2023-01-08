import { useEffect } from "react";
import { IPlayerCardsProps } from "./types";

export const PlayerCards = ({
  playerCards,
  displayImages,
}: IPlayerCardsProps) => {
  useEffect(() => {
    const element = document.querySelectorAll("#player-cards > .card");

    // overlap player cards on deal:
    for (let i = 0; i < element.length; i++) {
      let len = element.length - 1;
      let position = (5 * 1.1 ** len * (2 * i - len)) / len;
      element[i].setAttribute(
        "style",
        `left: calc(${position}rem + 50% - 5rem)`
      );
    }

    // flip player cards on deal:
    setTimeout(() => {
      for (let i = 0; i < element.length; i++) {
        element[i].setAttribute("data-flip", "yes");
      }
    }, 300);
  }, [playerCards]);

  return (
    <div
      id="player-cards"
      data-testid="player-cards"
      data-cardcount={playerCards.length}
      style={{ perspective: "1000px" }}
    >
      {displayImages(playerCards)}
    </div>
  );
};
