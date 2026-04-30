import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	{
		rules: {
			// ── Semicolons & Quotes ──────────────────────────
			'semi': ['warn', 'always'],
			'quotes': ['warn', 'single', { 'allowTemplateLiterals': true }],

			// ── Indentation ──────────────────────────────────
			'indent': ['warn', 'tab'],
			'no-tabs': ['warn', { 'allowIndentationTabs': true }],

			// ── Spacing ──────────────────────────────────────
			'object-curly-spacing': ['warn', 'always'],
			'keyword-spacing': ['warn', {
				'overrides': {
					'if': { 'after': false },
					'for': { 'after': false },
					'while': { 'after': false },
					'static': { 'after': false },
					'as': { 'after': false },
				},
			}],

			// ── Operators ────────────────────────────────────
			'operator-linebreak': ['warn', 'before'],

			// ── Equality & Variables ─────────────────────────
			'eqeqeq': 'off',
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'warn',
			'curly': 'warn',
			'no-undef': 'off', // TypeScript handles this

			// ── Misc ─────────────────────────────────────────
			'linebreak-style': 'off',
			'max-len': 'off',
			'camelcase': 'off',
			'new-cap': 'off',
		},
	},
	{
		ignores: [
			'.next/**',
			'node_modules/**',
			'dist/**',
			'coverage/**',
		],
	},
];

export default eslintConfig;
