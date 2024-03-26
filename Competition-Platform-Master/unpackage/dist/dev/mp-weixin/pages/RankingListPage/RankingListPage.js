"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      rankingData: [
        { rank: "1", avatar: "/static/tabbar/952a98989657a93a2dd17da4ffbc5e4.jpg", nickname: "机器猫一号", score: "100" },
        { rank: "2", avatar: "/static/tabbar/952a98989657a93a2dd17da4ffbc5e4.jpg", nickname: "机器猫二号", score: "90" },
        { rank: "3", avatar: "/static/tabbar/952a98989657a93a2dd17da4ffbc5e4.jpg", nickname: "机器猫三号", score: "80" }
      ]
    };
  },
  methods: {
    showRanking() {
      console.log("显示排行榜");
    },
    showMyScore() {
      console.log("显示我的成绩");
    },
    rankingChange(event) {
      console.log("排行榜选择变化", event);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.showRanking && $options.showRanking(...args)),
    b: common_vendor.o((...args) => $options.showMyScore && $options.showMyScore(...args)),
    c: common_vendor.f($data.rankingData, (item, index, i0) => {
      return {
        a: common_vendor.t(item.rank),
        b: item.avatar,
        c: common_vendor.t(item.nickname),
        d: common_vendor.t(item.score),
        e: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-56eaf8ec"], ["__file", "C:/Users/lbq04/Documents/HBuilderProjects/Competition-Platform-Master/pages/RankingListPage/RankingListPage.vue"]]);
wx.createPage(MiniProgramPage);
