"use server";
import Dashboard from "./dashboard/page";
import { getUsers } from "@/lib/data";

const Home = async () => {
  const users = await getUsers();
  return (
    <>
      <Dashboard data={users} />
    </>
  );
};

export default Home;
