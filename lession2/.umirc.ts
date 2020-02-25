import { IConfig } from 'umi-types'; // ref: https://umijs.org/config/

const config: IConfig = {
  block: {
    defaultGitUrl: 'https://github.com/ant-design/pro-blocks',
    npmClient: 'cnpm', // 优先级低于 umi block add [block] --npm-client
  },
  hash: true,
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/users',
          component: './users',
        },
        {
          path: '/list',
          component: './list',
        },
        {
          path: '/setting/:id',
          component: './setting/$id',
        },
        {
          path: '/',
          component: '../pages/index',
        },
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: false,
        dva: true,
        // 这是配置项目使用immer的一种方式， 另一个配置方式是在app.js中配置
        // dva: {
        //     immer: true,
        //     // dynamicImport: false // 配置在dva里
        // },
        // dynamicImport: true,
        dynamicImport: {
          webpackChunkName: true,
          // 指定动态加载编译时的过渡文件命名规划
          loadingComponent: './components/loading',
          level: 1, // 指定按需加载的路由等级, 默认为1
        },
        /// 配置国际化组件
        // locale: {
        //   default: 'zh-CN', // 默认语言 zh-CN
        //   baseNavigator: true, // 为true时， 用navigator.language的值作为默认语言
        //   antd: true, // 是否启用antd的<LocaleProvider/>
        // },
        // 如果.umirc.js里配置了singular: true，locales要改成locale
        locale: {
          default: 'zh-CN',
          //默认语言 zh-CN，如果 baseSeparator 设置为 _，则默认为 zh_CN
          baseNavigator: true,
          // 为true时，用navigator.language的值作为默认语言
          antd: true,
          // 是否启用antd的<LocaleProvider />
          baseSeparator: '-', // 语言默认分割符 -
        },
        title: 'lession2',
        // dll: false,  // 默认情况下是false的。
        dll: {
          include: ['dva/router', 'dva/saga', 'dva/fetch'],
          exclude: ['@babel/runtime'],
        },
        targets: {
          ie: 11,
        },
        // hd: true,
        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
};
export default config;
