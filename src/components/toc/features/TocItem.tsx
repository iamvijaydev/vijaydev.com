import type { TocEntry } from "@stefanprobst/rehype-extract-toc";
import { Link } from "main";
import { marginSpace } from "../utils/makeTocList";

interface TocItemProps {
  entry: TocEntry;
  className: string;
  url: string;
}

export const TocItem = ({ entry, className }: TocItemProps): JSX.Element => {
  return entry.id ? (
    <Link href={`#${entry.id}`} className={marginSpace[entry.depth]}>
      {entry.value}
    </Link>
  ) : (
    <span className={className}>{entry.value}</span>
  );
};