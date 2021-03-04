import Link from "next/link";

export default function Nav(props) {
  return (
    <ul className="auxNav" {...props}>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/nominate">
          <a>Nominate</a>
        </Link>
      </li>
      <li>
        <Link href="https://uruguayanswhodesign.slack.com/">
          <a target="_blank">Slack</a>
        </Link>
      </li>

      <style jsx>{`
        ul {
          padding: 0;
          margin: 0;
          display: flex;
        }

        ul li {
          list-style: none;
          margin-right: 2.2rem;
        }

        ul li a {
          color: #fff;
          text-decoration: none;
          transition: color 150ms ease;
        }

        ul li a:hover {
          color: #c7dcff;
        }
      `}</style>
    </ul>
  );
}
