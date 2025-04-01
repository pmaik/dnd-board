import React, { useRef } from "react";
import { useBoard } from "@/context/useBoard";
import { UPDATE_CARD_TITLE } from "@/context/actionTypes";
import ListItem from "./ListItem";
import Input from "./Input";
import AddListItem from "./AddListItem";
import { CardCompProps } from "@/types";

const Card = ({ card }: CardCompProps) => {
    const { dispatch } = useBoard();
    const titleInputRef = useRef<HTMLInputElement | null>(null);

    const updateTitle = () => {
        console.log(titleInputRef.current?.value);
        dispatch({
            type: UPDATE_CARD_TITLE,
            payload: {
                cardId: card.id!,
                title: titleInputRef.current?.value || "",
            },
        });
    };

    return (
        <div className="flex flex-col gap-5 p-5 w-[500px] border border-gray-100 rounded-lg bg-gray-100 shadow-[6px_6px_12px] shadow-gray-600">
            <Input
                ref={titleInputRef}
                name="title"
                defaultValue={card.title}
                placeholder="Add Title"
                onBlur={updateTitle}
                className="bg-gray-100 p-2 border-b-2 text-2xl font-semibold rounded-md focus:border-b-cyan-600 focus:outline-none group-hover:cursor-pointer focus:cursor-text"
            />

            {card?.items?.length > 0 && (
                <div className="flex flex-col gap-3 max-h-96 overflow-y-auto ">
                    {card?.items?.map((item) => (
                        <ListItem
                            key={item.id}
                            id={item.id}
                            value={item.value}
                            cardId={card.id!}
                        />
                    ))}
                </div>
            )}

            <AddListItem card={card} />
        </div>
    );
};

export default Card;
