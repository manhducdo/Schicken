import { registerRoute } from 'workbox-routing';
import {
  NetworkFirst,
  StaleWhileRevalidate,
  CacheFirst,
  NetworkOnly,
} from 'workbox-strategies';
import { precacheAndRoute } from 'workbox-precaching';
import qs from 'querystring';
import { BackgroundSyncPlugin } from 'workbox-background-sync';

// Used for filtering matches based on status code, header, or both
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
// Used to limit entries in cache, remove entries after a certain period of time
import { ExpirationPlugin } from 'workbox-expiration';

precacheAndRoute(self.__WB_MANIFEST);

// const showNotification = () => {
//   self.registration.showNotification('Post Sent', {
//     body: 'You are back online and your post was successfully sent!',
//     // icon: 'assets/icon/256.png',
//     // badge: 'assets/icon/32png.png',
//   });
// };
// const bgSyncPlugin = new BackgroundSyncPlugin('sync_request', {
//   maxRetentionTime: 2 * 7 * 24 * 60, // Retry for max of 2 weeks (specified in minutes)

//   // the new bit
//   callbacks: {
//     queueDidReplay: showNotification,
//   },
// });

// registerRoute(
//   ({ request }) => {
//     if (
//       ['DELETE' | 'HEAD' | 'PATCH' | 'POST' | 'PUT'].includes(request.method)
//     ) {
//       if (request.headers.get('X-LowCode-Sync')) {
//         return true;
//       }
//     }

//     return false;
//   },
//   new NetworkOnly({
//     plugins: [bgSyncPlugin],
//   }),
// );

// auth
registerRoute(
  // Check to see if the request is a navigation to a new page
  /api\/(profile|views\/config)/,
  // Use a Network First caching strategy
  new NetworkFirst({
    // Put all cached files in a cache named 'pages'
    cacheName: 'lowcode',
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  }),
  'GET',
);

// Cache page navigations (html) with a Network First strategy
registerRoute(
  // Check to see if the request is a navigation to a new page
  ({ request }) => request.mode === 'navigate',
  // Use a Network First caching strategy
  new NetworkFirst({
    // Put all cached files in a cache named 'pages'
    cacheName: 'pages',
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  }),
);

// LowCode API
registerRoute(
  // Check to see if the request is a navigation to a new page
  ({ request }) => {
    if (request.method === 'GET') {
      try {
        const segs = request.url.split('?');
        segs.shift();
        const query = segs.join('?');
        const parsed = qs.parse(query);
        if (parsed.__pwa) {
          return true;
        }
      } catch (e) {}
    }

    return false;
  },
  // Use a Network First caching strategy
  new CacheFirst({
    // Put all cached files in a cache named 'pages'
    cacheName: 'lowcode',
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  }),
);

// Cache CSS, JS, and Web Worker requests with a Stale While Revalidate strategy
registerRoute(
  // Check to see if the request's destination is style for stylesheets, script for JavaScript, or worker for web worker
  ({ request }) =>
    request.destination === 'font' ||
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'worker',
  // Use a Stale While Revalidate caching strategy
  new StaleWhileRevalidate({
    // Put all cached files in a cache named 'assets'
    cacheName: 'assets',
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  }),
);

// Cache images with a Cache First strategy
registerRoute(
  // Check to see if the request's destination is style for an image
  ({ request }) => request.destination === 'image',
  // Use a Cache First caching strategy
  new CacheFirst({
    // Put all cached files in a cache named 'images'
    cacheName: 'images',
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponsePlugin({
        statuses: [200],
      }),
      // Don't cache more than 50 items, and expire them after 30 days
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
      }),
    ],
  }),
);

// // Respond to a server push with a user notification.
// self.addEventListener('push', function(event) {
//   if (Notification.permission === 'granted') {
//     const notificationText = event.data.text();
//     const showNotification = self.registration.showNotification('Sample PWA', {
//       body: notificationText,
//       icon: 'images/icon512.png',
//     });
//     // Ensure the toast notification is displayed before exiting the function.
//     event.waitUntil(showNotification);
//   }
// });

// // Respond to the user selecting the toast notification.
// self.addEventListener('notificationclick', function(event) {
//   console.log('On notification click: ', event.notification.tag);
//   event.notification.close();

//   // This attempts to display the current notification if it is already open and then focuses on it.
//   event.waitUntil(
//     clients
//       .matchAll({
//         type: 'window',
//       })
//       .then(function(clientList) {
//         for (var i = 0; i < clientList.length; i++) {
//           var client = clientList[i];
//           if (client.url == 'http://localhost:1337/' && 'focus' in client)
//             return client.focus();
//         }
//         if (clients.openWindow) return clients.openWindow('/');
//       }),
//   );
// });

// // Or Subscribe method
// const conn = new WebSocket(
//   'wss://stream.binance.com:9443/ws/btcusdt@depth@1000ms',
// );
// conn.onmessage = function(evt) {
//   console.log(evt.data);

//   showNotification();
// };
