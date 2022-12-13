import Search from "./Search";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex align-baseline gap-x-4 mt-4 mx-2 divide-x-2">
      <div className="w-1/5">
        <Search />
      </div>
      <div className="flex-1 pl-2">{children}</div>
    </div>
  );
}
