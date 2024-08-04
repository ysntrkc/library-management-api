import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
	{languageOptions: {globals: globals.browser}},
	pluginJs.configs.recommended,
	{
		rules: {
			'indent': [
				'error',
				'tab',
			],
			'quotes': [
				'error',
				'single',
			],
			'semi': [
				'error',
				'always',
			],
			'no-extra-semi': [
				'error',
			],
			'eqeqeq': [
				'error',
				'always',
			],
			'no-empty': [
				'error',
			],
			'no-multi-str': [
				'error',
			],
			'comma-spacing': [
				'error',
				{
					before: false,
					after: true,
				},
			],
			'block-spacing': [
				'error',
			],
			'array-bracket-spacing': [
				'error',
				'always',
			],
			'padded-blocks': [
				'error',
				{
					classes: 'always',
				},
			],
			'semi-spacing': [
				'error',
				{
					before: false,
					after: false,
				},
			],
			'key-spacing': [
				'error',
				{
					beforeColon: false,
				},
			],
			'for-direction': [
				'error',
			],
			'no-shadow': [
				'error',
			],
			'no-loop-func': [
				'error',
			],
			'comma-dangle': [
				'error',
				'always-multiline',
			],
			'brace-style': [
				'error',
				'stroustrup',
			],
			'keyword-spacing': [
				'error',
				{
					after: true,
				},
			],
			'no-multiple-empty-lines': [
				'error',
				{max: 1},
			],
			'no-lonely-if': [
				'error',
			],
			'new-cap': [
				'error',
				{
					newIsCap: true,
				},
			],
			'no-plusplus': [
				'error',
			],
			'no-param-reassign': [
				'error',
			],
			'no-const-assign': [
				'error',
			],
			'no-var': [
				'error',
			],
			'no-dupe-keys': [
				'error',
			],
			'no-useless-catch': [
				'error',
			],
			'no-mixed-spaces-and-tabs': [
				'error',
				'smart-tabs',
			],
			'max-len': [
				'error',
				{
					code: 120,
					ignoreComments: true,
					ignoreUrls: true,
				},
			],
			'camelcase': [
				'error',
				{properties: 'never'},
			],
			'quote-props': [
				'error',
				'consistent',
			],
			'no-trailing-spaces': [
				'error',
			],
			'object-curly-spacing': [
				'error',
				'never',
			],
			'eol-last': [
				'error',
				'always',
			],
			'no-undef': 0,
			'space-infix-ops': [
				'error',
			],
		},
	},
];
