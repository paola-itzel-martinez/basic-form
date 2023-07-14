import styled from "styled-components";

export const Wrapper = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  text-transform: capitalize;
`;
