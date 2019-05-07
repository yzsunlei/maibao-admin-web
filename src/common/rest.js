import Rest from '../class/Rest';
import Single from '../class/Single';

function buildFetchModel(config) {
  return new Single(Rest, config);
}

/* 动态模块 */
export const AdminTrendIndexModel = buildFetchModel({
  url: 'admin/trend/index',
  defaultMethod: 'POST'
});

export const AdminTrendCreateModel = buildFetchModel({
  url: 'admin/trend/create/:id',
  default: 'POST'
});

export const AdminTrendCategoryModel = buildFetchModel({
  url: 'admin/trend/category',
  defaultMethod: 'POST'
});

export const AdminTrendDetailModel = buildFetchModel({
  url: 'admin/trend/detail',
  defaultMethod: 'POST'
});

export const AdminTrendCommentModel = buildFetchModel({
  url: 'admin/trend/comment',
  defaultMethod: 'POST'
});

/* 消息模块 */
export const AdminInforIndexModel = buildFetchModel({
  url: 'admin/infor/index',
  defaultMethod: 'POST'
});

/* 人脉模块 */
export const AdminSocialIndexModel = buildFetchModel({
  url: 'admin/social/index',
  defaultMethod: 'POST'
});

/* 系统模块 */
export const AdminSystemConfigModel = buildFetchModel({
  url: 'admin/config/POST',
  defaultMethod: 'POST'
});

export const AdminSystemLoginModel = buildFetchModel({
  url: 'admin/system/login',
  defaultMethod: 'POST'
});

export const AdminSystemInfoModel = buildFetchModel({
  url: 'admin/system/info',
  defaultMethod: 'POST'
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
