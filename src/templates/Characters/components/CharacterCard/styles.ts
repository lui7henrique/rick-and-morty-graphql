import styled from "styled-components";

export const Container = styled.div`
  border-color: ${({ theme }) => theme.colors.black["600"]};
  border-width: 1px;
  border-style: solid;

  border-radius: 4px;
  overflow: hidden;
`;

export const ImageContainer = styled.figure`
  width: 100%;
  aspect-ratio: 1 / 1;
  position: relative;

  position: relative;

  img {
    object-fit: cover;
  }
`;

export const Content = styled.div`
  padding: 0.8rem;
`;

export const Infos = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 0.2rem;
`;

export const Name = styled.h3`
  font-size: 1rem;
`;

export const Type = styled.sub`
  font-size: 0.8rem;
`;

export const Status = styled.div`
  position: absolute;

  bottom: 0.8rem;
  left: 0.8rem;

  background: ${({ theme }) => theme.colors.black["600"]};
  padding: 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.3rem;

  font-size: 0.7rem;

  padding: 4px 8px;

  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(2.5px);

  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 4px;
`;

export const StatusLabel = styled.span`
  font-size: 0.8rem;
`;
