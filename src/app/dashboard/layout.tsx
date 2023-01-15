import { Sidebar } from '../../components/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
