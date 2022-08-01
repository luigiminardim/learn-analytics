import type { NextPage } from "next";
import NextLink from "next/link";
import { ScriptGoogleAnalytics } from "../src/ScriptGoogleAnalytics";

const Home: NextPage = () => {
  return (
    <main>
      <ScriptGoogleAnalytics trackingId="G-P1P5ZVZ361" />
      <ScriptGoogleAnalytics trackingId="G-0HKLN8X61H" />
      <h1>Page 0</h1>
      <NextLink href="/page1">
        <a>Vá para Página 1</a>
      </NextLink>
    </main>
  );
};

export default Home;
