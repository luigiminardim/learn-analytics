import NextLink from "next/link";

export default function Page1() {
  return (
    <main> 
      <h1>Page 1</h1>
      <NextLink href="/">
        <a>Vá para Página 0</a>
      </NextLink>
    </main>
  );
}
