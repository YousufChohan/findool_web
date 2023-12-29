import { MobileMenuItems } from "./MobileMenuItems";

export const MobileDropdown = ({ submenus, dropdown }) => {
  //   const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  return (
    <ul className={`dropdown  ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <MobileMenuItems items={submenu} key={index} />
      ))}
    </ul>
  );
};
