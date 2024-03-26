"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      number: "第一题",
      type: "单选题",
      problem: "1、1935年12月，毛泽东所作的____的报告，阐明了党的抗日民族统一战线的新政策，系统地说明了党的政治策略上的诸问题。",
      list: [
        { id: 1, option: "A.", text: "《论反对日本帝国主义的策略》" },
        { id: 2, option: "B.", text: "《实践论》" },
        { id: 3, option: "C.", text: "《中国革命战争的战略问题》" }
      ],
      orderTypeLise: [
        //name-标题 icon-图标
        {
          name: "上一题",
          icon: "1.png"
        },
        {
          name: "解析",
          icon: "2.png"
        },
        {
          name: "1/10",
          icon: "3.png"
        },
        {
          name: "加入收藏",
          icon: "4.png"
        },
        {
          name: "下一题",
          icon: "5.png"
        }
      ],
      correct_answer: "A",
      analysis: "这是毛泽东在陕北瓦窑堡党的活动分子会议上所作的报告。毛泽东的这个报告是在一九三五年十二月中共中央政治局瓦窑堡会议之后作的。这一次政治局会议批评了党内那种认为中国民族资产阶级不可能和中国工人农民联合抗日的错误观点，决定了建立抗日民族统一战线的策略，是一次极关重要的会议。毛泽东根据中央决议在这里充分地说明了和民族资产阶级在抗日的条件下重新建立统一战线的可能性和重要性，着重地指出共产党和红军在这个统一战线中的具有决定意义的领导作用，指出了中国革命的长期性，批判了党内在过去长时期内存在着的狭隘的关门主义和对于革命的急性病——这些是党和红军在第二次国内革命战争时期遭受严重挫折的基本原因。 "
    };
  },
  onLoad() {
  },
  methods: {}
};
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  _easycom_uni_nav_bar2();
}
const _easycom_uni_nav_bar = () => "../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
if (!Math) {
  _easycom_uni_nav_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      ["left-icon"]: "left",
      ["left-text"]: "返回",
      color: "#FEFEFE",
      ["background-color"]: "#4F9AF3",
      height: "80rpx"
    }),
    b: common_vendor.t($data.number),
    c: common_vendor.t($data.type),
    d: common_vendor.t($data.problem),
    e: common_vendor.f($data.list, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.option),
        b: common_vendor.t(item.text)
      };
    }),
    f: common_vendor.f($data.orderTypeLise, (row, index, i0) => {
      return {
        a: "../../static/" + row.icon,
        b: common_vendor.t(row.name),
        c: row.name,
        d: common_vendor.o(($event) => _ctx.toOrderType(index), row.name)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/lbq04/Documents/HBuilderProjects/Competition-Platform-Master/pages/AnswerPage/AnswerPage.vue"]]);
wx.createPage(MiniProgramPage);
