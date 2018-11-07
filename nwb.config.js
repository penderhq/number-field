module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'NumberField',
      externals: {
        react: 'React'
      }
    }
  }
}
