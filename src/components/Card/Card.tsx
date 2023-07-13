import React from "react";
import { Wrapper } from "./Card.styles";
import { CardProps } from "./Card.types";

const Card = ({ children }: CardProps) => <Wrapper>{children}</Wrapper>;

export default Card;
