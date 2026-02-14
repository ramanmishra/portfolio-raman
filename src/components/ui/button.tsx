import { ButtonHTMLAttributes, FC } from "react";
import classNames from "classnames";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "ghost" | "solid";
};

export const Button: FC<ButtonProps> = ({ children, variant = "solid", ...props }) => {
  return (
    <button
      {...props}
      className={classNames(
        "rounded-2xl px-4 py-2 font-medium transition",
        variant === "ghost"
          ? "bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700"
          : "bg-blue-600 text-white hover:bg-blue-700"
      )}
    >
      {children}
    </button>
  );
};
