module.exports = api => {
  api.cache(true)

  const presets = ['@vue/app']
  const plugins = ['@babel/plugin-proposal-optional-chaining', '@babel/plugin-transform-runtime']

  return {
    presets,
    plugins
  }
}
