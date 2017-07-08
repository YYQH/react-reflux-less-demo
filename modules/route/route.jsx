var App = require('../app.jsx')
var Home = require('../page/home.jsx')
var Search = require('../page/search.jsx')
var Type = require('../page/type.jsx')

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

// 第二步 定义路由规则
module.exports = (
	<Router>
		<Route path="/" component={App}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="type/:id" component={Type}></Route>
			<Route path="search/:query" component={Search}></Route>
			{/*输入ickt路由，进入首页
			<ReactRouter.Redirect path="ickt" to="/" />*/}
		</Route>
	</Router>
)