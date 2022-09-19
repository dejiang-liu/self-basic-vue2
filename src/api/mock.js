import * as API from '@/utils/request';

export const getMemberList = (data) => {
  return API.GET('mock/member', data)
}
export const getUrl = () => {
  return API.GET('mock/', {})
}
// 获取柱状图数据
export const lineDataList = () => {
  return API.POST('mock/lineData', {})
}