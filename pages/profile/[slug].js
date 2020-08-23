import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "../components/Nav.js";
import Filter from "../components/Filter.js";
import Title from "../components/Title.js";
import MetaTags from "../components/Metatags.js";
import Analytics from "../components/Analytics.js";
import { useRouter } from 'next/router'

const Profile = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div className="container">
      <Head>
        <title>Uruguayans Who Design. A Uruguayan designers repository.</title>
        <link id="favicon" rel="alternate icon" href="/favicon.ico" />
        <MetaTags />
      </Head>
      <p>Profile: {slug}</p>
      </div>
    )
}

export default Profile
