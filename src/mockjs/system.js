import { mockFun } from "../common/Fn";

export default {
  "api_admin_system_login": mockFun(),
  "api_admin_system_info": mockFun({
    "uid": 1,
    "username": "admin",
    "nickname": "管理员",
    "avatar": "/static/img/avatar.3727a9e.png",
    "mobile": "15689658845",
    "email": "wang123@qq.com",
  }),
  "api_admin_system_config": mockFun({
    "list": [
      {
        "id": 2,
        "key": "xxx",
        "value": "XXX",
      },
    ]
  }),
}
