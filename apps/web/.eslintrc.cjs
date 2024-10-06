module.exports = {
  env: {
    node: true,
  },
  extends: ['@org/eslint-config'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  ignorePatterns: ['postcss.config.cjs', 'tailwind.config.cjs'],
};
