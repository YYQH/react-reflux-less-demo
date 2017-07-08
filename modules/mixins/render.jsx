var ITEM_BUM = require('../conf.jsx').ITEM_BUM;

module.exports = {
	// 获取背景图片方法
	getBgImageUrl: function () {
		return 'url(img/item/item' + parseInt(Math.random() * ITEM_BUM) + '.jpg)'
	},
	// 创建列表方法
	createList: function () {
		// this指向组件实例化对象
		return this.state.list.map(function (obj, index) {
			// 为li添加一个随机背景图片
			var styleObj = {
				backgroundImage: this.getBgImageUrl()
			}
			return (
				<li key={index} style={styleObj}>
					<a href={obj.site}>
						<div className="content">
							<h2>{obj.name}</h2>
						</div>
						<div className="layer">
							<p>公司：{obj.company}</p>
							<p>类型：{obj.type}</p>
							<p>描述：{obj.description}</p>
						</div>
					</a>
				</li>
			)
		}.bind(this))
	}
}