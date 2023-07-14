import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 32px 64px;
  border-radius: 8px;
  gap: 16px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primaryDark};
`;
