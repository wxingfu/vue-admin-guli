import request from '@/utils/request'

export default {

  //添加小节
  addVideo(video) {
    return request({
      url: '/edu/video/addVideo',
      method: 'post',
      data: video
    })
  },
  // 根据ID查询小节
  getVideo(videoId) {
    return request({
      url: `/edu/video/getVideoInfo/${videoId}`,
      method: 'get'
    })
  },

  updateVideo(video){
    return request({
      url: '/edu/video/updateVideo',
      method: 'post',
      data: video
    })
  },

  //删除小节
  deleteVideo(id) {
    return request({
      url: '/edu/video/' + id,
      method: 'delete'
    })
  }
}
