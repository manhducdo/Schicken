import { InjectManifest } from 'workbox-webpack-plugin';

import * as path from 'path';
import { defineConfig } from 'umi';
const manifestName = 'manifest.webmanifest';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  datahub: {
    proxy: {
      '^/api': {
        hub: 'schick',
      },
    },
    store: path.join(__dirname, 'data'),
  },
  lessLoader: {

  },
  cssModulesTypescriptLoader: {
    mode: 'emit',
  },
  routes: [
    {
      path: '/auth',
      component: '@/layouts/auth',
      routes: [
        {
          path: '/auth/login',
          component: './auth/login',
          exact: true
        },
        {
          path: '/auth/forgot-password',
          component: './auth/forgot-password',
          exact: true
        },
        { redirect: '/404' },
      ]
    },

    {
      path: '/',
      component: '@/layouts',
      routes: [
        {
          path: '/',
          component: './index',
          exact: true
        },
        {
          path: '/categories/foods',
          component: './categories/$id',
        },
        {
          path: '/dishes/:id',
          component: './dishes/$id',
        },
        {
          path: '/orders',
          component: './orders',
        },
        {
          path: '/ship',
          component: './ships',
        },
        {
          path: '/store',
          component: './stores',
        },
        {
          path: '/address',
          component: './address',
        },
        {
          path: '/sale',
          component: './sales',
        },
        {
          path: '/notifications',
          component: './notifications',
        },
        {
          path: '/login',
          component: './login',
        },
        {
          path: '/otp',
          component: './otp',
        },
        { redirect: '/404' },
      ]
    },

    { component: '@/pages/404' },
  ],

  // PWA
  // copy: [`/pwa/${manifestName}`], // 这个需要提供 pwa 需要的 .webmanifest 文件，然后手动将其拷贝到构建之后的目录（dist）下
  // links: [{ rel: 'manifest', href: `/${manifestName}` }], // 手动插入 .webmanifest 文件的 link
  // chainWebpack(memo) {
  //   // workbox 配置
  //   memo.plugin('workbox').use(InjectManifest, [
  //     {
  //       maximumFileSizeToCacheInBytes: 100 * 1024 * 1024,
  //       swSrc: path.join(__dirname, '/pwa/service-worker.js'),
  //       swDest: 'sw.js',
  //       exclude: [/\.map$/, /favicon\.ico$/, /^manifest.*\.js?$/],
  //     },
  //   ]);
  // },
});
