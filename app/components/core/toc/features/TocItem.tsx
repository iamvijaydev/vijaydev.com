import type { TocEntry } from "@stefanprobst/rehype-extract-toc";
import { Link } from "~components/core/link/Link";
import { marginSpace } from "../utils/makeTocList";
import { Text } from "~components/core/text/Text";

export interface TocItemProps {
  entry: TocEntry;
  activeId: string;
}

export const TocItem = ({ entry, activeId }: TocItemProps): JSX.Element => {
  return (
    <div>
      <Link
        href={`#${entry.id}`}
        textProps={{
          variant: "label",
          height: "compact",
        }}
        isActive={activeId === entry.id}
        className={marginSpace[entry.depth]}
      >
        {entry.value}
      </Link>
    </div>
  );
};
