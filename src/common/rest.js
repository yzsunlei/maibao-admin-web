import Rest from '../class/Rest';
import Single from '../class/Single';

function buildFetchModel(config) {
  return new Single(Rest, config);
}

/* 动态模块 */
export const AdminTrendIndexModel = buildFetchModel({
  url: 'admin/trend/index',
  defaultMethod: 'GET'
});

export const AdminTrendCreateModel = buildFetchModel({
  url: 'admin/trend/create/:id',
  default: 'POST'
});

export const AdminTrendCategoryModel = buildFetchModel({
  url: 'admin/trend/category',
  defaultMethod: 'GET'
});

export const AdminTrendCommentModel = buildFetchModel({
  url: 'admin/trend/comment',
  defaultMethod: 'GET'
});

/* 消息模块 */
export const AdminInforIndexModel = buildFetchModel({
  url: 'admin/infor/index',
  defaultMethod: 'GET'
});

/* 人脉模块 */
export const AdminSocialIndexModel = buildFetchModel({
  url: 'admin/social/index',
  defaultMethod: 'GET'
});

/* 系统模块 */
export const AdminSystemConfigModel = buildFetchModel({
  url: 'admin/config/get',
  defaultMethod: 'GET'
});

export const AdminSystemLoginModel = buildFetchModel({
  url: 'admin/system/login',
  defaultMethod: 'POST'
});

export const AdminSystemInfoModel = buildFetchModel({
  url: 'admin/system/info',
  defaultMethod: 'GET'
});

export const AdminSystemLogoutModel = buildFetchModel({
  url: 'admin/system/logout',
  defaultMethod: 'POST'
});

/* 公用模块 */
export const AdminCommonUploadModel = buildFetchModel({
  url: 'admin/common/upload',
  defaultMethod: 'POST'
});
