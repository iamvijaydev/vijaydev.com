import { useRouteContext } from "main";
import { useState } from "react";
import { Link } from "~components/core/link/Link";
import { useIsomorphicEffect } from "~hooks/useIsomorphicEffect";

export const MenuItems = () => {
  const { state: { pathname } } = useRouteContext();
  const isActive = (name: string) => pathname.startsWith(name)

  return (
    <>
      <Link
        href="/about"
        textProps={{ variant: "label" }}
        isActive={isActive("/about")}
      >
        About
      </Link>
      <Link
        href="/featured"
        textProps={{ variant: "label" }}
        isActive={isActive("/featured")}
      >
        Featured
      </Link>
      <Link
        href="/blog"
        textProps={{ variant: "label" }}
        isActive={isActive("/blog")}
      >
        Blog
      </Link>
      <Link
        href="/learn"
        textProps={{ variant: "label" }}
        isActive={isActive("/learn")}
      >
        Learn
      </Link>
    </>
  );
};
