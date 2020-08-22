import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav.js";
import Filter from "../components/Filter.js";
import Title from "../components/Title.js";
import MetaTags from "../components/Metatags.js";
import Analytics from "../components/Analytics.js";

// TODO: Need to fetch `posts` (by calling some API endpoint)
//       before this page can be pre-rendered.
function Profile({ designers }) {
  return (
    <ul>
      {designers.map((d) => (
        <li>{d.name}</li>
      ))}
    </ul>
  )
}

// This function gets called at build time
export async function getStaticProps({ params }) {
  const origin =
    process.env.NODE_ENV !== "production"
      ? "http://localhost:3000"
      : "https://uruguayanswho.design/";

  const res = await fetch(`${origin}/api/designers/${params.slug}`);
  const designers = await res.json();

  return {
    props: {
      designers,
    },
  };
}

export default Profile
