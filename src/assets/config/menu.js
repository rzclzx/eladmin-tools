export default [
  // 按下列格式字段顺序添加，（全部填写全量，保持一致）

  // 首页无子菜单
  {
    name: '',
    path: '/',
    hidden: true,
    component: 'Layout',
    // redirect会将'/'定位到'/dashboard'
    redirect: '/tools/generator',
    // 无子菜单
    single: true,
    meta: {
      icon: 'dashboard',
      title: '首页',
      noCache: false,
    },
    children: [
      {
        name: '首页',
        path: 'dashboard',
        hidden: false,
        component: 'main/index',
        meta: {
          title: '首页',
          noCache: true
        }
      }
    ]
  },
  // 二级菜单格式
  // {
  //   name: '系统管理',
  //   path: '/system',
  //   hidden: false,
  //   component: 'Layout',
  //   meta: {
  //     icon: 'el-icon-setting',
  //     title: '系统管理',
  //     noCache: false,
  //   },
  //   children: [
  //     {
  //       name: '用户管理',
  //       path: 'user',
  //       hidden: false,
  //       component: 'system/user/index',
  //       meta: {
  //         title: '用户管理',
  //         noCache: true
  //       }
  //     },
  //     {
  //       name: '角色管理',
  //       path: 'role',
  //       hidden: false,
  //       component: 'system/role/index',
  //       meta: {
  //         title: '角色管理',
  //         noCache: false
  //       }
  //     },
  //     {
  //       name: '菜单管理',
  //       path: 'menu',
  //       hidden: false,
  //       component: 'system/menu/index',
  //       meta: {
  //         title: '菜单管理',
  //         noCache: false
  //       }
  //     },
  //     {
  //       name: '字典管理',
  //       path: 'dict',
  //       hidden: false,
  //       component: 'system/dict/index',
  //       meta: {
  //         title: '字典管理',
  //         noCache: false
  //       }
  //     },
  //   ]
  // },
  {
    name: '系统工具',
    path: '/tools',
    hidden: false,
    component: 'Layout',
    meta: {
      icon: 'dashboard',
      title: '系统工具',
      noCache: false,
    },
    children: [
      {
        name: '代码生成',
        path: 'generator',
        hidden: false,
        component: 'tools/generator/index',
        meta: {
          title: '代码生成',
          noCache: true
        }
      },
      {
        name: '生成配置',
        path: 'generator/config/:name',
        hidden: true,
        component: 'tools/generator/config',
        meta: {
          title: '生成配置',
          noCache: true
        }
      },
    ]
  },
  // 错误路径定向到首页
  {
    path: '*', 
    redirect: '/tools/generator', 
    hidden: true
  }
]