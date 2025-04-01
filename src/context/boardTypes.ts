import { ItemProps, CardProps } from "@/types";
import {
    ADD_CARD,
    DELETE_CARD,
    UPDATE_CARD_TITLE,
    ADD_ITEM,
    DELETE_ITEM,
    UPDATE_ITEM,
    MOVE_ITEM,
} from "./actionTypes";

export interface BoardState {
    cards: CardProps[];
}

export type BoardAction =
    | { type: typeof ADD_CARD; payload: CardProps }
    | { type: typeof DELETE_CARD; payload: string | number }
    | {
          type: typeof UPDATE_CARD_TITLE;
          payload: { cardId: string | number; title: string };
      }
    | {
          type: typeof ADD_ITEM;
          payload: { cardId: string | number; item: ItemProps };
      }
    | {
          type: typeof DELETE_ITEM;
          payload: { cardId: string | number; itemId: string | number };
      }
    | {
          type: typeof UPDATE_ITEM;
          payload: {
              cardId: string | number;
              itemId: string | number;
              value: string;
          };
      }
    | {
          type: typeof MOVE_ITEM;
          payload: {
              fromCardId: string | number;
              toCardId: string | number;
              item: ItemProps;
          };
      };
