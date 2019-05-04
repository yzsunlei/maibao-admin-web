import { mockFun } from "../common/Fn";

export default {
  "api_trend_friend": mockFun({
    "list": [
      {
        "id": 2,
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
        "comment_num": 3
      },
      {
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
            "id": 14,
            "pic": "/static/img/pic2.3a4c953.png"
          },
          {
            "id": 20,
            "pic": "/static/img/pic.009084a.png"
          },
        ],
        "time": "12:02",
        "praise_num": 2,
        "share_num": 0,
        "comment_num": 0
      }
    ]
  }),
  "api_trend_follow": mockFun({
    "list": [
      {
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
            "id": 14,
            "pic": "/static/img/pic2.3a4c953.png"
          },
        ],
        "time": "12:02",
        "praise_num": 2,
        "share_num": 0,
        "comment_num": 0
      }
    ]
  }),
  "api_trend_followToutiao": mockFun({
    "list": [
      {
        "id": 5,
        "title": "不就是个短信登录api吗，很复杂吗",
        "pic": "/static/img/pic.009084a.png",
        "cofriend_num": 6
      },
      {
        "id": 9,
        "title": "有赞百亿日志系统架构设计",
        "pic": "/static/img/pic.009084a.png",
        "cofriend_num": 12
      },
      {
        "id": 12,
        "title": "Java程序员必备的开发神器",
        "pic": "/static/img/pic.009084a.png",
        "cofriend_num": 2
      },
    ]
  }),
  "api_trend_followRecommandTopic": mockFun({
    "list": [
      {
        "id": 2,
        "title": "硬件研发社交群",
        "pic": "/static/img/avatar1.dbdb54a.png"
      },
      {
        "id": 3,
        "title": "职场必备学习",
        "pic": "/static/img/avatar.3727a9e.png"
      },
      {
        "id": 4,
        "title": "运营同行交流",
        "pic": "/static/img/avatar3.ebcb3a9.png"
      },
    ]
  }),
  "api_trend_followRecommandLove": mockFun({
    "list": [
      {
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
            "id": 14,
            "pic": "/static/img/pic.009084a.png"
          },
        ],
        "time": "12:02",
        "praise_num": 2,
        "share_num": 0,
        "comment_num": 0
      }
    ]
  }),
  "api_trend_followAdd": mockFun(),
  "api_trend_work": mockFun({
    "list": [
      {
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
            "id": 14,
            "pic": "/static/img/pic2.3a4c953.png"
          },
          {
            "id": 20,
            "pic": "/static/img/pic.009084a.png"
          },
        ],
        "time": "12:02",
        "praise_num": 2,
        "share_num": 0,
        "comment_num": 0
      }
    ]
  }),
  "api_trend_detail": mockFun({
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
  }),
  "api_trend_send": mockFun(),
  "api_trend_praise": mockFun(),
  "api_trend_comment": mockFun(),
  "api_trend_share": mockFun(),
}
