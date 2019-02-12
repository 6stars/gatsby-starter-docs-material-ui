// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-index-js": () => import("C:\\react\\6stars\\gatsby-starter-docs-material-ui\\src\\pages\\index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-templates-doc-js": () => import("C:\\react\\6stars\\gatsby-starter-docs-material-ui\\src\\templates\\doc.js" /* webpackChunkName: "component---src-templates-doc-js" */),
  "component---src-templates-tag-js": () => import("C:\\react\\6stars\\gatsby-starter-docs-material-ui\\src\\templates\\tag.js" /* webpackChunkName: "component---src-templates-tag-js" */),
  "component---src-templates-category-js": () => import("C:\\react\\6stars\\gatsby-starter-docs-material-ui\\src\\templates\\category.js" /* webpackChunkName: "component---src-templates-category-js" */),
  "component---cache-dev-404-page-js": () => import("C:\\react\\6stars\\gatsby-starter-docs-material-ui\\.cache\\dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "C:\\react\\6stars\\gatsby-starter-docs-material-ui\\.cache\\data.json")

