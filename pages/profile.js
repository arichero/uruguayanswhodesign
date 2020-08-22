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

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://.../${params.slug}`)
  const designers = await res.json()

  // Pass post data to the page via props
  return {
    props: {
      designers,
    },
  };
}

export default Profile

