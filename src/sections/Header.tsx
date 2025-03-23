import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";

interface navLinkProp {
  title: string;
}


const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [hasScroll, setHasScroll] = useState<boolean>(false);

  useEffect(()=>{
    const handleScroll = () => {
      setHasScroll(window.scrollY > 32);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[])

  const NavLink = ({ title }: navLinkProp) => (
    <LinkScroll
      to={title} offset={-100} spy smooth activeClass="nav-active"
      onClick={() => setToggle(false)}
      readOnly
      className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h-5"
    >
      {title}
    </LinkScroll>
  );

  return (
    <header className={clsx("fixed top-0 left-0 z-50 w-full py-5 transition-all duration-500 max-lg:py-4", hasScroll && "py-2 bg-black/10 backdrop-blur-[8px] shadow-lg ")}>
      <div className="container flex h-14 items-center max-lg:px-5">
        <LinkScroll to="hero" offset={-250} spy smooth onClick={() => setToggle(false)} className="lg:hidden flex-1 cursor-pointer z-2">
          <img
            src="/public/images/xora.svg"
            alt="logo"
            width={115}
            height={55}
          />
        </LinkScroll>
        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            toggle ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
        >
          <div className=" max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title={"features"} />
                  <div className="dot" />
                  <NavLink title={"pricing"} />
                </li>
                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-250}
                    spy
                    smooth
                    className={clsx(
                      "max-lg:hidden transition-transform duration-150 cursor-pointer "
                    )}
                  >
                    <img
                      src="/public/images/xora.svg"
                      alt="logo"
                      width={160}
                      height={55}
                    />
                  </LinkScroll>
                </li>
                <li className="nav-li">
                  <NavLink title="faq" />
                  <div className="dot" />
                  <NavLink title="download" />
                </li>
              </ul>
            </nav>
            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90 ">
              <img
                src="/public/images/bg-outlines.svg"
                alt="outline"
                width={960}
                height={380}
                className="relative"
              />
              <img
                src="/public/images/bg-outlines-fill.png"
                alt="outline"
                width={960}
                height={380}
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>
        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={() => setToggle(!toggle)}
        >
          <img
            src={`/public/images/${toggle ? "close" : "magic"}.svg`}
            alt="magic"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
