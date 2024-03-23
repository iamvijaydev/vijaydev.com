import { SandpackProviderProps } from "@codesandbox/sandpack-react";

export interface SandpackBoxProps extends SandpackProviderProps {
  hideExplorer?: boolean;
  hideEditor?: boolean;
  layout?: string;
  editorHeight?: number;
}
