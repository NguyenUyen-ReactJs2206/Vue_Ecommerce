module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:vue/vue3-recommended',
    //"plugin:vue/recommended",
    'prettier/vue',
    'plugin:vue/vue3-recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'eslint-config-prettier',
    'prettier'
  ],
  plugins: ['prettier', 'import', '@typescript-eslint'],
  settings: {
    // Nói ESLint cách xử lý các import
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, '')],
        extensions: ['.js', '.vue']
      }
    }
  },
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars-experimental': 'error',
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        semi: true,
        trailingComma: 'none',
        tabWidth: 2,
        endOfLine: 'auto',
        useTabs: false,
        singleQuote: true,
        printWidth: 100,
        jsxSingleQuote: true
      }
    ]
  }
};
