import { useEffect, useRef } from "react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeViewer,
  SandpackTests,
  SandpackCodeEditor,
  SandpackFileExplorer,
  SandpackConsole,
} from "@codesandbox/sandpack-react";
import { gruvboxLight, nightOwl } from "@codesandbox/sandpack-themes";
import { useMediaQuery } from "main";
import type { SandpackBoxProps } from './types';

export const ClientSandpackBox = (props: SandpackBoxProps) => {
  const {
    hideExplorer = false,
    hideEditor = false,
    layout,
    editorHeight,
    ...providerProps
  } = props;

  const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)", {
    initializeWithValue: false,
  });
  const theme = isDarkMode ? nightOwl : gruvboxLight;

  const isSmallScreen = useMediaQuery("(max-width: 1024px)", {
    initializeWithValue: false,
  });

  const noExplorer = hideExplorer || isSmallScreen;
  const showTabs = noExplorer;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref && ref.current && Number.isFinite(editorHeight)) {
      const wrapper = ref.current.querySelector(
        ".sp-wrapper"
      ) as HTMLDivElement;

      wrapper?.style.setProperty("--sp-layout-height", `${editorHeight}px`);
    }
  }, []);

  return (
    <div ref={ref}>
      <SandpackProvider {...providerProps} theme={theme}>
        <SandpackLayout>
          {noExplorer ? null : (
            <SandpackFileExplorer autoHiddenFiles initialCollapsedFolder={[]} />
          )}
          {hideEditor ? (
            <SandpackCodeViewer
              showLineNumbers
              showTabs={showTabs}
              wrapContent
            />
          ) : (
            <SandpackCodeEditor
              showTabs={showTabs}
              wrapContent
              readOnly
              showReadOnly
            />
          )}
          {layout === "console" ? <SandpackConsole standalone /> : null}
          {layout === "test" ? <SandpackTests /> : null}
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
};