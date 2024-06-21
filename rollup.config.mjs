import { globSync } from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import terser from '@rollup/plugin-terser';

/** @type {import('rollup'.RollupOptions)} */
export default {
  external: ['main', 'react', 'react/jsx-runtime', 'react-dom', 'react-dom/client'],
	input: Object.fromEntries(
		globSync('dist/client/**/*.mjs').map(file => [
			path.relative(
				'dist',
				file.slice(0, file.length - path.extname(file).length)
			),
			fileURLToPath(new URL(file, import.meta.url))
		])
	),
	output: {
		format: 'es',
		dir: 'dist',
		entryFileNames: '[name].mjs',
		plugins: [process.env.NODE_ENV === 'production' ? terser() : undefined]
	}
};