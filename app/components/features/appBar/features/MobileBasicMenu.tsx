import { MenuItems } from "./MenuItems";

export const MobileBasicMenu = () => {
  return (
    <details>
      <summary className="flex flex-end focus-visible">
        <div className="button secondary-container theme-hue focus-visible flex align-center gap-2xs">
          <span className="icon text label material-symbols-outlined">
            menu
          </span>
          <span className="text label">Menu</span>
          <span className="icon text label material-symbols-outlined">
            arrow_drop_down
          </span>
        </div>
      </summary>
      <nav className="app-bar__height flex flex-end align-center gap-m">
        <MenuItems />
      </nav>
    </details>
  );
};
