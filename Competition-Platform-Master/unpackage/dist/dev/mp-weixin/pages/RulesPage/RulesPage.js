"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  _easycom_uni_nav_bar2();
}
const _easycom_uni_nav_bar = () => "../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
if (!Math) {
  _easycom_uni_nav_bar();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      ["left-icon"]: "left",
      color: "#FEFEFE",
      ["background-color"]: "#4F9AF3",
      height: "80rpx"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/lbq04/Documents/HBuilderProjects/Competition-Platform-Master/pages/RulesPage/RulesPage.vue"]]);
wx.createPage(MiniProgramPage);
