import Head from "next/head";
import { CharactersTemplate } from "templates/Characters";

export default function Characters() {
  return (
    <>
      <Head>
        <title>Rick and Morty | Characters</title>
      </Head>

      <CharactersTemplate />
    </>
  );
}
