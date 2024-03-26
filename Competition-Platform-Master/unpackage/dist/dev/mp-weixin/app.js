"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/AnswerPage/AnswerPage.js";
  "./pages/WelcomePage/WelcomePage.js";
  "./pages/HomePage/HomePage.js";
  "./pages/RegisterPage/RegisterPage.js";
  "./pages/LoginPage/LoginPage.js";
  "./pages/RankingListPage/RankingListPage.js";
  "./pages/LotteryPage/LotteryPage.js";
  "./pages/MyPage/MyPage.js";
  "./pages/AnswerPage_Change/AnswerPage_Change.js";
  "./pages/AnswerGradePage/AnswerGradePage.js";
  "./pages/PersonalGradePage/PersonalGradePage.js";
  "./pages/AnswerRecordPage/AnswerRecordPage.js";
  "./pages/PersonalInformationPage/PersonalInformationPage.js";
  "./pages/ShopPage/ShopPage.js";
  "./pages/RulesPage/RulesPage.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/lbq04/Documents/HBuilderProjects/Competition-Platform-Master/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
