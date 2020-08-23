const Profile = ({ slug }) => (
  <div>
    <h1>{name}</h1>
    <p>Welcome to our product page for {slug}!</p>
  </div>
)

Profile.getInitialProps = async ({ query }) => {
  return { 
    slug: query.slug;
    name: query.name;
  }
}

export default Profile
