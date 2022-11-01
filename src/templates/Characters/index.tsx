import { CharactersList } from "./components/CharactersList";
import * as S from "./styles";

export const CharactersTemplate = () => {
  return (
    <S.Container>
      <S.Aside>oi</S.Aside>
      <S.Main>
        <S.Title>All characters</S.Title>
        <S.Description>
          Find out all about Rick and Morty characters!
        </S.Description>
        <S.Divider />

        <CharactersList />
      </S.Main>
    </S.Container>
  );
};
