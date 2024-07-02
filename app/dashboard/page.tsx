import Table from "../components/table";
import TitleComponent from "../components/title";

interface Data {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface DataProps {
  data: Data[];
}

const Dashboard: React.FC<DataProps> = ({ data }) => {
  return (
    <div>
      <TitleComponent title="Dashboard" />
      <Table data={data} />
    </div>
  );
};

export default Dashboard;
