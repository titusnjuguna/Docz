const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/tito/Desktop/Doc/doct/.docz/.cache/dev-404-page.js"))),
  "component---readme-md": hot(preferDefault(require("/home/tito/Desktop/Doc/doct/README.md"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/tito/Desktop/Doc/doct/.docz/src/pages/404.js"))),
  "component---text-mdx": hot(preferDefault(require("/home/tito/Desktop/Doc/doct/text.mdx")))
}

