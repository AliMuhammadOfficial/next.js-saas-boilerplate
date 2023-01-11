export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <aside className="h-screen w-44 bg-slate-300">
        <span className="text-3xl">Sidebar</span>
      </aside>
      <main>{children}</main>
    </div>
  );
}
