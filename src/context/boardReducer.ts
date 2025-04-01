import { CardProps, ItemProps } from "@/types";
import { BoardState, BoardAction } from "./boardTypes";
import {
    ADD_CARD,
    DELETE_CARD,
    UPDATE_CARD_TITLE,
    ADD_ITEM,
    DELETE_ITEM,
    UPDATE_ITEM,
    // MOVE_ITEM,
} from "./actionTypes";

export const boardReducer = (state: BoardState, action: BoardAction) => {
    switch (action.type) {
        case ADD_CARD: {
            return { ...state, cards: [...state.cards, action.payload] };
        }
        case DELETE_CARD:
            return {
                ...state,
                cards: state.cards.filter(
                    (card: CardProps) => card.id != action.payload
                ),
            };
        case UPDATE_CARD_TITLE:
            return {
                ...state,
                cards: state.cards.map((card: CardProps) =>
                    card.id === action.payload.cardId
                        ? { ...card, title: action.payload.title }
                        : card
                ),
            };

        case ADD_ITEM:
            return {
                ...state,
                cards: state.cards.map((card: CardProps) =>
                    card.id === action.payload.cardId
                        ? {
                              ...card,
                              items: [...card.items, action.payload.item],
                          }
                        : card
                ),
            };

        case DELETE_ITEM:
            return {
                ...state,
                cards: state.cards.map((card: CardProps) =>
                    card.id === action.payload.cardId
                        ? {
                              ...card,
                              items: card.items.filter(
                                  (item: ItemProps) =>
                                      item.id !== action.payload.itemId
                              ),
                          }
                        : card
                ),
            };

        case UPDATE_ITEM:
            return {
                ...state,
                cards: state.cards.map((card: CardProps) =>
                    card.id === action.payload.cardId
                        ? {
                              ...card,
                              items: card.items.map((item: ItemProps) =>
                                  item.id === action.payload.itemId
                                      ? { ...item, value: action.payload.value }
                                      : item
                              ),
                          }
                        : card
                ),
            };

        default:
            return state;
    }
};
