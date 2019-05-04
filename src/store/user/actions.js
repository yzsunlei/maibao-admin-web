import * as types from './types';
import {
  AdminSystemInfoModel,
  AdminSystemLogoutModel
} from '../../common/rest';

export default {
  // 用户信息
  loadUserInfo({commit}) {
    AdminSystemInfoModel.getInstance().execute().then(data => {
      commit(types.LOAD_USER_INFO, data);
    });
  },
  // 用户退出
  clearUserInfo({commit}) {
    AdminSystemLogoutModel.getInstance().execute().then(data => {
      commit(types.CLEAR_USER_INFO);
    });
  }
}
