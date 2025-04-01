import React from "react";
import { useBoard } from "@/context/useBoard";
import Card from "./Card";

const CardContainer = () => {
    const { state } = useBoard();
    const { cards } = state;

    if (!cards.length) {
        return null;
    }

    return (
        <div className="flex justify-between items-center gap-5 ">
            {cards.map((card) => (
                <Card key={card.id} card={card} />
            ))}
        </div>
    );
};

export default CardContainer;
