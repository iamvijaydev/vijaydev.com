import { LinkCard, AnchorAttributes } from "main";

export interface Props
  extends AnchorAttributes {
  type: string;
  label: string;
  rightAlign?: boolean;
}

export const NextPrevNav = (props: Props): JSX.Element => {
  const { type, label, rightAlign, ...rest } = props;

  return (
    <LinkCard className={props.rightAlign ? "text-right" : ""} {...rest}>
      <span className="text-dim-color hover:text-link-color text-label">
        {type}
      </span>
      <span className="block text-body">{props.label}</span>
    </LinkCard>
  );
};
