import { ParsedStore, Imports, PostData } from "../types";

const devImports: Imports = {
  react: "https://esm.sh/react@18.3.1?dev",
  "react/jsx-runtime": "https://esm.sh/react@18.3.1/jsx-runtime?dev",
  "react-dom": "https://esm.sh/react-dom@18.3.1?dev",
  "react-dom/client": "https://esm.sh/react-dom@18.3.1/client?dev",
  "@floating-ui/dom": "https://esm.sh/@floating-ui/dom@0.26.19?dev",
  "main": "/assets/main.mjs",
};

const prodImports: Imports = {
  react: "https://esm.sh/react@18.3.1",
  "react/jsx-runtime": "https://esm.sh/react@18.3.1/jsx-runtime",
  "react-dom": "https://esm.sh/react-dom@18.3.1",
  "react-dom/client": "https://esm.sh/react-dom@18.3.1/client",
  "@floating-ui/dom": "https://esm.sh/@floating-ui/dom@0.26.19",
  "main": "/assets/main.mjs",
};

const store: ParsedStore = {
  imports: {
    ...(process.env.NODE_ENV === "development" ? devImports : prodImports),
  },
  technical: {
    featured: [],
    list: [],
  },
  fiction: {
    featured: [],
    list: [],
  },
};

export const addImports = (pathname: string, chunkPath: string) => {
  store.imports[pathname] = chunkPath;
};

export const setTechnical = (data: PostData) => {
  store.technical = data;
};

export const setFiction = (data: PostData) => {
  store.fiction = data;
};

export const getImports = () => store.imports;

export const getTechnicalData = () => store.technical;

export const getFictionData = () => store.fiction;
