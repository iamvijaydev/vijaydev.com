import { PropsWithChildren } from "react";

export type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

export type ScreenSize = {
  screen?: "sm" | "md" | "lg" | "xl";
  type?: "col" | "row";
  position?: "start" | "end";
  size: Size;
};

export type SizeType = Size | ScreenSize | ScreenSize[];

export interface CellProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  as?: "section" | "article" | "aside" | "header" | "footer" | "div";
  size: SizeType;
  className?: string;
}

const getClassName = (size: SizeType) => {
  const getConfigClassName = (size: ScreenSize) => {
    const screen = size.screen ? `${size.screen}:` : "";
    const type = size.type === "row" ? "row-" : "col-";
    const position = size.position ? `${size.position}-` : "";

    return `${screen}${type}${position}${size.size}`;
  };

  if (typeof size === "number") {
    return `col-${size}`;
  }

  if (Array.isArray(size)) {
    return size.map(getConfigClassName).join(" ");
  }

  return getConfigClassName(size);
};

export const Cell = ({
  as: Component = "div",
  size,
  className = "",
  children,
  ...rest
}: PropsWithChildren<CellProps>) => {
  return (
    <Component className={(className += " " + getClassName(size))} {...rest}>
      {children}
    </Component>
  );
};

export interface GridProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  as?: "section" | "article" | "header" | "footer" | "div";
  size?: CellProps["size"];
  className?: string;
}

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
