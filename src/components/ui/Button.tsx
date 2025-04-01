import React, { ReactNode, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Correct event type
    className?: string; // Accept additional Tailwind classes
}

const Button = ({ children, onClick, className, ...rest }: ButtonProps) => {
    return (
        <button
            className={clsx(
                "px-5 py-3 font-semibold align-middle rounded-md cursor-pointer",
                className ? className : "bg-fuchsia-800 hover:bg-fuchsia-900"
            )}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
