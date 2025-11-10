import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/calendar.svg" type="image/svg+xml" />
        <link
          href="https://fonts.googleapis.com/css2?family=Actor&family=Amatic+SC:wght@400;700&family=Cagliostro&family=Kirang+Haerang&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
