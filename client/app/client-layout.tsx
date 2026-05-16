export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="flex flex-col flex-1">{children}</main>;
}
