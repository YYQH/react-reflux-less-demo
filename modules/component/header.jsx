// header组件
module.exports = React.createClass({
	// 返回首页
	goHome: function () {
		// 将hash变成/
		// location.hash = '/'
		// 建议的方式
		ReactRouter.hashHistory.replace('/')
	},
	// 进入搜索页面方法
	gotoSearch: function (e) {
		// 当点击回车键时候进入搜索页面
		if (e.keyCode === 13) {
			// 进入搜索页面
			ReactRouter.hashHistory.replace('/search/' + e.target.value)
			// 将搜索框清空
			e.target.value = '';
		}
		// console.log(e.target.value, this.refs.inp.value)
	},
	render: function () {
		return (
			<div className="header">
				<div className="container">
					<input type="text" ref="inp" onKeyUp={this.gotoSearch} className="pull-right"/>
					<img onClick={this.goHome} src="img/logo.png" alt="" className="pull-left"/>
					<ul className="nav nav-pills nav-justified">
						<li>
							<a href="#/type/movie">视频</a>
						</li>
						<li>
							<a href="#/type/games">游戏</a>
						</li>
						<li>
							<a href="#/type/news">新闻</a>
						</li>
						<li>
							<a href="#/type/sports">体育</a>
						</li>
						<li>
							<a href="#/type/buy">购物</a>
						</li>
						<li>
							<a href="#/type/friends">社交</a>
						</li>
					</ul>
				</div>
				<div className="banner banner-1"></div>
			</div>
		)
	}
})