import { mockFun } from "../common/Fn";

export default {
  "api_admin_social_index": mockFun({
    "list": [
      {
        "c_id": 10,
        "c_name": "全部好友",
        "c_num": 36,
        "c_list": [
          {
            "c_id": 2,
            "c_name": "熟识好友",
            "c_num": 8,
          },
          {
            "c_id": 3,
            "c_name": "相识好友",
            "c_num": 18,
          },
          {
            "c_id": 4,
            "c_name": "初识好友",
            "c_num": 10,
          },
        ]
      },
      {
        "c_id": 20,
        "c_name": "学校",
        "c_num": 28,
        "c_list": [
          {
            "c_id": 21,
            "c_name": "北京大学",
            "c_num": 8,
          },
          {
            "c_id": 22,
            "c_name": "清华大学",
            "c_num": 18,
          },
          {
            "c_id": 23,
            "c_name": "武汉大学",
            "c_num": 10,
          },
        ]
      },
      {
        "c_id": 30,
        "c_name": "行业方向",
        "c_num": 16,
        "c_list": [
          {
            "c_id": 31,
            "c_name": "IT互联网|研发",
            "c_num": 8,
          },
          {
            "c_id": 32,
            "c_name": "IT互联网|产品",
            "c_num": 18,
          },
          {
            "c_id": 33,
            "c_name": "IT互联网|测试",
            "c_num": 10,
          },
        ]
      },
    ]
  })
}
