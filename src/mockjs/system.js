import { mockFun } from "../common/Fn";

export default {
  "api_admin_system_login": mockFun(),
  "api_admin_system_info": mockFun({
    "uid": 1,
    "username": "wang",
    "nickname": "王湾",
    "avatar": "/static/img/avatar.3727a9e.png",
    "sex": 1,
    "mobile": "15689658845",
    "email": "wang123@qq.com",
    "company": "阿里巴巴",
    "position": "技术专家",
    "country": "中国",
    "province": "浙江",
    "city": "杭州",
    "profession": "互联网",
    "part": "研发",
    "homeplace": "湖北",
    "hometown": "宜昌",
    "school": "武汉大学",
    "tags": "技术牛人,成熟稳重",
    "friend_num": 272,
    "influence_num": 62,
    "visited_num": 236,
    "grade": 3,
    "signature": "梦想还是要有的，万一实现了呢"
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
