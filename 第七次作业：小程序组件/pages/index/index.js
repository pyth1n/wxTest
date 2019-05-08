//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      {
        link: '/pages/index/index',
        url: '/images/1.jpg'
      }, {
        link: '/pages/logs/logs',
        url: '/images/2.jpg'
      }, {
        link: '/pages/mine/mine',
        url: '/images/3.jpg'
      }
    ],
    navbar: ['首页', '新闻', '活动', '更多'],
    currentTab: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 3000,
  },
  //事件处理函数
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
})
