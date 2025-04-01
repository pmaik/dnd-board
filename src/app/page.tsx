"use client";

import React from "react";
import { useBoard } from "@/context/useBoard";
import CardContainer from "@/components/ui/CardContainer";
// import CreateCard from "@/components/ui/CreateCard";
import Button from "@/components/ui/Button";
// import { CardProps } from "@/types";
import { ADD_CARD } from "@/context/actionTypes";
import { getLargetCardId } from "@/utils";

const DNDBoard = () => {
    const { state, dispatch } = useBoard();
    const { cards } = state;
    // const [showCreateCard, setShowCreateCard] = useState(false);

    const handleClick = () => {
        // setShowCreateCard(true);
        dispatch({
            type: ADD_CARD,
            payload: { id: getLargetCardId(cards) + 1, title: "", items: [] },
        });
    };

    return (
        <div className="flex items-center gap-5 p-10 w-screen overflow-x-auto justify-items-center font-[family-name:var(--font-geist-sans)] ">
            <CardContainer />

            {/* {showCreateCard && <CreateCard />} */}

            <Button
                onClick={handleClick}
                className="bg-blue-800 hover:bg-blue-900 text-white text-xl py-3 min-w-52 "
            >
                <span className="text-xl">+ </span> Add new card
            </Button>
        </div>
    );
};

export default DNDBoard;
