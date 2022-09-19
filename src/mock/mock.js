const Mock = require('mockjs');
// 成员列表
const memberList = () => {
  const data = Mock.mock({
    'memberList|10': [
      {
        'id|+1': 0, // 自增长+1，初始值为0
        'username': /^[a-zA-Z1-9]{4,8}$/, // 随机生成用户名
        'phone': /^1[34578]\d{9}$/, // 随机生成手机号
        'age|18-66': 1, // 随机生成18-66之间的数字
        'order|2-3': {monday: 'sunny', tuesday: 'rainy', wednesday: 'winday', thirday: 'cloudy'}, // 随机获取2-3个属性
      }
    ]
  })
  return {code: 200, data, msg: 'success'};
}
// 柱状图数据
const lineData = () => {
  const data = Mock.mock({
    'dataList|10': [
      {
        'id|1': 0,
        'username': /^[a-zA-Z]{4-8}$/,
        'num|1-99': 1,
      }
    ]
  })
  return {code: 200, data, msg: 'success'}
}

Mock.mock('/mock/member', 'get', memberList);
Mock.mock('/mock/lineData', 'post', lineData);
Mock.mock('/', 'get', 'aaaa')