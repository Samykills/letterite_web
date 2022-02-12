import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang={"en-IN"}>
        <Head>
          <meta
            name="description"
            content="Send and Receive real letters from your friends and family from anywhere"
          />
          <meta
            name="keywords"
            content="Letterite, letters, letter app, digital letters"
          />
          <meta name="author" content="Ullas Gupta" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Heebo:wght@700&family=Mulish:wght@300;500;700&family=Oleo+Script:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <title>Letterite</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
