// pages/skill/skill.js
const innerAudioContext = wx.createInnerAudioContext({
  useWebAudioImplement: false 
})
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  //播放音频
  
  call1(e){
    
    innerAudioContext.src = '/music/刘耀文-Got You.mp3'
    innerAudioContext.play() // 播放
  },
  pause1(e){
    
    innerAudioContext.src = '/music/刘耀文-Got You.mp3'
    innerAudioContext.pause() // 暂停
  },
  call2(e){
    
    innerAudioContext.src = '/music/刘耀文-Falling You.mp3'
    innerAudioContext.play() // 播放
  },
  pause2(e){
    
    innerAudioContext.src = '/music/刘耀文-Falling You.mp3'
    innerAudioContext.pause() // 暂停
  },
  call3(e){
    innerAudioContext.src = '/music/瑜.mp3'
    innerAudioContext.play() // 播放
  },
  pause3(e){
    
    innerAudioContext.src = '/music/瑜.mp3'
    innerAudioContext.pause() // 暂停
  },
  call4(e){
    innerAudioContext.src = '/music/世界上的另一个我.mp3'
    innerAudioContext.play() // 播放
  },
  pause4(e){
    
    innerAudioContext.src = '/music/世界上的另一个我.mp3'
    innerAudioContext.pause() // 暂停
  },
  call5(e){
    innerAudioContext.src = '/music/不为什么.mp3'
    innerAudioContext.play() // 播放
  },
  pause5(e){
    
    innerAudioContext.src = '/music/不为什么.mp3'
    innerAudioContext.pause() // 暂停
  },
  call6(e){
    innerAudioContext.src = '/music/佳人.mp3'
    innerAudioContext.play() // 播放
  },
  pause6(e){
    
    innerAudioContext.src = '/music/佳人.mp3'
    innerAudioContext.pause() // 暂停
  },
  enlarge(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  

})