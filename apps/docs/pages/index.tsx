import Head from "next/head";

import Code from "../components/Code";
import Documentation from "../components/Documentation";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Docs() {
  return (
    <div className="bg-background">
      <Head>
        <title>
          BroLang - The coolest language ever built for bros by bros
        </title>
        <meta
          property="og:title"
          content="BroLang - The coolest language ever build"
          key="title"
        />
        <meta property="og:type" content="website" key="type" />
        <meta
          property="og:url"
          content="https://brolang.vercel.app"
          key="url"
        />
        <meta
          property="og:description"
          content="Brolang is a dynamically typed toy programming language, built for tech bros. Created by Jonathan Alvares."
          key="description"
        />
        <meta
          name="description"
          content="Brolang is a dynamically typed toy programming language, built for tech bros. Created by Jonathan Alvares."
        />
        <meta
          property="og:site_name"
          content="Brolang Documentation"
          key="siteName"
        />
      </Head>
      <Header />
      <Code />
      <Documentation />
      <Footer />
    </div>
  );
}
