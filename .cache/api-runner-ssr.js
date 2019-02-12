var plugins = [{
      plugin: require('C:/react/6stars/gatsby-starter-docs-material-ui/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/react/6stars/gatsby-starter-docs-material-ui/node_modules/gatsby-remark-autolink-headers/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/react/6stars/gatsby-starter-docs-material-ui/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"6star DOCs","short_name":"6star Specs","description":"for 6star Design Specs","start_url":"/docs","background_color":"#334058","theme_color":"#6ec5ff","display":"standalone","icons":[{"src":"android/android-launchericon-512-512.png","sizes":"512x512"},{"src":"android/android-launchericon-192-192.png","sizes":"192x192"},{"src":"android/android-launchericon-144-144.png","sizes":"144x144"},{"src":"android/android-launchericon-96-96.png","sizes":"96x96"},{"src":"android/android-launchericon-72-72.png","sizes":"72x72"},{"src":"android/android-launchericon-48-48.png","sizes":"48x48"},{"src":"ios/ios-appicon-1024-1024.png","sizes":"1024x1024"},{"src":"ios/ios-appicon-180-180.png","sizes":"180x180"},{"src":"ios/ios-appicon-152-152.png","sizes":"152x152"},{"src":"ios/ios-appicon-120-120.png","sizes":"120x120"},{"src":"ios/ios-appicon-76-76.png","sizes":"76x76"},{"src":"ios/ios-launchimage-750-1334.png","sizes":"750x1334"},{"src":"ios/ios-launchimage-1334-750.png","sizes":"1334x750"},{"src":"ios/ios-launchimage-1242-2208.png","sizes":"1242x2208"},{"src":"ios/ios-launchimage-2208-1242.png","sizes":"2208x1242"},{"src":"ios/ios-launchimage-640-960.png","sizes":"640x960"},{"src":"ios/ios-launchimage-640-1136.png","sizes":"640x1136"},{"src":"ios/ios-launchimage-1536-2048.png","sizes":"1536x2048"},{"src":"ios/ios-launchimage-2048-1536.png","sizes":"2048x1536"},{"src":"ios/ios-launchimage-768-1024.png","sizes":"768x1024"},{"src":"ios/ios-launchimage-1024-768.png","sizes":"1024x768"},{"src":"chrome/chrome-extensionmanagementpage-48-48.png","sizes":"48x48"},{"src":"chrome/chrome-favicon-16-16.png","sizes":"16x16"},{"src":"chrome/chrome-installprocess-128-128.png","sizes":"128x128"},{"src":"firefox/firefox-marketplace-512-512.png","sizes":"512x512"},{"src":"firefox/firefox-marketplace-128-128.png","sizes":"128x128"},{"src":"firefox/firefox-general-256-256.png","sizes":"256x256"},{"src":"firefox/firefox-general-128-128.png","sizes":"128x128"},{"src":"firefox/firefox-general-90-90.png","sizes":"90x90"},{"src":"firefox/firefox-general-64-64.png","sizes":"64x64"},{"src":"firefox/firefox-general-48-48.png","sizes":"48x48"},{"src":"firefox/firefox-general-32-32.png","sizes":"32x32"},{"src":"firefox/firefox-general-16-16.png","sizes":"16x16"}]},
    },{
      plugin: require('C:/react/6stars/gatsby-starter-docs-material-ui/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}