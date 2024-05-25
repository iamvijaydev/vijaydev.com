import { Link, NavLink } from "@remix-run/react";

export type SiteHeaderProps = {
  isLanding?: boolean;
};

export const SiteHeader = ({ isLanding = false }: SiteHeaderProps) => {
  return (
    <header>
      {isLanding ? <span>Vijay Dev</span> : null}
      <nav>
        {isLanding ? <Link to={`/`}>Home</Link> : null}
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
          to={`/featured`}
        >
          Featured
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
          to={`/learn`}
        >
          Learn
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
          to={`/thoughts`}
        >
          Thoughts
        </NavLink>
      </nav>
    </header>
  );
};
