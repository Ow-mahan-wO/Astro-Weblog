type Props = {
  text: string;
};

const Tag = ({ text }: Props) => {
  return (
    <div className="m-1 text-blue-500 border border-blue-500 rounded-lg py-1 px-3">
      {`# ${text}`}
    </div>
  );
};

export default Tag;
