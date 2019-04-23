const withPlugins = require('next-compose-plugins');
const cssPlugin = require('@zeit/next-css');
const purgeCssPlugin = require('next-purgecss');
const typescriptPlugin = require('@zeit/next-typescript');

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g);
  }
}

const nextConfig = {
  exportPathMap: async function(defaultPathMap) {
    return {
      '/': { page: '/index' }
    };
  }
};
module.exports = withPlugins(
  [
    typescriptPlugin,
    cssPlugin
    // [
    //   purgeCssPlugin,
    //   {
    //     // purgeCss: {
    //     //   extractors: [
    //     //     {
    //     //       extractor: TailwindExtractor,
    //     //       extensions: ['html', 'js', 'ts', 'jsx', 'tsx']
    //     //     }
    //     //   ]
    //     // }
    //   }
    // ]
  ],
  nextConfig
);
