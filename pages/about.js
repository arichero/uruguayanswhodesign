import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Title from "../components/Title.js";
import MetaTags from "../components/Metatags.js";
import Analytics from "../components/Analytics.js";

const item = {
  hidden: { opacity: 0, y: "15%" },
  show: { opacity: 1, y: "0%" },
  transition: {
    easing: "easeInOut",
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home({ designers }) {
  return (
    <div className="container">
      <Head>
        <title>Uruguayans Who Design | About this initiative</title>
        <meta name="description"
        content="The goal is to inspire new designers to diversify their references, experienced designers to diversify their network, and companies to diversify their teams."
        />
        <link rel="icon" href="/favicon.ico" />
        <MetaTags />
      </Head>

      <Link href="/" shallow={true}>
        <a className="auxNav arrowback">←</a>
      </Link>

      <Title
        className="title m0 p0"
        text="Uruguayans*who&nbsp;design&nbsp;is&nbsp;a"
        noAnimation
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <p className="f1 extend">
          <motion.span variants={item}>place to showcase</motion.span>{" "}
          <motion.span variants={item}>the work of talented</motion.span>{" "}
          <motion.span variants={item}>Uruguayan designers to the world.</motion.span>{" "}
          <motion.span variants={item}>The goal</motion.span>{" "}
          <motion.span variants={item}>is to inspire new</motion.span>{" "}
          <motion.span variants={item}>designers to diversify</motion.span>{" "}
          <motion.span variants={item}>
            their references, experienced designers
          </motion.span>{" "}
          <motion.span variants={item}>
            to diversify their network, and companies to diversify their teams.
          </motion.span>
        </p>
      </motion.div>

      <div className="moreabout">
        <div className="col-left">
          <h3>How can I nominate someone?</h3>
          <p>
            If you know a Uruguayan designer whose work or voice is valuable to
            the design industry, please{" "}
            <Link href="/nominate">
              <a className="link">fill out this form</a>
            </Link>{" "}
            with their information and a few words about why you're nominating
            them. You can choose to link to their portfolio, to their Linkedin,
            or to other social profiles — any link that you feel best represents
            how that person is making a difference in the industry. We decided
            not to collect or display the designer’s photo because we wanted the
            repository to be less about what someone looks like and more about
            how they’re making an impact in the industry.
          </p>

          <h3>How did you come up with this idea?</h3>
          <p>
            We didn’t. This project is inspired by our fantastic sibling sites:
          </p>
          <ul>
            <li>
              <a className="link" href="https://brazilianswho.design/" target="_blank">
                Brazilians Who Design
              </a>
            </li>
            <li>
              <a className="link" href="https://spaniardswho.design/" target="_blank">
                Spaniards Who Design
              </a>
            </li>
            <li>
              <a className="link" href="https://britswho.design/" target="_blank">
                Brits Who Design
              </a>
            </li>
            <li>
              <a className="link" href="https://italianswho.design/" target="_blank">
                Italians Who Design
              </a>
            </li>
            <li>
              <a className="link" href="https://womenwho.design/" target="_blank">
                Women Who Design
              </a>
            </li>
            <li>
              <a className="link" href="https://www.womenwhodraw.com/" target="_blank">
                Women Who Draw
              </a>
            </li>
            <li>
              <a className="link" href="http://www.28blacks.com/" target="_blank">
                28 Black Designers
              </a>
            </li>
            <li>
              <a className="link" href="https://www.latinxswhodesign.com/" target="_blank">
                Latinx Who Design
              </a>
            </li>
            <li>
              <a className="link" href="https://queerdesign.club/" target="_blank">
                Queer Design Club
              </a>
            </li>
            <li>
              <a className="link" href="https://filipinos-who-design.webflow.io/" target="_blank">
                Filipinos Who Design
              </a>
            </li>
            <li>
              <a
                className="link"
                href="https://filipinos-who-design.webflow.io/" target="_blank"
              >
                People Of Craft
              </a>
            </li>
            <li>
              <a className="link" href="https://indianswhodesign.in/" target="_blank">
                Indians Who Design
              </a>
            </li>
            <li>
              <a className="link" href="https://www.apiwho.design/" target="_blank">
                Asian & Pacific Islanders Who Design
              </a>
            </li>
          </ul>

          <h3>How did you build this?</h3>
          <p>
            Uruguayans Who Design is built using the amazing{" "}
            <a className="link" href="https://brazilianswho.design/" target="_blank">
              open source Brazilians Who Design template
            </a>{" "}
            . Thanks to the many people behind the previous sites and to those who kindly supplied the code.
          </p>

          <h3>Who’s behind this?</h3>
          <ul>
            <li>
              <a className="link" href="https://www.linkedin.com/in/arichero/" target="_blank">
                Andrés Richero
              </a> and all the amazing people who have kindly accepted to be part of this and shared their largely appreciated feedback to make the initiative a better one.
            </li>
          </ul>
        </div>
        <div className="col-right">
          <h3>How can I remove my name?</h3>
          <p>
            If you’ve been added to the directory and would like to opt-out or
            make an edit to your profile, please send us a message at
            {" "}hello@uruguayanswho.design.
          </p>
          <h3>Why is my nomination taking so long to show?</h3>
          <p>
            We update this website once a week to include new names. To ensure a
            healthy gender balance on this website, some nominations might take
            longer to appear.
          </p>
          <h3>Stay tuned</h3>
          <p>
            More designers are being added to the repository. Revisit the
            website every now and then and you might find a few more names and links.
          </p>
          <h3>Don´t be shy</h3>
          <p>
            If you´re part of the list just share the link and you´ll tell the
            world how proud you are of being part of it.
          </p>
          <h3>Where can you read about us</h3>
          <p>
            You can find more information about us on this publications:
          </p>
          <ul>
            <li>
              <a className="link" href="https://uxdesign.cc/uruguayans-who-design-d2504d2d86e7" target="_blank">
                UX Collective
              </a>
            </li>
          </ul>
        </div>

        <Analytics />
      </div>

      <style jsx>{`
        .extend {
          margin: 0;
          max-width: 17ch;
        }

        .moreabout {
          font-weight: normal;
          font-size: 1.5rem;
          line-height: 140%;
          letter-spacing: 0.01em;
          display: flex;
          margin-top: 8rem;
        }

        .moreabout > div {
          width: 50%;
          max-width: 50ch;
        }

        .col-right {
          padding-left: 3rem;
        }
        .col-left {
          padding-right: 3rem;
        }

        .moreabout p {
          margin: 0;
          padding: 0;
        }

        .moreabout h3 {
          padding: 0;
          margin: 0;
          font-size: 1.5rem;
        }

        .moreabout h3 {
          margin: 4rem 0 0 0;
        }

        ul,
        li {
          padding: 0;
          margin: 0;
          list-style: none;
          margin-top: 0.3rem;
        }

        @media (max-width: 480px) {
          .moreabout {
            display: block;
          }

          .moreabout > div {
            width: 100%;
            max-width: 100%;
            display: block;
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
}
