import Head from "next/head";
import { HomeTemplate } from "templates/Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rick and Morty | Home</title>
      </Head>

      <HomeTemplate />
    </>
  );
}
