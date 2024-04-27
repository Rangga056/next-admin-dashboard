import Navbar from "@/components/shared/dashboard/navbar/Navbar";
import SideBar from "@/components/shared/dashboard/sidebar/SideBar";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="dark flex">
      <div className="flex-[1] bg-slate-900 p-3 h-screen lg:px-6">
        <SideBar />
      </div>
      <div className="flex-[4] p-4">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
