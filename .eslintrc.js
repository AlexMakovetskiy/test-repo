module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "sonarjs",
    "solid",
    "import", 
    "prettier"
  ],
  plugins: [
    '@typescript-eslint/eslint-plugin', 
    "plugin:solid/recommended",
    "prettier"
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "sonarjs/no-duplicate-string": "warn",
		"sonarjs/prefer-immediate-return": "warn",
		"sonarjs/no-useless-catch": "error",
		"sonarjs/no-redundant-jump": "error",
		"sonarjs/no-inverted-boolean-check": "error",
		"sonarjs/prefer-object-literal": "warn",
		"sonarjs/no-all-duplicated-branches": "error",
		"solid/no-destructure": "off",
		"solid/components-return-once": "off",
		"solid/prefer-for": "off",
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    "@typescript-eslint/no-explicit-any": "warn",
		"@typescript-eslint/no-inferrable-types": "off",
		"@typescript-eslint/no-non-null-assertion": "warn",
		"@typescript-eslint/no-empty-function": "error",
		"@typescript-eslint/no-unused-expressions": "warn",
    "prettier/prettier": "off",
    "no-magic-numbers": ["warn", {
			"ignore": [1, 0, -1, 2], 
			"ignoreArrayIndexes": true,
			"ignoreDefaultValues": true
			}
		],
    "import/no-unresolved": "off",
		"import/first": "error",
		"import/no-duplicates": "error",
		"import/order": [
			"error",
			{
				"groups": ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
				"newlines-between": "always-and-inside-groups"
			}
		],

  },
};
