export const commonConfig = {
  bundle: true,
  write: true,
  jsx: 'automatic',
  loader: { '.tsx': 'tsx' },
  jsxSideEffects: true,
  minify: process.env.NODE_ENV === 'development' ? false : true,
  // minify: false,
}

export const baseClientBuildConfig = {
  ...commonConfig,
  format: 'esm',
  outExtension: { '.js': '.mjs' },
  external: ['main', 'react', 'react-dom', 'react-dom/client', 'two.js'],
}

export const baseServerBuildConfig = {
  ...commonConfig,
  format: 'cjs',
  outExtension: { '.js': '.cjs' },
  allowOverwrite: true,
  platform: 'node',
}