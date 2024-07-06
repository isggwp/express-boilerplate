import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import js from '@eslint/js'

export default [
  js.configs.recommended,
  { files: ['/src/**/*.{js,mjs,cjs,ts}'] },
  {
    ignores: ['dist', 'build', 'node_modules'],
    languageOptions: { globals: globals.node },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn'
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended
]
