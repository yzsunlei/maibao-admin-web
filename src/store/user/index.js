import * as types from './types';
import actions from './actions';
import { extend } from 'lodash';

const state = {
  user: null
};

// getters
const getters = {
  getUserInfo: (state) => state.user || JSON.parse(localStorage.getItem('user')) || {}
};

// mutations
const mutations = {
  [types.LOAD_USER_INFO](state, data) {
    state.user = data;
    localStorage.setItem('user', JSON.stringify(data));
  },
  [types.UPDATE_USER_INFO](state, data) {
    state.user = extend({}, state.user, data);
  },
  [types.CLEAR_USER_INFO](state) {
    state.user = null;
    localStorage.removeItem('user');
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
