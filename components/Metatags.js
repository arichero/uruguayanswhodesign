export default function MetaTags() {
  return (
    <>
      <meta name="viewport" content="width=device-width,initial-scale=1" />

      {/* <!-- Primary Meta Tags --> */}
      <meta name="title" content="Uruguayans Who Design. A Uruguayan designers repository." />
      <meta
        name="description"
        content="We celebrate the work of talented Uruguayan designers and showcase it to the world. Explore, discover and inspire."
      />

      {/* <!-- Open Graph / Facebook --/> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://uruguayanswho.design" />
      <meta property="og:title" content="Uruguayans Who Design. A Uruguayan designers repository." />
      <meta name="description"
        property="og:description"
        content="We celebrate the work of talented Uruguayan designers and showcase it to the world. Explore, discover and inspire."
      />
      <meta name="image"
        property="og:image"
        content="https://uruguayanswho.design/img/preview.png"
      />

      {/* <!-- Twitter --/> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="http://uruguayanswho.design" />
      <meta property="twitter:title" content="Uruguayans Who Design. A Uruguayan designers repository." />
      <meta
        property="twitter:description"
        content="We celebrate the work of talented Uruguayan designers and showcase it to the world. Explore, discover and inspire."
      />
      <meta
        property="twitter:image"
        content="https://uruguayanswho.design/img/preview.png"
      />
    </>
  );
}
