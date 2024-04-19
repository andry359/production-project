module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
        'jest/globals': true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
    parser: '@typescript-eslint/parser',
    overrides: [
        {
            env: {
                node: 1,
            },
            files: [
                '.eslintrc.{js,cjs}',
            ],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        'i18next',
        'jest',
        'react-hooks',
    ],
    rules: {
        quotes: [2, 'single', { avoidEscape: true }],
        indent: [2, 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', 'tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'eol-last': ['error', 'never'],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                '': 'never',
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'import/no-extraneous-dependencies': 'warn',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': ['error', {
            markupOnly: true, 
            ignoreAttribute: ['data-testid', 'to'] }],
        'max-len': [
            'error', 
            { ignoreComments: true, code: 390,  ignorePattern: '^import .*' }
        ],
        "no-param-reassign": [2, { "props": false }],
        "i18next/no-literal-string": 'off',
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "jsx-a11y/click-events-have-key-events": 'off',
        "jsx-a11y/no-static-element-interactions": 'off',
        "no-param-reassign": 'off',
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
};