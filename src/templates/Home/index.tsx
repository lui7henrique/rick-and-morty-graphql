import Image from "next/image";

import * as S from "./styles";

export const HomeTemplate = () => {
  return (
    <>
      <S.Container>
        <h1>oi</h1>

        <S.ImageContainer>
          <Image src="/assets/banner.jpg" fill alt="banner" quality={100} />
        </S.ImageContainer>
      </S.Container>
    </>
  );
};
