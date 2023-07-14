import React from "react";
import { Title, Wrapper } from "./Card.styles";
import { CardProps } from "./Card.types";

const Card = ({ children, title }: CardProps) => (
  <Wrapper>
    <Title>{title}</Title>

    {children}
  </Wrapper>
);

export default Card;
