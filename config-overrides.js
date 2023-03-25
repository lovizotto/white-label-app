const {
  aliasDangerous,
  configPaths,
} = require("react-app-rewire-alias/lib/aliasDangerous")

module.exports = function override(config) {
  const brand = process.env.REACT_APP_BRAND || ""

  aliasDangerous({
    ...configPaths("tsconfig.paths.json"),
    "@brand": `./${brand}/src`,
    "@components": "src/components",
    "@services": "src/services",
    "@pages": "src/pages",
    "@hooks": "src/hooks",
  })(config)

  return config
}
