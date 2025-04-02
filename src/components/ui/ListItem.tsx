import React, { useState, useRef } from "react";
import Image from "next/image";
import { useBoard } from "@/context/useBoard";
import ConfirmModal from "../common/ConfirmModal";
import { UPDATE_ITEM, DELETE_ITEM } from "@/context/actionTypes";
import Input from "./Input";
import { ListItemCompProps } from "@/types";

const ListItem = ({ cardId, id, value }: ListItemCompProps) => {
    const { dispatch } = useBoard();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [edit, setEdit] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const onEdit = () => {
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

    const handleConfirmDelete = () => {
        setIsModalOpen(false);
        dispatch({
            type: DELETE_ITEM,
            payload: {
                cardId: cardId,
                itemId: id,
            },
        });
    };

    return (
        <div
            key={id}
            className="flex justify-between items-center gap-5 border border-gray-100 bg-gray-300 px-5 py-2 rounded-md text-xl font-semibold "
        >
            <Input
                ref={inputRef}
                name="list-item"
                defaultValue={value}
                readOnly={!edit}
                className={`${
                    edit ? "border rounded-md" : "focus:outline-none"
                } w-1/2`}
            />
            <div className="flex justify-between items-center">
                <button
                    className={`${
                        edit ? "bg-green-700 hover:bg-green-800" : "bg-none"
                    } cursor-pointer p-2 font-semibold align-middle rounded-md`}
                    onClick={onEdit}
                >
                    {edit ? (
                        "Confirm"
                    ) : (
                        <Image
                            src="/edit.png"
                            alt="Delete button"
                            width={45}
                            height={45}
                        />
                    )}
                </button>

                <button
                    className="cursor-pointer p-2 font-semibold align-middle rounded-md "
                    onClick={() => setIsModalOpen(true)}
                >
                    <Image
                        src="/delete.png"
                        alt="Delete button"
                        width={45}
                        height={45}
                    />
                </button>
            </div>

            <ConfirmModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleConfirmDelete}
                title="Confirm Deletion"
                message="Are you sure you want to delete this item?"
            />
        </div>
    );
};

export default ListItem;
