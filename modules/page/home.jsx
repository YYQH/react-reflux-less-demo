var RenderMethods = require('../mixins/render.jsx');
var Conf = require('../conf.jsx');

// 定义首页组件
module.exports = React.createClass({
	// 通过混合继承方法
	mixins: [RenderMethods],
	// 定义初始化数据
	getInitialState: function () {
		return {
			list: Conf.DATABASE
		}
	},
	render: function () {
		return (
			<div className="inner">
				<ul className="clearfix">{this.createList()}</ul>
			</div>
		)
	}
})