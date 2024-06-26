import { PropsWithChildren, useRef, useState } from "react";
import { Button } from "~components/core/button/Button";
import { Link } from "~components/core/link/Link";
import { useIsomorphicEffect } from "~hooks/useIsomorphicEffect";

export interface Props {
  trigger: "click" | "hover";
  label: string;
  optionList: Readonly<Array<{ id: string; label: string; href?: string }>>;
  onSelect?: (id: string) => void;
  selectedId?: string;
  className?: string;
}

export const Menu = (props: PropsWithChildren<Props>) => {
  const ref = useRef<HTMLDivElement>(null);

  useIsomorphicEffect(() => {
    ref.current?.removeAttribute("data-no-js");
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const onMouseEnter = () => {
    if (props.trigger === "hover") {
      setIsOpen(true);
    }
  };

  const onMouseLeave = () => {
    if (props.trigger === "hover") {
      setIsOpen(false);
    }
  };

  const onClick = () => {
    if (props.trigger === "click") {
      setIsOpen(!isOpen);
    }
  };

  return (
    <nav
      ref={ref}
      role="navigation"
      data-no-js="true"
      className={`${props.className || ""} flex a-center gapx-3xs menu ${
        isOpen ? " open" : ""
      }`}
      aria-label={`Select "${props.label}" item`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <Button
        as="Menu"
        aria-expanded={isOpen ? "true" : "false"}
        label={isOpen ? "Close" : props.label}
        ellipsis={true}
        className={isOpen ? "active" : ""}
        postIcon={
          <svg
            className="menu-options-chevron"
            role="img"
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.22 4.22a.75.75 0 000 1.06L8.94 8l-2.72 2.72a.75.75 0 101.06 1.06l3.25-3.25a.75.75 0 000-1.06L7.28 4.22a.75.75 0 00-1.06 0z"
            ></path>
          </svg>
        }
      />
      <ul className="menu-dropdown-level reset-list r-s py-2xs menu-options">
        {props.optionList.map((option) => (
          <li key={option.id} className="menu-item">
            {option.href ? (
              <Link
                key={option.id}
                href={option.href}
                className={option.id === props?.selectedId ? "active" : ""}
              >
                {option.label}
              </Link>
            ) : (
              <Button
                as="Menu"
                className={option.id === props?.selectedId ? "active" : ""}
                onClick={() => props.onSelect && props.onSelect(option.id)}
                label={option.label}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};


/*
<div class="dropdown">
<!--   Each <a> tag is labeled with aria attributes to help define its purpose to assistive technologies -->
  <a href="#" class="dropbtn" aria-haspopup="true" aria-expanded="false" role="button">Main Menu</a>
  <div class="dropdown-content" role="menu">
    <div class="submenu">
<!--   Each <a> tag is labeled with aria attributes to help define its purpose to assistive technologies -->
      <a href="#" aria-haspopup="true" aria-expanded="false" role="menuitem">Level 1 - Item 1</a>
      <div class="submenu-content" role="menu">
<!--   Each <a> tag is labeled with aria attributes to help define its purpose to assistive technologies -->
        <a href="#" role="menuitem">Level 2 - Item 1</a>
        <div class="submenu">
<!--   Each <a> tag is labeled with aria attributes to help define its purpose to assistive technologies -->
          <a href="#" aria-haspopup="true" aria-expanded="false" role="menuitem">Level 2 - Item 2</a>
          <div class="submenu-content" role="menu">
 <!--   Each <a> tag is labeled with aria attributes to help define its purpose to assistive technologies -->
            <a href="#" role="menuitem">Level 3 - Item 1</a>
            <a href="#" role="menuitem">Level 3 - Item 2</a>
          </div>
        </div>
<!--   Each <a> tag is labeled with aria attributes to help define its purpose to assistive technologies -->
        <a href="#" role="menuitem">Level 2 - Item 3</a>
      </div>
    </div>
    <div class="submenu">
<!--   Each <a> tag is labeled with aria attributes to help define its purpose to assistive technologies -->
      <a href="#" aria-haspopup="true" aria-expanded="false" role="menuitem">Level 1 - Item 2</a>
      <div class="submenu-content" role="menu">
<!--   Each <a> tag is labeled with aria attributes to help define its purpose to assistive technologies -->
        <a href="#" role="menuitem">Level 2 - Item 1</a>
        <a href="#" role="menuitem">Level 2 - Item 2</a>
      </div>
    </div>
<!--   Each <a> tag is labeled with aria attributes to help define its purpose to assistive technologies -->
    <a href="#" role="menuitem">Level 1 - Item 3</a>
  </div>
</div>


 /* Style dropdown menus and submenus 
 .dropdown, .submenu {
  position: relative;
  display: inline-block;
}

/* Style the content dropdown list  
.dropdown-content, .submenu-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}

/* Style the links within submenu list 
.dropdown-content a, .submenu-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.submenu-content {
  left: 100%;
  top: 0;
}
/* Show submenu content on focus 
.dropdown:focus-within .dropdown-content,
.submenu:focus-within .submenu-content {
  display: block;
}
*/