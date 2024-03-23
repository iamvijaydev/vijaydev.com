let isImportsAdded = false;

const devPackages = {
  'react': 'https://esm.sh/react@18.2.0?dev',
  'react/jsx-runtime': 'https://esm.sh/react@18.2.0/jsx-runtime?dev',
  'react-dom': 'https://esm.sh/react-dom@18.2.0?dev',
  'react-dom/client': 'https://esm.sh/react-dom@18.2.0/client?dev',
  '@codesandbox/sandpack-react': 'https://esm.sh/@codesandbox/sandpack-react@2.13.5?dev',
  '@codesandbox/sandpack-themes': 'https://esm.sh/@codesandbox/sandpack-themes@2.0.21?dev', 
  '@react-spring/web': 'https://esm.sh/@react-spring/web@9.7.3?dev',
  '@use-gesture/react': 'https://esm.sh/@use-gesture/react@10.3.0?dev',
  'two.js': 'https://esm.sh/two.js@0.8.13?dev'
}
const prodPackages = {
  'react': 'https://esm.sh/react@18.2.0',
  'react/jsx-runtime': 'https://esm.sh/react@18.2.0/jsx-runtime',
  'react-dom': 'https://esm.sh/react-dom@18.2.0',
  'react-dom/client': 'https://esm.sh/react-dom@18.2.0/client',
  '@react-spring/web': 'https://esm.sh/@react-spring/web@9.7.3',
  '@use-gesture/react': 'https://esm.sh/@use-gesture/react@10.3.0',
  'two.js': 'https://esm.sh/two.js@0.8.13'
}
const packages = process.env.NODE_ENV === 'development' ? devPackages : prodPackages;

const importmap = {
  imports: {
    ...packages
  }
}

export const addImport = (key, path) => {
  isImportsAdded = true;
  importmap.imports[key] = path;
}

export const getString = () => {
  if (!isImportsAdded) {
    throw 'Please build all mjs file before building the HTMLs'
  }
  return JSON.stringify(importmap);
}