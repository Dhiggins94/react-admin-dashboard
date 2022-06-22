import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

export default function Sidebar() {
  const { activeMenu, setActiveMenu, screenSize,currentColor } = useStateContext();
  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-md text-gray=700 dark:text-gray-200 dark:hover:text-black   hover:bg-light-gray m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware /> <span> E-shopper</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(false)}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    style={ ((isActive) =>   ({backgroundColor: isActive ? currentColor: " "})  )}
                    onClick={handleCloseSideBar}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize"> {link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// notes for tailwind. tracking tight is for letter spacing and it gives more control to how much spacing an element has
// m for margin, mt for margin top ml for margin left etc, same for pb is for padding bottom and the like
// rounded lg for border radius,
// md is a breakpoint prefix for responsive design, this case media querie
// block aka display: block. will put the element on it's own line and fill its parent.
// overflow hidden, overflow shows what happen if the content overflows an elements box, hidden cuts the overflow and leaves the content invisible
// content is for controlling the  before and after of an element
// the onclick keeps track of the active menu opening and closing, first we set it to false, then we have the 2nd onclin to check the previous value of the active menu and to make it the opposite of that hence the !prevactivemenu
// the handlecloseside bar is used  so that once the activemenu and the screensize reaches a certain value it will close that sidebar so depending if you are using a mobile device the screen will automatically close  even if you click to a new component, but if its big enough it will remain open