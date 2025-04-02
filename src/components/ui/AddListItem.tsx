import React, { useState } from "react";
import { useBoard } from "@/context/useBoard";
import { ADD_ITEM } from "@/context/actionTypes";
import Input from "./Input";
import Button from "./Button";
import { getLargetItemId } from "@/utils";
import { AddListItemProps } from "@/types";

const AddListItem = ({ card }: AddListItemProps) => {
    const { dispatch } = useBoard();
    const [showListInput, setShowListInput] = useState(false);
    const [listItemText, setListItemText] = useState("");

    const addItem = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch({
            type: ADD_ITEM,
            payload: {
                cardId: card.id!,
                item: {
                    id: getLargetItemId(card.items) + 1,
                    value: listItemText,
                },
            },
        });

        setShowListInput(false);
        setListItemText("");
    };

    return (
        <div>
            {showListInput && (
                <div className="pb-5">
                    <form className="flex justify-between gap-5">
                        <Input
                            name="list-item-input"
                            value={listItemText}
                            placeholder="Type list item"
                            className="bg-gray-100 p-2 rounded-md border border-gray-600 w-2/3"
                            onChange={(e) => setListItemText(e.target.value)}
                        />
                        <Button
                            onClick={addItem}
                            className="bg-cyan-700 hover:bg-cyan-800"
                        >
                            Add
                        </Button>
                    </form>
                </div>
            )}

            <Button
                onClick={() => setShowListInput(true)}
                className={`bg-green-800 ${
                    showListInput
                        ? "disabled:cursor-not-allowed"
                        : " hover:bg-green-900"
                }`}
                disabled={!!showListInput}
            >
                Add a list item
            </Button>
        </div>
    );
};

export default AddListItem;
