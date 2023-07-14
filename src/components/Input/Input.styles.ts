import styled from "styled-components";
import { InputCSS } from "./Input.types";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const Field = styled.input<InputCSS>`
  padding: 15px;
  margin: 10px 0px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray};

  &:invalid {
    border: ${({ isFocused, theme }) =>
      isFocused ? `1px solid ${theme.colors.red}` : null};
  }

  &:invalid ~ span {
    display: ${({ isFocused }) => (isFocused ? "block" : null)};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s !important;
  }
`;

export const Error = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.red};
  display: none;
`;
