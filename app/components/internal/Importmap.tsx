import { useHtmlHeadContext } from "~store/htmlHead/context";

export const Importmap = () => {
  const { state } = useHtmlHeadContext();

  return (
    <>
      <script
        type="importmap"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ imports: state.imports }) }}
      />
    </>
  );
};
