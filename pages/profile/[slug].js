const Profile = ({ slug })
// This gets called on every request
const origin =
    process.env.NODE_ENV !== "production"
      ? "http://localhost:3000"
      : "https://uruguayanswho.design/";

  const res = await fetch(`${origin}/api/designers`);
  const designers = await res.json();

  // Pass data to the page via props
  return { props: { designers } }
}

export default function Profile({ designers }) {
  <div>
    <h1>{d.name}</h1>
    <p>Welcome to our product page for {d.slug}!</p>
  </div>
)

export default Profile
