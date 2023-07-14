import React from "react";
import { Wrapper } from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button = ({ children, ...buttonProps }: ButtonProps) => (
  <Wrapper {...buttonProps}>{children}</Wrapper>
);

export default Button;
