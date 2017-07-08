var BANNER_NUM = require('../conf.jsx').BANNER_NUM;
var ITEM_BUM = require('../conf.jsx').ITEM_BUM;

/**
 * 创建图片加载器
 * @done 		所有图片加载完成时候的回调函数
 * @success 	图片加载成功时候的回调函数
 * @fail 		图片加载失败时候的回调函数
 **/ 
var ImageLoader = function (done, success, fail) {
	// 保存回调函数
	this.done = done;
	this.success = success;
	this.fail = fail;
	// 加载图片
	this.init();
}
ImageLoader.prototype = {
	// 初始化程序
	init: function () {
		// 定义一些数据
		// 保存banner图片数
		this.bannerNum = BANNER_NUM;
		// 保存所有item图片数
		this.itemNum = ITEM_BUM;
		// 保存总数
		this.total = this.bannerNum + this.itemNum;
		// 加载图片
		this.loader();
	},
	// 获取banner图片地址的方法
	getBannerUrl: function (num) {
		return 'img/banner/banner' + num + '.jpg';
	},
	getItemUrl: function (num) {
		return 'img/item/item' + num + '.jpg';
	},
	// 加载图片
	loader: function () {
		// 首先加载banner
		var bannerNum = this.bannerNum;
		var itemNum = this.itemNum;
		while(--bannerNum >= 0) {
			this.loadImage(this.getBannerUrl(bannerNum), true)
		}
		// 加载item图片
		while(--itemNum >= 0) {
			this.loadImage(this.getItemUrl(itemNum), false)
		}
	},
	/**
	 * 处理num数
	 * @isBanner 	是否是banner图片
	 ***/
	dealNum: function (isBanner) {
		// 如果是baner，减bannerNum，否则减itemNum
		if (isBanner) {
			--this.bannerNum;
		} else {
			--this.itemNum
		}
	},
	/**
	 * 检测是否完成
	 ***/
	checkDone: function () {
		if (this.itemNum === 0 && this.bannerNum === 0) {
			this.done(this.total);
		}
	},
	/**
	 * 加载图片
	 * @url 		图片地址
	 * @isBanner 	是否是banner图片
	 ***/
	loadImage: function (url, isBanner) {
		// console.log(this.bannerNum, this.itemNum)
		// 创建图片加载器
		var img = new Image();
		// 定义加载成功和失败时候的回调函数
		img.onload = function () {
			this.dealNum(isBanner);
			// console.log(1111)
			// 此时bannernum和itemnum表示没有加载完成的
			// 加载完成的就是 总数 减去 没有加载完成的
			this.success(this.total, this.total - this.itemNum - this.bannerNum);
			// 检测完成
			this.checkDone();
		}.bind(this)
		// 加载失败
		img.onerror = function () {
			this.dealNum(isBanner)
			// console.log(222)
			this.fail(this.total, this.total - this.itemNum - this.bannerNum);
			// 检测完成
			this.checkDone();
		}.bind(this)
		// 加载图片
		img.src = url;
		// console.log(url, isBanner)
	}
}

module.exports = ImageLoader;