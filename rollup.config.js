import critical from 'rollup-plugin-critical'

export default {
  input: 'index.js',
  output: {
    dir: 'src/main.ts',
    format: 'es',
  },
  plugins: [
    critical({
        criticalBase: './',
        criticalPages: [
            { uri: '', template: 'index' },
        ],
        criticalConfig: {
        },
    }),
  ],
}