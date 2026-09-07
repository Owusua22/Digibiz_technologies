export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <link href="/assets/css/blog.css" rel="stylesheet" />
      {children}
    </>
  );
}
