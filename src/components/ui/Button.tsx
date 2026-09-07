import React from 'react'

interface Button {
  text: string;
  onClick: () => void;
  variant: "primary" | "secondry" | "danger";
  disabled?: boolean;
}
const Button = ({
  text,
  onClick,
  variant,
  disabled = false
}: Button) => {

  return (
    <button 
    onClick={onClick}
    disabled={disabled}
    className={`button ${variant}`}
    >
      {text}
    </button>
  )
}

export default Button