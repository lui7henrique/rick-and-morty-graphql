import { Limiter } from "components/Limiter";
import styled from "styled-components";

export const Container = styled(Limiter)`
  display: flex;
  align-items: center;
  height: 70vh;

  position: relative;
`;

export const ImageContainer = styled.figure`
  position: relative;
  width: 100%;
  height: 100%;

  position: absolute;
  right: 0;
  top: 0;

  img {
    object-fit: cover;
    object-position: left;
    filter: brightness(0.5) blur(1px);
  }
`;
