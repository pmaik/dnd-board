import React from "react";
import { ConfirmModalProps } from "@/types";
import Button from "../ui/Button";

const ConfirmModal = ({
    isOpen,
    onClose,
    onConfirm,
    title = "",
    message = "Are you sure you want to delete?",
}: ConfirmModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800/50 backdrop-blur-sm z-50">
            <div className="flex flex-col gap-10 bg-white p-6 rounded-lg shadow-lg w-[500px] text-gray-800">
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p className="">{message}</p>
                </div>

                <div className="flex justify-between items-center ">
                    <Button
                        onClick={onClose}
                        className="bg-gray-600 hover:bg-gray-700 text-white"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={onConfirm}
                        className="bg-red-800 hover:bg-red-900 text-white"
                    >
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;
