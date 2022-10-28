import styled from "styled-components";
import { Limiter } from "../Limiter";

export const Header = styled.header`
  width: 100%;

  border-bottom-color: ${({ theme }) => theme.colors.black["800"]};
  border-bottom-width: 1px;
  border-bottom-style: solid;
`;

export const Container = styled(Limiter)`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
`;

export const Subtitle = styled.h2`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.black["200"]};
  font-weight: normal;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
