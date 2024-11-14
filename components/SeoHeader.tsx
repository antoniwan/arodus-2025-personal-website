export default function SeoHeader({
  title,
  description,
  type,
  image,
}: {
  title: string;
  description?: string;
  type?: string;
  image?: string;
}) {
  const metaTitle = `${title} | Antonio Rodríguez`;
  const metaDescription =
    description ||
    "Enjoyer of Learning and Getting Things Done, Parent, Technical Program Manager, Web Developer, Product Leader, Amateur Philosopher, Striving for Health, Consciousness, Strength, and Self-Transcendence ✨";
  const metaImage = image ? `/${image}` : `/share-image.jpg`;
  const ogType = type || "website";
  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:url" content={window.location.origin} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:type" content={ogType} />
    </>
  );
}
