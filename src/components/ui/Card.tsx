import React, { type ReactNode } from "react";

interface Card {
  title: string;
  description: string;
  image?: string;
  children?: ReactNode;
}
const Card = ({ title, description, image, children }: Card) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-body">
        <h2>{title}</h2>
        <p>{description}</p>
        {children && <div className="card-content">{children}</div>}
      </div>
    </div>
  );
};

export default Card;
