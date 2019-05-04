import { ajax, extend } from 'jquery';
import { Message } from 'element-ui';
import config from '../common/config';
import {
  get,
  cloneDeep
} from 'lodash';
import router  from '../routes';

class Rest {
  /**
   * 默认配置
   */
  static defaultConfig = {
    domain: config.restprefix,
    url: null,
    params: {},
    defaultMethod: 'POST',
    // 请求前置处理
    __before: () => {},
    // 请求后置处理
    __after: (data) => {
      if (data.code == 100 || data.code == 101) {
        Message({
          message: '该操作需要登录，请先登录',
          type: 'error'
        });
        setTimeout(() => {
          router.push({name: 'system_login'})
        }, 1000);
      }
    },
    // 请求抛出异常处理
    __catch: (err) => {
      Message({
        message: err.msg || '出错了，请重试',
        type: 'error'
      });
    }
  };

  // 所有请求地址
  static __url = [];
  // 当前请求配置
  static __config = {};

  /**
   * 参数拼接
   */
  static buildUrl(api, params) {
    let url = api.replace(/:(\w+)/g, function($0, $1){
      let param = ($1 in params) ? params[$1] : "";
      delete params[$1];
      return (param === null || param === undefined) ? '' : param;
    });
    return url.replace(/\/+$/, '');
  }

  /**
   * 构造函数
   */
  constructor(config) {
    if (Rest.__url.indexOf(config.url) > -1) {
       throw new Error("can't define same model");
    }
    Rest.__url.push(config.url);

    this.__config = extend({}, Rest.defaultConfig, config);
  }

  /**
   * 构建发送请求
   */
  execute(params) {
    let method = this.__config.defaultMethod;
    let url = this.__config.domain + this.__config.url;
    if (params) {
      params = cloneDeep(params);
    }
    url = Rest.buildUrl(url, params || {});

    return new Promise((resolve, reject) => {
      ajax({
        url: url,
        type: method,
        data: params,
        xhrFields: {
          withCredentials: true
        },
        success: (data) => {
          try {
            data = JSON.parse(data);
          } catch(e) {}
          this.__config.__after(data);
          if(data.code){
            this.__config.__catch(data);
            reject(data);
          } else  {
            resolve(data.data);
          }
        },
        error: (err) => {
          this.__config.__catch(err);
          reject(err);
        }
      });
    });
  }
}

export default Rest;
