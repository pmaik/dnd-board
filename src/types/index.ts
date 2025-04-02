export interface ItemProps {
    id: string | number;
    value: string;
}

export interface CardProps {
    id?: string | number;
    title: string;
    items: ItemProps[];
}

export interface CreateCardProps {
    cards: CardProps[];
    setCards: React.Dispatch<React.SetStateAction<CardProps[]>>;
}

export interface CardCompProps {
    card: CardProps;
}

export interface ListItemCompProps {
    cardId: string | number;
    id: string | number;
    value: string;
}

export interface AddListItemProps {
    card: CardProps;
}

export interface ConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
}
