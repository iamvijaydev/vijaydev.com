import { H3, Link } from "main";

export type Props = {
  title: string;
  list: {
    id: string;
    href: string;
    children: string;
  }[];
  readMoreLink: string;
};

export const List = (props: Props) => {
  return (
    <div className="lg:text-right col-12 md:col-4 lg:col-3 mb-m md:mb-l">
      <H3 presentAs="h5" className="text-base pb-2xs mb-xs bb b-surface">
        {props.title}
      </H3>
      <ul role="navigation" className="reset-list flex f-column gapy-2xs">
        {props.list.map((item) => (
          <li key={item.id}>
            <Link {...item} className="text-label" />
          </li>
        ))}
        <li>
          <Link href={props.readMoreLink} className="text-label">
            View more ⟶
          </Link>
        </li>
      </ul>
    </div>
  );
};
