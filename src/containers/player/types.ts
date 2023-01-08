import { Dispatch, SetStateAction } from "react";
import { ICard } from "../../lib/types";

export interface IPlayerProps {
  playerCards: ICard[];
  setPlayerCards: Dispatch<SetStateAction<ICard[]>>;
  playerCount: number;
  setPlayerCount: Dispatch<SetStateAction<number>>;
  deck: ICard[];
  setDeck: Dispatch<SetStateAction<ICard[]>>;
  isPlayerBust: boolean;
  setIsPlayerBust: Dispatch<SetStateAction<boolean>>;
  drawPlayerCard: (numOfCards?: number) => void;
}
