module.exports = {
  '*': () => 'npm run format',
  '*.+(js|jsx|tsx|ts)': [
    () => 'npm run lint',
    () => 'npm run typecheck',
  ],
};
