import { useQuery } from "@apollo/client";
import { v4 } from "uuid";

import { GetCharacterQuery } from "graphql/generated/graphql";
import { GET_CHARACTER } from "graphql/queries";

import { Character, CharacterCard } from "../CharacterCard";

import * as S from "./styles";

export const CharactersList = () => {
  const { data, loading } = useQuery<GetCharacterQuery>(GET_CHARACTER);

  if (loading) {
    return <h1>carregando</h1>;
  }

  if (!data) {
    return <h1>loading...</h1>;
  }

  if (!data.characters?.results) {
    return <h1>no characters brah</h1>;
  }

  return (
    <S.List>
      {data.characters?.results.map((character) => {
        if (!character) {
          return <h1 key={v4()}>vazio porra</h1>;
        }

        return (
          <CharacterCard key={character.id} {...(character as Character)} />
        );
      })}
    </S.List>
  );
};
