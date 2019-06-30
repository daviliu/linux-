// pages/userinfo/userinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
userinfo:[
  {
    name:'正在加载',
    avatar:'/images/avatar.jpg',
    pwd:'*******',
    qian:'正在加载',
    sex:'男',
    phone:'正在加载',
  }
]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
console.log(e.name)
var that = this 
wx.request({
  url: 'http://212.64.122.38/personinfo',
  data:{
    name:e.name
  },
  success(res){
    console.log(res.data)
    that.setData({
      userinfo: res.data
    })
 
  }
  
})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})