import { mockFun } from "../common/Fn";

export default {
  "api_admin_trend_index": mockFun({
    "list": [
      {
        "id": 2,
        "type": {
          "id": 1,
          "name": "好友动态"
        },
        "user": {
          "username": "channel",
          "nickname": "无双",
          "avatar": "/static/img/avatar.3727a9e.png",
          "company": "阿里巴巴",
          "position": "技术专家"
        },
        "content": "为什么很多人不读书，一样可以当老板挣大钱？",
        "images": [],
        "time": "12:40",
        "praise_num": 20,
        "share_num": 12,
        "comment_num": 3,
        "created_at": "2019-05-06 22:10"
      },
    ]
  }),
  "api_admin_trend_create": mockFun({

  }),
  "api_admin_trend_category": mockFun({

  }),
  "api_admin_trend_comment": mockFun({
    list: [
      {
        "id": 154,
        "username": "tyer",
        "nickname": "天涯浪子",
        "avatar": "/static/img/avatar.3727a9e.png",
        "company": "中国人寿集团",
        "position": "互联网分析师",
        "content": "这个不错哦"
      }
    ]
  }),
  "api_admin_trend_detail": mockFun({
    "id": 3,
    "user": {
    "username": "zhang",
        "nickname": "张明",
        "avatar": "/static/img/avatar2.bca33e9.png",
        "company": "上海优蝶教育科技有限公司",
        "position": "讲师"
    },
    "content": "UEgood油碟教育：选择我们，终身为您护驾启航；学习终身，职业推荐终身。",
    "images": [
      {
        "id": 20,
        "pic": "/static/img/pic.009084a.png"
      },
    ],
    "time": "12:02",
    "praise_num": 2,
    "share_num": 0,
    "comment_num": 0,
    "comments": [
      {
        "id": 154,
        "username": "tyer",
        "nickname": "天涯浪子",
        "avatar": "/static/img/avatar.3727a9e.png",
        "company": "中国人寿集团",
        "position": "互联网分析师",
        "content": "这个不错哦"
      }
    ]
  })
}
