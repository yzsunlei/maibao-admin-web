import Mock from "mockjs"
import trendMock from "./trend"
import inforMock from "./infor"
import socialMock from "./social"
import userMock from "./system"

// trend
Mock.mock("/api/admin/trend/index", trendMock.api_admin_trend_index);
Mock.mock("/api/admin/trend/create", trendMock.api_admin_trend_create);
Mock.mock("/api/admin/trend/category", trendMock.api_admin_trend_category);
Mock.mock("/api/admin/trend/comment", trendMock.api_admin_trend_comment);

// infor
Mock.mock("/api/admin/infor/index", inforMock.api_admin_infor_index);
Mock.mock("/api/admin/infor/detail", inforMock.api_admin_infor_detail);

// social
Mock.mock("/api/admin/social/index", socialMock.api_admin_social_index);

// system
Mock.mock("/api/admin/system/login", userMock.api_admin_system_login);
Mock.mock("/api/admin/system/info", userMock.api_admin_system_info);
Mock.mock("/api/admin/system/config", userMock.api_admin_system_config);
