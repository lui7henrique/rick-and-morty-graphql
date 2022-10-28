import styled from "styled-components";

export const Limiter = styled.div`
  max-width: ${({ theme }) => theme.sizes["max-width"]};
  margin: 0 auto;

  padding-right: 0.5rem;
  padding-left: 0.5rem;
`;
