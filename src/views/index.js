// 引入这个库，实现代码分割，让组件按需加载，优化项目性能
import loadable from '@loadable/component'
const Jsx = loadable(()=>import('./study/jsx'))
const Event = loadable(()=>import('./study/event'))
const Condition = loadable(()=>import('./study/condition'))
const List = loadable(()=>import('./study/list'))
const Form = loadable(()=>import('./study/form'))
const State = loadable(()=>import('./study/state'))
const Combine = loadable(()=>import('./study/combine'))
const Life = loadable(()=>import('./study/life'))
const Fragment = loadable(()=>import('./study/fragments'))
const TestCtx = loadable(()=>import('./study/testctx'))
const TestHoc = loadable(()=>import('./study/testhoc'))
const TestHook = loadable(()=>import('./study/hook'))
const TestType = loadable(()=>import('./study/testtype'))

const Home = loadable(()=>import('./home'))
const HomeDetail = loadable(()=>import('./home/detail'))
import User from './user'


export default [
    {
      id: 1,
      path: '/jsx',
      component: Jsx,
      text: 'Jsx学习',
    },
    {
      id: 2,
      path: '/event',
      component: Event,
      text: '事件绑定',
    },
    {
      id: 3,
      path: '/con',
      component: Condition,
      text: '条件渲染',
    },
    {
      id: 4,
      path: '/list',
      component: List,
      text: '事件绑定',
    },
    {
      id: 5,
      path: '/form',
      component: Form,
      text: '表单绑定',
    },
    {
      id: 6,
      path: '/state',
      component: State,
      text: '状态提升',
    },
    {
      id: 7,
      path: '/com',
      component: Combine,
      text: '组合继承',
    },
    {
      id: 8,
      path: '/life',
      component: Life,
      text: '生命周期',
    },
    {
      id: 9,
      path: '/fram',
      component: Fragment,
      text: '碎片',
    },
    {
      id: 10,
      path: '/ctx',
      component: TestCtx,
      text: '上下文',
    },
    {
      id: 11,
      path: '/hoc',
      component: TestHoc,
      text: '高阶组件',
    },
    {
      id: 12,
      path: '/type',
      component: TestType,
      text: 'PropTypes',
    },
    {
      id: 13,
      path: '/hook',
      component: TestHook,
      text: 'Hooks',
    },
    {
      id: 14,
      path: '/',
      component: Home,
      text: '我的首页',
      children: [
        {
          id: 1401,
          path: '/home/detail/:id/:name',
          component: HomeDetail,
          text: '详情页',
        }
      ]
    }
  ]
  