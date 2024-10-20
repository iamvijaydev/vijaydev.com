import { Text, Cell, type CellProps } from "main";

export interface Props {
  cellProps?: CellProps;
  heading: string;
  description: string;
  icon?: string;
  link?: string;
  isHeadingGradient?: boolean;
}

export const Card = ({ cellProps, heading, description, icon, isHeadingGradient = false }: Props) => {
  const content = (
    <>
      <Text
        gradient={isHeadingGradient}
        branding="slant-flip"
        as="h3"
        variant="title-4"
        className="mb-s"
      >
        {heading}
      </Text>
      <Text as="p" variant="label">
        {description}
      </Text>
      {!!icon ? (
        <span
          aria-hidden="true"
          className="material-symbols-outlined card-icon"
        >
          {icon}
        </span>
      ) : null}
    </>
  );
  const className = "px-m py-s radius-m surface-container2 card-bg";

  return !!cellProps ? (
    <Cell {...cellProps} className={className}>
      {content}
    </Cell>
  ) : (
    <div className={className}>{content}</div>
  );
};
