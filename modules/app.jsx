var Header = require('./component/header.jsx');
var SearchAction = require('./action/search.jsx');
var TypeAction = require('./action/type.jsx');

// 定义应用程序组件
module.exports = React.createClass({
	render: function () {
		return (
			<div>
				<Header></Header>
				{/**/}
				<div className="app-main container">
					{this.props.children}
				</div>
			</div>
		)
	},
	// 封装checkRoute
	checkRoute: function () {
		// console.log(this.props)
		// 如果是/type/开头的，就是type类的
		if (this.props.location.pathname.indexOf('/type/') === 0) {
			// 第四步 发送type类消息
			TypeAction.changeType(this.props.params.id)
		}
		// 否则以/search/开头的，就是search类的
		else if (this.props.location.pathname.indexOf('/search/') === 0) {
			// 第四步 发送search类消息
			SearchAction.changeSearch(this.props.params.query)
		}
	},
	// 创建完成，检测参数
	componentDidMount: function () {
		// console.log(this.props)
		this.checkRoute()
	},
	// 存在期还要检测
	componentDidUpdate: function () {
		this.checkRoute()
	}
})