import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav.js";
import Filter from "../components/Filter.js";
import Title from "../components/Title.js";
import MetaTags from "../components/Metatags.js";
import Analytics from "../components/Analytics.js";

// TODO: Need to fetch `posts` (by calling some API endpoint)
//       before this page can be pre-rendered.
function Profile({ posts }) {
  return (
    <ul>
      {designers.map((d) => (
        <li>{d.name}</li>
      ))}
    </ul>
  )
}

export async function getStaticProps() {
  const origin =
    process.env.NODE_ENV !== "production"
      ? "http://localhost:3000"
      : "https://uruguayanswho.design/";

  const res = await fetch(`${origin}/api/designers`);
  const designers = await res.json();
  // Get the paths we want to pre-render based on posts
  const paths = designers.map((post) => `/${d.slug}`)
  
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }

  return {
    props: {
      designers,
    },
  };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://.../${params.slug}`)
  const designers = await res.json()

  // Pass post data to the page via props
  return { props: { d } }
}

export default Profile

