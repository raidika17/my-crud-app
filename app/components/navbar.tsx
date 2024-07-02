import Link from "next/link";
import { ReactNode } from "react";
import BottomNavbar from "./bottomNavbar";

interface NavbarProps {
  children: ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <>
      <div className="container mx-auto bg-green-500 p-4 pr-10 rounded-br-full lg:justify-between md:justify-start flex items-center">
        <div className="text-white font-bold text-lg">My CRUD App</div>
        <div className="hidden md:flex space-x-6 text-white">
          <Link href="/">
            <div className=" underline-animation">Dashboard</div>
          </Link>
          <Link href="/add_user">
            <div className=" underline-animation">Add User</div>
          </Link>
        </div>
      </div>
      <div className="py-10">
        <div className="container mx-auto px-8">{children}</div>
      </div>
      <BottomNavbar />
    </>
  );
};

export default Navbar;
