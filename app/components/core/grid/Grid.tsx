import { PropsWithChildren } from "react";

export type CellProps = {
  size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  className?: string;
};

export const Cell = ({
  size,
  className,
  children,
}: PropsWithChildren<CellProps>) => {
  return (
    <div className={className ? `${className} col-${size}` : `col-${size}`}>
      {children}
    </div>
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
