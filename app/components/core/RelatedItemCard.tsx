import type { AnchorAttributes } from "~components/core/Link";
import { LinkCard } from "~components/core/LinkCard";

export interface Props
  extends AnchorAttributes {
  type: string;
  label: string;
  rightAlign?: boolean;
}

export const RelatedItemCard = (props: Props): JSX.Element => {
  const { type, label, rightAlign, ...rest } = props;

  return (
    <LinkCard className={rightAlign ? "text-right" : ""} {...rest}>
      <span className="text-dim-color hover:text-link-color text-label">
        {type}
      </span>
      <span className="block text-body">{label}</span>
    </LinkCard>
  );
};
