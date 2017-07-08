var RenderMethods = require('../mixins/render.jsx');
var Conf = require('../conf.jsx');
var TypeStore = require('../store/type.jsx')

module.exports = React.createClass({
	// 混合 
	// 第三步 为视图绑定store
	mixins: [RenderMethods, Reflux.connect(TypeStore, 'list')],
	// 初始化数据
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