import Head from "next/head";
import Link from "next/link";
import MetaTags from "../components/Metatags.js";
import Analytics from "../components/Analytics.js";

export default function Profile({ designers }) {
  return (
    <div className="container">
      <Head>
        <title>Uruguayans Who Design | Profile</title>
        <meta
            name="description"
            content="Feel free to nominate a Uruguayan designer you think the world should know about."
          />
        <link rel="icon" href="/favicon.ico" />
        <MetaTags />
      </Head>

      
    </div>
  );
}
