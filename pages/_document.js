import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
        <Html lang="en">
        <Head>
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet"/>
            <script defer src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js"></script>
            <link rel="shortcut icon"
                  href={require("../assets/images/favicon.ico")}>
            </link>   
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}