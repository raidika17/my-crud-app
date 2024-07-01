import Link from "next/link";

const BottomNavbar = () => {
  return (
    <div className="fixed bottom-0 w-screen lg:hidden">
      <div className="container mx-auto  bg-green-500 items-center rounded-t-3xl text-white">
        <div className="flex justify-around p-4">
          <Link href="/">
            <div className=" underline-animation">Dashboard</div>
          </Link>
          <Link href="/add_user">
            <div className=" underline-animation">Add User</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
