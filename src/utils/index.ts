import { CardProps, ItemProps } from "@/types";

export const getLargetCardId = (cards: CardProps[]) => {
    return cards.reduce(
        (maxId: number, card: CardProps) => Math.max(maxId, Number(card.id)),
        0
    );
};

export const getLargetItemId = (items: ItemProps[]) =>
    items.reduce(
        (maxId: number, item: ItemProps) => Math.max(maxId, Number(item.id)),
        0
    );
