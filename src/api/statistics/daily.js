import request from '@/utils/request'

export default {
  createStatistics(day) {
    return request({
      url: `/statistics/daily/${day}`,
      method: 'post'
    })
  },
  showChart(searchObj) {
    return request({
      url: `/statistics/daily/showChart/${searchObj.begin}/${searchObj.end}/${searchObj.type}`,
      method: 'get'
    })
  }
}
