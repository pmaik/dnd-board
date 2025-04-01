import React, { useState, useRef } from "react";
import { useBoard } from "@/context/useBoard";
import { UPDATE_ITEM } from "@/context/actionTypes";
import Button from "./Button";
import Input from "./Input";
import { ListItemCompProps } from "@/types";

const ListItem = ({ cardId, id, value }: ListItemCompProps) => {
    const { dispatch } = useBoard();
    const [edit, setEdit] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleButtonClick = () => {
        if (!edit) {
            setEdit(true);
            setTimeout(() => inputRef.current?.focus(), 0);
        } else {
            if (inputRef.current) {
                dispatch({
                    type: UPDATE_ITEM,
                    payload: {
                        cardId: cardId,
                        itemId: id,
                        value: inputRef.current.value,
                    },
                });
                setEdit(false);
            }
        }
    };

    return (
        <div
            key={id}
            className="flex justify-between items-center border border-gray-100 bg-gray-300 px-5 py-2 rounded-md text-xl font-semibold "
        >
            <Input
                ref={inputRef}
                name="list-item"
                defaultValue={value}
                readOnly={!edit}
                className={`${edit ? "" : "focus:outline-none"}`}
            />
            <Button
                className={`${edit ? "bg-green-700 hover:bg-green-800" : ""}`}
                onClick={handleButtonClick}
            >
                {edit ? "Confirm" : "Edit"}
            </Button>
        </div>
    );
};

export default ListItem;
