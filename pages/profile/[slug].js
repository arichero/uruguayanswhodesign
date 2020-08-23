import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "../../components/Nav.js";
import Filter from "../../components/Filter.js";
import Title from "../../components/Title.js";
import MetaTags from "../../components/Metatags.js";
import Analytics from "../../components/Analytics.js";
import { useRouter } from 'next/router'

const Slug = () => {
  const router = useRouter()
  const { slug } = router.query
  }

export async function getStaticProps() {
  const origin =
    process.env.NODE_ENV !== "production"
      ? "http://localhost:3000"
      : "https://uruguayanswho.design/";

  const res = await fetch(`${origin}/api/designers`);
  const designers = await res.json();
  
  return {
    props: {
      designers,
    },
  };
}

export default function Profile({ designers }) {
  return (
    <div className="container">
      <Head>
        <title>Uruguayans Who Design. A Uruguayan designers repository.</title>
        <link id="favicon" rel="alternate icon" href="/favicon.ico" />
        <MetaTags />
      </Head>
      <Nav />

      <p>Profile: {slug}</p>
      {designers != null ? (
            <tbody>
              {designers.map((d, i) => (
                <tr key={`${d.name}-${i}`}>
                  <td><a href={d.link} target="_blank" rel="noopener">{d.name}</a></td>
                  <td className="thsize-loc dn"><a href={d.link}>{d.location}</a></td>
                  <td className="thsize-aux"><a href={d.link}>{d.expertise}</a></td>
                  <td className="thsize-link"><a href={d.link}>→</a></td>
                </tr>
              ))}
            </tbody>
          ) : null}
      </div>
    );
}

export default Profile
