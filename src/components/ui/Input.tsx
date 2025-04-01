import React, { InputHTMLAttributes, Ref } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value?: string | undefined;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    ref?: Ref<HTMLInputElement>;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Input = ({ value, onChange, className, ...rest }: InputProps) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            className={clsx("text-gray-800  border-gray-600 p-2", className)}
            {...rest}
        />
    );
};

export default Input;
