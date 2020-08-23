import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "../../components/Nav.js";
import Filter from "../../components/Filter.js";
import Title from "../../components/Title.js";
import MetaTags from "../../components/Metatags.js";
import Analytics from "../../components/Analytics.js";
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p>Post: {pid}</p>
}

// posts will be populated at build time by getStaticProps()
function Blog({ posts }) {
  return (
    <ul>
      {designers.map((post) => (
        <li>{designer.name}</li>
      ))}
    </ul>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  const origin =
    process.env.NODE_ENV !== "production"
      ? "http://localhost:3000"
      : "https://uruguayanswho.design/";

  const res = await fetch(`${origin}/api/designers`);
  const designers = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      designers,
    },
  }
}

export default Blog
