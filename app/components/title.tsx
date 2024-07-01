interface TitleComponentProps {
  title: string;
}

const TitleComponent: React.FC<TitleComponentProps> = ({ title }) => {
  return <h1 className="text-center text-2xl font-bold mb-4">{title}</h1>;
};

export default TitleComponent;
