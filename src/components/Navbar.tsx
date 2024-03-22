import Button from "../ui/Button";

import navData from "../data/nav-data";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="flex justify-between items-center p-6">
          <div className="md:hidden">
            <HamburgerMenu />
          </div>
          <div className="md:flex hidden">
            <Button isOutLine={false} onClick={() => {}}>
              {" "}
              Login{" "}
            </Button>
            <Button isOutLine={true} onClick={() => {}}>
              {" "}
              SignUp{" "}
            </Button>
          </div>
          <div className="list-none flex hidden md:flex">
            {navData.map((item, i) => (
              <div key={i}>
                <a className="m-2 text-blue-500 p-3" href={item.path}>
                  {item.name}
                </a>
              </div>
            ))}
          </div>
          <div>
            <img
              src="/astro-logo.png"
              width="200"
              height="200"
              loading="eager"
              alt="logo"
            />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
