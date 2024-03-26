"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      comList: [
        {
          img: "https://p3.ssl.qhimgs1.com/sdr/400__/t041856d2ce0f8cd1bd.jpg",
          name: "橘子",
          commdityPrice: 1e3
        },
        {
          img: "https://p3.ssl.qhimgs1.com/sdr/400__/t041856d2ce0f8cd1bd.jpg",
          name: "橘子",
          commdityPrice: 1e3
        },
        {
          img: "https://p3.ssl.qhimgs1.com/sdr/400__/t041856d2ce0f8cd1bd.jpg",
          name: "橘子",
          commdityPrice: 1e3
        },
        {
          img: "https://p3.ssl.qhimgs1.com/sdr/400__/t041856d2ce0f8cd1bd.jpg",
          name: "橘子",
          commdityPrice: 1e3
        },
        {
          img: "https://p3.ssl.qhimgs1.com/sdr/400__/t041856d2ce0f8cd1bd.jpg",
          name: "橘子",
          commdityPrice: 1e3
        }
      ]
      //商品列表
    };
  },
  onShow() {
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
      color: "#FEFEFE",
      ["background-color"]: "#4F9AF3",
      height: "80rpx"
    }),
    b: common_vendor.f($data.comList, (item, index, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.commdityPrice),
        d: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-151e2b5d"], ["__file", "C:/Users/lbq04/Documents/HBuilderProjects/Competition-Platform-Master/pages/ShopPage/ShopPage.vue"]]);
wx.createPage(MiniProgramPage);
