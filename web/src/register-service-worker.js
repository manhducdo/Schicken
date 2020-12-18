import { register } from 'register-service-worker';

function dispathServiceWorkerEvent(eventName) {
  const event = document.createEvent('Event');
  event.initEvent(eventName, true, true);
  window.dispatchEvent(event);
}

if (process.env.NODE_ENV === 'production' || localStorage.getItem('__PWA__')) {
  register(`/sw.js`, {
    // 这个路径是根据你最终生成的 service worker 的文件路径来确定
    updated() {
      dispathServiceWorkerEvent('sw.updated');
    },

    offline() {
      dispathServiceWorkerEvent('sw.offline');
    },
  });
}
