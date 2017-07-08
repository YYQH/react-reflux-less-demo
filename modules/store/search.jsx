var SearchAction = require('../action/search.jsx')
var Conf = require('../conf.jsx');

// 第二步 创建store
module.exports = Reflux.createStore({
	listenables: [SearchAction],
	onChangeSearch: function (query) {
		// console.log(arguments)
		// 根据query对数据过滤
		var result = [];
		Conf.DATABASE.forEach(function (obj, index) {
			// obj的所有属性是否包含query
			for (var i in obj) {
				// obj[i]表示属性值
				if (obj[i].indexOf(query) >= 0) {
					result.push(obj)
					// 保存了就不需要再遍历了
					return;
				}
			}
		})
		// 更新数据
		this.trigger(result);
	}
})