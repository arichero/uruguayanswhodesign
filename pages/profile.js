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
      {posts.map((post) => (
        <li>{post.name}</li>
      ))}
    </ul>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://.../profile')
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => `/profile/${post.slug}`)

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export default Profile
