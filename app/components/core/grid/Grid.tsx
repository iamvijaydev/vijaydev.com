import { PropsWithChildren } from "react";

export type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type ScreenSize = {
  screen?: "sm" | "md" | "lg" | "xl";
  size: Size;
}

export type CellProps = {
  as?: "section" | "article" | "header" | "footer" | "div";
  size: Size | ScreenSize | ScreenSize[];
  className?: string;
};

export const Cell = ({
  as: Component = "div",
  size,
  className: baseClassName = '',
  children,
}: PropsWithChildren<CellProps>) => {
  let className = baseClassName;

  if (typeof size === "number") {
    className += ` col-${size}`;
  } else if (Array.isArray(size)) {
    size.forEach((each) => {
      className += ` ${each.screen ? each.screen + ':' : ''}col-${each.size}`;
    });
  } else {
    className += ` ${size.screen ? size.screen + ':' : ''}col-${size.size}`;
  }

  return (
    <Component className={className}>
      {children}
    </Component>
  );
};

export type GridProps = {
  as?: "section" | "article" | "header" | "footer" | "div";
  size?: CellProps["size"];
  className?: string;
};

export const Grid = ({
  as: Component = "div",
  size,
  className,
  children,
}: PropsWithChildren<GridProps>) => {
  return (
    <Component className="layout">
      <div className={className ? `${className} grid` : "grid"}>
        {size !== undefined ? <Cell size={size}>{children}</Cell> : children}
      </div>
    </Component>
  );
};
