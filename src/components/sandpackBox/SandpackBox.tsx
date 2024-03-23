import type { SandpackBoxProps } from "./types";
import { HydrationSafe } from "main";
import { ServerSandpackBox } from "./ServerSandpackBox";
import { ClientSandpackBox } from "./ClientSandpackBox";

const SandpackBox = (props: SandpackBoxProps) => (
  <HydrationSafe
    ServerComponent={<ServerSandpackBox {...props} />}
    ClientComponent={<ClientSandpackBox {...props} />}
  />
);

export const StaticSandbox = (props: SandpackBoxProps) => (
  <SandpackBox {...props} hideExplorer />
);

export const StaticExplorerSandbox = (props: SandpackBoxProps) => (
  <SandpackBox {...props} />
);

export const ConsoleSandbox = (props: SandpackBoxProps) => (
  <SandpackBox {...props} hideExplorer layout="console" />
);

export const TestSandbox = (props: SandpackBoxProps) => (
  <SandpackBox {...props} hideExplorer layout="test" />
);
