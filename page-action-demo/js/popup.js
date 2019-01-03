$(function() {

	// 加载设置
	var defaultConfig = {color: 'white'}; // 默认配置
	chrome.storage.sync.get(defaultConfig, function(items) {
		document.body.style.backgroundColor = items.color;
	});

});

// 打开斗鱼tv
$('#goto-tv').click(e => {
	window.open('https://www.douyu.com/directory/all');
});