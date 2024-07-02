import { getUsers } from "@/lib/data";
import TitleComponent from "./components/title";
import Table from "./components/table";

const Home = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const users = await getUsers(query);

  return (
    <div>
      <TitleComponent title="Dashboard" />
      <Table data={users} />
    </div>
  );
};

export default Home;
