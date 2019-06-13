importScripts('/spell-points/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/spell-points/_nuxt/4d33db1243a693e5f594.js",
    "revision": "d13939d6274512a8242308ba5537cd53"
  },
  {
    "url": "/spell-points/_nuxt/7b602b293b7639cfe359.js",
    "revision": "17a13f13278810fba1fe71d7a1554863"
  },
  {
    "url": "/spell-points/_nuxt/f0b24095be16d39e06fc.js",
    "revision": "962b96cc4775eced425aca22083b2247"
  },
  {
    "url": "/spell-points/_nuxt/f6b8c8d8db09f42f275e.js",
    "revision": "2fd09d272b71098c1a13e77c1b8c9a2d"
  }
], {
  "cacheId": "spell-points",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/spell-points/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/spell-points/.*'), workbox.strategies.networkFirst({}), 'GET')
