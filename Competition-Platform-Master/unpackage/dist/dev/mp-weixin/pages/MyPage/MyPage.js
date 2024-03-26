"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  methods: {
    goToUserInfo() {
      console.log("跳转到个人信息页面");
    },
    goToUserScore() {
      console.log("跳转到个人成绩页面");
    },
    goToAnswerRecord() {
      console.log("跳转到答题记录页面");
    },
    goToPointsStore() {
      console.log("跳转到积分商城页面");
    },
    goToCompetitionRules() {
      console.log("跳转到参赛规则页面");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.goToUserInfo && $options.goToUserInfo(...args)),
    b: common_vendor.o((...args) => $options.goToUserInfo && $options.goToUserInfo(...args)),
    c: common_vendor.o((...args) => $options.goToUserScore && $options.goToUserScore(...args)),
    d: common_vendor.o((...args) => $options.goToAnswerRecord && $options.goToAnswerRecord(...args)),
    e: common_vendor.o((...args) => $options.goToPointsStore && $options.goToPointsStore(...args)),
    f: common_vendor.o((...args) => $options.goToCompetitionRules && $options.goToCompetitionRules(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6bfed0b8"], ["__file", "C:/Users/lbq04/Documents/HBuilderProjects/Competition-Platform-Master/pages/MyPage/MyPage.vue"]]);
wx.createPage(MiniProgramPage);
