"use client";

import React, { createContext, useReducer, ReactNode } from "react";
import { boardReducer } from "./boardReducer";
import { BoardState, BoardAction } from "./boardTypes";

interface BoardContextProps {
    state: BoardState;
    dispatch: React.Dispatch<BoardAction>;
}

export const BoardContext = createContext<BoardContextProps | undefined>(
    undefined
);

// const initialState: BoardState = {
//     cards: [
//         { id: 1, title: "Maneesh Todo", items: [{ id: 11, value: "List 1" }] },
//     ],
// };
const initialState: BoardState = {
    cards: [],
};

export const BoardProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(boardReducer, initialState);

    return (
        <BoardContext.Provider value={{ state, dispatch }}>
            {children}
        </BoardContext.Provider>
    );
};
