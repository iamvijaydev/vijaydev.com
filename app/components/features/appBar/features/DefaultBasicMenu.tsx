import { MenuItems } from "./MenuItems";

export const DefaultBasicMenu = () => {
  return (
    <nav className="app-bar__height flex flex-end align-center gap-m">
      <MenuItems />
    </nav>
  );
};
