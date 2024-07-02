import Table from "../components/table";
import TitleComponent from "../components/title";
import { getUsers } from "@/lib/data";

const Dashboard = async () => {
  const users = await getUsers();

  return (
    <div>
      <TitleComponent title="Dashboard" />
      <Table data={users} />
    </div>
  );
};

export default Dashboard;
