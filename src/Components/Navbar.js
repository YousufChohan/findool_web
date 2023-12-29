import React from "react";
import MenuItems from "./MenuItems";
import { menuItemsData } from "./MenuItemData";

export const Navbar = () => {
  return (
    <nav className="desktop-nav">
      <ul className="menus">
        {menuItemsData.map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
        })}
      </ul>
    </nav>
  );
};
