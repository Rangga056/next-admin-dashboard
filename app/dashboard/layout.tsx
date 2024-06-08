import Navbar from "@/components/shared/dashboard/navbar/Navbar";
import SideBar from "@/components/shared/dashboard/sidebar/SideBar";
import Footer from "@/components/shared/dashboard/Footer";
import MobileSideBar from "@/components/shared/dashboard/sidebar/MobileSideBar";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="dark flex">
      {/* Desktop sidebar */}
      <div className="hidden md:block flex-[1] bg-slate-900 p-3 pb-0 lg:px-6 h-min custom-scroll">
        <SideBar />
      </div>

      <div className="flex-[4] p-4 h-screen custom-scroll overflow-y-auto">
        <div className="flex md:hidden items-center justify-between gap-4">
          <MobileSideBar />
          <Navbar />
        </div>

        <div className="hidden md:flex">
          <Navbar />
        </div>

        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
