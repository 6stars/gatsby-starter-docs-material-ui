const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-index-js": hot(preferDefault(require("C:\\react\\6stars\\gatsby-starter-docs-material-ui\\src\\pages\\index.js"))),
  "component---src-templates-doc-js": hot(preferDefault(require("C:\\react\\6stars\\gatsby-starter-docs-material-ui\\src\\templates\\doc.js"))),
  "component---src-templates-tag-js": hot(preferDefault(require("C:\\react\\6stars\\gatsby-starter-docs-material-ui\\src\\templates\\tag.js"))),
  "component---src-templates-category-js": hot(preferDefault(require("C:\\react\\6stars\\gatsby-starter-docs-material-ui\\src\\templates\\category.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\react\\6stars\\gatsby-starter-docs-material-ui\\.cache\\dev-404-page.js")))
}

