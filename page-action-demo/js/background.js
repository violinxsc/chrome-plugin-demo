chrome.runtime.onInstalled.addListener(function(){
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
		chrome.declarativeContent.onPageChanged.addRules([
			{
				conditions: [
					// 只有打开斗鱼才显示pageAction
					new chrome.declarativeContent.PageStateMatcher({pageUrl: {urlContains: 'douyu.com'}})
				],
				actions: [new chrome.declarativeContent.ShowPageAction()]
			}
		]);
	});
});
