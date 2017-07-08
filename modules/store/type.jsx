var TypeAction = require('../action/type.jsx')
var Conf = require('../conf.jsx');

// 第二步 创建store
module.exports = Reflux.createStore({
	// 每一个成员是action对象
	listenables: [TypeAction],
	// 订阅消息
	onChangeType: function (id) {
		// console.log(this, arguments)
		// 处理数据，在database中寻找类型是id的成员
		var result = [];
		Conf.DATABASE.forEach(function (obj, index) {
			// 判断obj的type类型是否等于id
			if (obj.type === id) {
				result.push(obj)
			}
		})
		// console.log(result)
		// 通知组件更新
		this.trigger(result)
	}
})