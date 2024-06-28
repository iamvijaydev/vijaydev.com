import { useMemo } from "react";
import { useHtmlHeadContext } from "~store/htmlHead/context";
import { Text } from "~components/core/text/Text";

export const Masthead = () => {
  const store = useHtmlHeadContext();

  const [title, description] = useMemo(() => {
    let title = '';
    let description = '';

    store.state.meta.forEach((meta) => {
      if (meta.name === 'title') {
        title = meta.pageContent || meta.content;
      }
      if (meta.name === 'description') {
        description = meta.pageContent || meta.content;
      }
    });

    return [title, description];
  }, [store.state.meta]);

  return (
    <div>
      <span>breadcrumb</span>
      <Text as="h1">{title}</Text>
      <Text as="div">{description}</Text>
      <span>chips</span>
    </div>
  )
}