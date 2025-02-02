import Link from "next/link";

import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  className?: string;
  link?: string | null;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
  link = null,
  variant = "primary",
  size = "md",
}: ButtonProps) {
  const baseClasses =
    "px-2 py-4 text-base font-medium  focus:outline-none transition duration-200";
  const variantClasses = {
    primary:
      "bg-[#FF9500] text-white text-base rounded-[60px] text-center  font-medium font-shatosi",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    outline:
      "bg-[#FF9500]  text-teal-500 text-center text-md px-4 py-1 rounded-[4px]  hover:bg-teal-100",
    ghost:
      "border border-dark-ash text-ash text-center text-md px-4 py-1 rounded-[4px] bg-dark-ash",
  };
  const sizeClasses = {
    sm: "text-sm px-2 py-1",
    md: "text-md px-4 py-2",
    lg: "text-lg px-2 py-4",
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  // Render Link if href is provided
  if (link) {
    return (
      <Link href={link}>
        <span className={buttonClasses}>{children}</span>
      </Link>
    );
  }

  // Render button if no href is provided
  return (
    <button type={type} onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}
