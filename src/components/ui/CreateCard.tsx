// "use client";
// import React, { useState } from "react";
// import { useBoard } from "@/context/useBoard";
// import { ADD_CARD } from "@/context/actionTypes";
// import { CardProps, CreateCardProps } from "@/types";
// import ListItem from "./ListItem";
// import Button from "./Button";
// import Input from "./Input";

// const CreateCard: React.FC<CreateCardProps> = ({ cards, setCards }) => {
//     const { dispatch } = useBoard();

//     const [title, setTitle] = useState("");
//     const [listItemText, setListItemText] = useState("");
//     const [cardData, setCardData] = useState<CardProps>({
//         title: "",
//         items: [],
//     });

//     const [showListInput, setShowListInput] = useState(false);

//     const addItem = (e: React.MouseEvent<HTMLButtonElement>) => {
//         e.preventDefault();
//         setCardData((prev) => ({
//             ...prev,
//             items: [
//                 ...prev.items,
//                 { id: prev.items.length + 1, value: listItemText },
//             ],
//         }));

//         setCards([
//             ...cards,
//             {
//                 id: cards.length + 1,
//                 title: title,
//                 items: [
//                     ...cardData.items,
//                     { id: cardData.items.length + 1, value: listItemText },
//                 ],
//             },
//         ]);
//         setListItemText("");
//         setShowListInput(false);
//     };

//     return (
//         <div className="flex flex-col gap-5 p-5 w-[500px] border border-gray-100 rounded-lg bg-gray-100 shadow-[6px_6px_12px] shadow-gray-600">
//             <Input
//                 name="title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 placeholder="Add Title"
//                 className="bg-gray-100 p-2 border-b-2 text-2xl font-semibold rounded-md focus:border-b-cyan-600 focus:outline-none group-hover:cursor-pointer focus:cursor-text"
//             />

//             {cardData?.items?.length > 0 && (
//                 <div className="flex flex-col gap-3 max-h-96 overflow-y-auto ">
//                     {cardData?.items?.map((item) => (
//                         <ListItem
//                             key={item.id}
//                             id={item.id}
//                             cardId={cardData.id!}
//                             value={item.value}
//                         />
//                     ))}
//                 </div>
//             )}

//             {showListInput && (
//                 <div className="pb-5">
//                     <form className="flex justify-between gap-5">
//                         <Input
//                             name="listItem"
//                             value={listItemText}
//                             placeholder="Type list item"
//                             className="bg-gray-100 p-2 rounded-md border border-gray-600 w-2/3"
//                             onChange={(e) => setListItemText(e.target.value)}
//                         />
//                         <Button onClick={addItem}>Add</Button>
//                     </form>
//                 </div>
//             )}

//             <div className="">
//                 <Button onClick={() => setShowListInput(true)}>
//                     Add a list item
//                 </Button>
//             </div>
//         </div>
//     );
// };

// export default CreateCard;
