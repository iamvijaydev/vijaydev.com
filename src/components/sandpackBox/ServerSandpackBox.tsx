import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeViewer,
} from "@codesandbox/sandpack-react";
import type { SandpackBoxProps } from './types';

export const ServerSandpackBox = (props: SandpackBoxProps) => {
  const {
    hideExplorer,
    hideEditor,
    layout,
    editorHeight,
    ...sandpackProviderProps
  } = props;

  return (
    <SandpackProvider {...sandpackProviderProps} theme="light">
      <SandpackLayout>
        <SandpackCodeViewer />
      </SandpackLayout>
    </SandpackProvider>
  );
};