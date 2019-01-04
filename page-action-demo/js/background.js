chrome.runtime.onInstalled.addListener(function(){
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
		chrome.declarativeContent.onPageChanged.addRules([
			{
				conditions: [
					// 只有打开斗鱼才显示pageAction
					new chrome.declarativeContent.PageStateMatcher({pageUrl: {urlContains: '//yuba.douyu.com/p/943673931545027287'}})
				],
				actions: [new chrome.declarativeContent.ShowPageAction()]
			}
		]);
	});
});
// 右键添加跳转至斗鱼TV
chrome.contextMenus.create({
	title: '去2009鱼吧',
	onclick: function()	{
		// 注意不能使用location.href，因为location是属于background的window对象
		chrome.tabs.create({url: 'https://yuba.douyu.com/group/newall/3477579'});
	}
});
