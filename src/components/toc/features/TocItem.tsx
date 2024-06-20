import type { TocEntry } from "@stefanprobst/rehype-extract-toc";
import { Link } from "~components/Link";
import { marginSpace } from "../utils/makeTocList";

export interface TocItemProps {
  entry: TocEntry;
  activeId: string;
}

export const TocItem = ({ entry, activeId }: TocItemProps): JSX.Element => {
  return entry.id ? (
    <Link to={`#${entry.id}`} className={`${marginSpace[entry.depth]} ${activeId === entry.id ? 'active' : ''}`}>
      {entry.value}
    </Link>
  ) : (
    <span className="">{entry.value}</span>
  );
};