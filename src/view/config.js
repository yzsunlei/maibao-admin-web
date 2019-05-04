export default {
  /* 动态模块 */
	'trend_index': {
    title: '动态列表',
    path: '/trend/index',
    component: require('./trend/index/index.vue'),
    bodyClassName: 'bgc-grey'
  },
  'trend_category': {
    title: '动态分类',
    path: '/trend/index',
    component: require('./trend/category/index.vue'),
    bodyClassName: 'bgc-grey'
  },
	'trend_create': {
		title: '动态发布',
		path: '/trend/create/:id(\\d+)?',
		component: require('./trend/create/index.vue')
	},
  'trend_comment': {
    title: '动态评论',
    path: '/trend/comment/:id(\\d+)?',
    component: require('./trend/comment/index.vue')
  },

  /* 消息模块 */
  'infor_index': {
    title: '消息列表',
    path: '/infor/index',
    component: require('./infor/index/index.vue')
  },

  /* 人脉模块 */
  'social_index': {
    title: '用户列表',
    path: '/social/index',
    component: require('./social/index/index.vue')
  },

  /* 系统模块 */
  'system_login': {
    title: '用户登录',
    path: '/system/login',
    component: require('./system/login/index.vue')
  },
  'system_info': {
    title: '系统中心',
    path: '/system/info',
    component: require('./system/info/index.vue')
  },
  'system_config': {
    title: '配置中心',
    path: '/system/config',
    component: require('./system/config/index.vue')
  }
}
