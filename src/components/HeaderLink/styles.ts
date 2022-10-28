import styled from "styled-components";

type LabelProps = {
  isActive: boolean;
};

export const Label = styled.span<LabelProps>`
  font-size: 0.9rem;
  transition: all 0.1s ease-in-out;

  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.black["100"] : theme.colors.black["200"]};

  &:hover {
    color: ${({ theme }) => theme.colors.black["100"]};
  }
`;
