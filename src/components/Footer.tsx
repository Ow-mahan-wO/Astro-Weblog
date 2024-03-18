const Footer = () => {
  return (
    <>
      <footer className="bg-blue-500 p-6 text-white rounded-t-xl">
        <p className="flex justify-center">
          CopyRight &copy;
          <span>{new Date().getFullYear().toString()}</span>
          All rights reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
