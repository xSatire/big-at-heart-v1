import { Sidebar } from "@/components/dashboard/sidebar";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="grid grid-cols-5 h-full min-h-[90vh] w-[95vw] relative text-slate-800">
      <div className="col-span-1 p-4 relative">
        <Sidebar />
      </div>
      <div className="col-span-4 p-4 bg-slate-100 brightness-90 bg-opacity-35 rounded-lg">
        <div>{children}</div>
      </div>
    </div>
  );
};
export default Layout;
