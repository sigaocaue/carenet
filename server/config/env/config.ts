module.exports = () => {
  const envoriment = process.env.NODE_ENV || 'development'
  return require(`./${envoriment}.env.js`)
}
