import antfu from '@antfu/eslint-config'

export default antfu({
  // type: 'lib',
  stylistic: {
    indent: 2,
    quotes: 'single',
    jsx: true,
  },
  typescript: true,
  ignores: [
    'node_modules',
    'dist',
    'build',
    'package.json',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    'pnpm-workspace.yaml',
    'vite.config.ts',
    'postcss.config.js',
    'tailwind.config.js',
  ],
  rules: {
    'no-console': 'off',
    'no-else-return': 0,
    'curly': 0,
    'no-lonely-if': 0,
    'node/prefer-global/process': 0,
    'perfectionist/sort-imports': 0,
    'semi': 0
  },
})
