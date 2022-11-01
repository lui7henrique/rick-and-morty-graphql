import { Limiter } from "components/Limiter";
import styled from "styled-components";

export const Container = styled(Limiter)`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

export const Aside = styled.aside``;

export const Main = styled.main`
  padding: 2rem;

  border-left-width: 1px;
  border-left-color: ${({ theme }) => theme.colors.black["700"]};
  border-left-style: solid;
`;

export const Title = styled.h1`
  font-size: 1.875rem;
`;

export const Divider = styled.div`
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.black["800"]};
  border-bottom-style: solid;

  margin: 1rem 0;
`;

export const Description = styled.p`
  margin-bottom: 1rem;
`;
