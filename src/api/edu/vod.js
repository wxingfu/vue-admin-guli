import request from '@/utils/request'

export default {

  removeById(id) {
    return request({
      url: `/vod/video/remove/${id}`,
      method: 'delete'
    })
  }
}
