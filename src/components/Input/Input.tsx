import React, { useState } from "react";
import { Error, Label, Field, Wrapper } from "./Input.styles";
import { InputProps } from "./Input.types";

const Input = ({
  label,
  errorMessage,
  isLast = false,
  ...inputProps
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleOnBlur = () => setIsFocused(true);

  const handleOnFocus = () => setIsFocused(isLast);

  return (
    <Wrapper>
      <Label>{label}</Label>

      <Field
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        isFocused={isFocused}
        {...inputProps}
      />

      <Error>{errorMessage}</Error>
    </Wrapper>
  );
};

export default Input;
