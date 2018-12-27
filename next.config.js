const withPlugins = require('next-compose-plugins');
const withCss = require('@zeit/next-css');
const withPurgeCss = require('next-purgecss');
const withTypescript = require('@zeit/next-typescript');
module.exports = withPlugins([withTypescript, withCss, withPurgeCss]);
// module.exports = withPlugins([withTypescript, withCSS], {
//   exportPathMap: async function(defaultPathMap) {
//     return {
//       '/index': { page: '/index' }
//     };
//   }
// });
