import type { NextPage } from "next";
import NextLink from "next/link";

const Home: NextPage = () => {
  return (
    <main>
      <h1>Page 0</h1>
      <NextLink href="/page1">
        <a>Vá para Página 1</a>
      </NextLink>
    </main>
  );
};

export default Home;
