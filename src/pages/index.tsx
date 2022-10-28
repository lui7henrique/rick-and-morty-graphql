import { useCallback, useEffect } from "react";
import { client } from "../graphql/client";
import { GetCharacterQuery } from "../graphql/generated/graphql";
import { GET_CHARACTER } from "../graphql/queries";

export default function Home() {
  const fetchCharacters = useCallback(async () => {
    const { data } = await client.query<GetCharacterQuery>({
      query: GET_CHARACTER,
    });
  }, []);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return (
    <>
      <h1>rick-and-morty</h1>
      <p>graph-ql</p>
    </>
  );
}
