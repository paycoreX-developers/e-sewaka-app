export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="bg-blue-500 p-24 min-h-screen">{children}</main>;
}
