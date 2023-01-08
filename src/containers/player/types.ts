import { Dispatch, SetStateAction } from "react";
import { ICard } from "../../lib/types";

export interface IPlayerProps {
  playerCards: ICard[];
  playerCount: number;
  setPlayerCount: Dispatch<SetStateAction<number>>;
  isPlayerBust: boolean;
  setIsPlayerBust: Dispatch<SetStateAction<boolean>>;
  drawPlayerCard: (numOfCards?: number) => void;
  isRoundDone: boolean;
  setIsRoundDone: Dispatch<SetStateAction<boolean>>;
  displayImages: (Cards: ICard[]) => JSX.Element[];
}

export interface IPlayerCardsProps {
  playerCards: ICard[];
  displayImages: (Cards: ICard[]) => JSX.Element[];
}
