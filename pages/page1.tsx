import NextLink from "next/link";
import { ScriptGoogleAnalytics } from "../src/ScriptGoogleAnalytics";

export default function Page1() {
  return (
    <main>
      <ScriptGoogleAnalytics trackingId="G-P1P5ZVZ361" />
      <ScriptGoogleAnalytics trackingId="G-0HKLN8X61H" />
      <h1>Page 1</h1>
      <NextLink href="/">
        <a>Vá para Página 0</a>
      </NextLink>
    </main>
  );
}
