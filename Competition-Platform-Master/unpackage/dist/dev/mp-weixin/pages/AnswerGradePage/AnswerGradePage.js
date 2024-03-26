"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  methods: {
    showDropDown() {
      console.log("显示下拉内容");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.showDropDown && $options.showDropDown(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/lbq04/Documents/HBuilderProjects/Competition-Platform-Master/pages/AnswerGradePage/AnswerGradePage.vue"]]);
wx.createPage(MiniProgramPage);
