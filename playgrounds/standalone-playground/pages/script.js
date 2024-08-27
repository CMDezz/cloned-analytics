//https://cdn.fpt.com -> ./index.js (cdn.segment)
//api.eclick.com/v1 -> api.segment.io/v1
const { searchParams } = new URL(document.location)
const writeKey = searchParams.get('writeKey')
document.querySelector('input').value = writeKey

console.profile('snippet')
console.time('snippet')
!(function () {
  var analytics = (window.analytics = window.analytics || [])
  if (!analytics.initialize)
    if (analytics.invoked)
      window.console &&
        console.error &&
        console.error('Segment snippet included twice.')
    else {
      analytics.invoked = !0
      analytics.methods = [
        'screen',
        'register',
        'deregister',
        'trackSubmit',
        'trackClick',
        'trackLink',
        'trackForm',
        'pageview',
        'identify',
        'reset',
        'group',
        'track',
        'ready',
        'alias',
        // 'debug',
        'page',
        'once',
        'off',
        'on',
        // 'addSourceMiddleware',
        // 'addIntegrationMiddleware',
        'setAnonymousId',
        // 'addDestinationMiddleware',
      ]
      analytics.factory = function (e) {
        return function () {
          var t = Array.prototype.slice.call(arguments)
          t.unshift(e)
          analytics.push(t)
          return analytics
        }
      }
      for (var e = 0; e < analytics.methods.length; e++) {
        var key = analytics.methods[e]
        analytics[key] = analytics.factory(key)
      }
      analytics.load = function (key, e) {
        var t = document.createElement('script')
        t.type = 'text/javascript'
        t.async = !0
        // t.src = '/node_modules/@segment/analytics-next/dist/umd/standalone.js'
        t.src = './standalone.js'
        var n = document.getElementsByTagName('script')[0]
        n.parentNode.insertBefore(t, n)
        analytics._loadOptions = e
      }
      analytics.SNIPPET_VERSION = '4.13.1'
      analytics._writeKey = writeKey
      analytics.load()
      analytics.page()
    }
})()

// !(function () {
//   var analytics = (window.analytics = window.analytics || [])
//   if (!analytics.initialize) {
//     if (analytics.invoked) {
//       window.console &&
//         console.error &&
//         console.error('Segment snippet included twice.')
//     } else {
//       analytics.invoked = !0
//       analytics.methods = [
//         'trackSubmit',
//         'trackClick',
//         'trackLink',
//         'trackForm',
//         'pageview',
//         'identify',
//         'reset',
//         'group',
//         'track',
//         'ready',
//         'alias',
//         'debug',
//         'page',
//         'once',
//         'off',
//         'on',
//         'addSourceMiddleware',
//         'addIntegrationMiddleware',
//       ]
//       analytics.factory = function (e) {
//         return function () {
//           var t = Array.prototype.slice.call(arguments)
//           t.unshift(e)
//           analytics.push(t)
//           return analytics
//         }
//       }
//       for (var e = 0; e < analytics.methods.length; e++) {
//         var t = analytics.methods[e]
//         analytics[t] = analytics.factory(t)
//       }
//       analytics.load = function (e, t) {
//         var n = document.createElement('script')
//         n.type = 'text/javascript'
//         n.async = !0
//         n.src = './standalone.js'
//         var a = document.getElementsByTagName('script')[0]
//         a.parentNode.insertBefore(n, a)
//         analytics.SNIPPET_APP = e
//         analytics._loadOptions = t
//       }

//       analytics.load(505)
//       analytics.page()
//     }
//   }
// })()
