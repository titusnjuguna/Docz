const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Doct',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/home/tito/Desktop/Doc/doct/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Doct',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/home/tito/Desktop/Doc/doct',
          templates:
            '/home/tito/Desktop/Doc/doct/node_modules/docz-core/dist/templates',
          docz: '/home/tito/Desktop/Doc/doct/.docz',
          cache: '/home/tito/Desktop/Doc/doct/.docz/.cache',
          app: '/home/tito/Desktop/Doc/doct/.docz/app',
          appPackageJson: '/home/tito/Desktop/Doc/doct/package.json',
          appTsConfig: '/home/tito/Desktop/Doc/doct/tsconfig.json',
          gatsbyConfig: '/home/tito/Desktop/Doc/doct/gatsby-config.js',
          gatsbyBrowser: '/home/tito/Desktop/Doc/doct/gatsby-browser.js',
          gatsbyNode: '/home/tito/Desktop/Doc/doct/gatsby-node.js',
          gatsbySSR: '/home/tito/Desktop/Doc/doct/gatsby-ssr.js',
          importsJs: '/home/tito/Desktop/Doc/doct/.docz/app/imports.js',
          rootJs: '/home/tito/Desktop/Doc/doct/.docz/app/root.jsx',
          indexJs: '/home/tito/Desktop/Doc/doct/.docz/app/index.jsx',
          indexHtml: '/home/tito/Desktop/Doc/doct/.docz/app/index.html',
          db: '/home/tito/Desktop/Doc/doct/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
