import Head from "next/head"
import { FooterComponent } from "./FooterComponent"
import { HeaderComponent } from "./HeaderComponent"

export const Layaut = ({ children }) => {
  return (
    <>
      <Head>
        <title>Next App</title>
        <meta name="description" content="sitio web de guitarras"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300&display=swap" rel="stylesheet"/>
          </Head>
          <HeaderComponent></HeaderComponent>
          {children}
          <FooterComponent></FooterComponent>
        </>
        )
}
