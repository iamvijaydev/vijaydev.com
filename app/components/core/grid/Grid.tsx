export const Grid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout">
      <div className="grid">{children}</div>
    </div>
  );
};

export const Cell = ({
  size,
  children,
}: {
  size: number;
  children: React.ReactNode;
}) => {
  return <div className={`col-${size}`}>{children}</div>;
};
