var ImageLoader = require('./tools/imageloader.jsx')
var Conf = require('./conf.jsx');
var routes = require('./route/route.jsx');

var TextDom = $('.loader-text span');

new ImageLoader(function (total) {
	TextDom.html('100.00')
	// 加载数据
	$.get('data/sites.json', function (res) {
		// console.log(res)
		// 请求成功，存储数据，更新页面
		if (res && res.errno === 0) {
			// 存储数据
			Conf.DATABASE = res.data;
			// 更新页面
			// 第三步 渲染组件
			ReactDOM.render(routes, $('#app')[0])
			// React.render(<h1>爱创课堂</h1>, $('#app')[0])
		}
	})
}, function (total, num) {
	// 显示进度
	TextDom.html((num / total * 100).toFixed(2))
}, function (total, num) {
	// 显示进度
	TextDom.html((num / total * 100).toFixed(2))
});