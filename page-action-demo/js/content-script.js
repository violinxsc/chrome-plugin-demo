console.log('js成功加载......');

function executeWork(){
    var textArray = ["9snb","zzwdjs","95至尊","水贴之王","9526永不言弃",
    "保安团牛皮","我叫无言名","你猜下一个会是谁","无言名牛皮","游皇团牛皮"]
    var randomStr = textArray[Math.floor(Math.random()*10)] || "9snb"
    $(".edui-body-container").text(randomStr);
    $("#editorBtnpostcontent").click();
}

// 操作页面的dom
// 注意，必须设置了run_at=document_start 此段代码才会生效
document.addEventListener('DOMContentLoaded', function(){
    setTimeout(executeWork,Math.random()*10000);
    // 防止操作繁忙
    setTimeout(executeWork,20000);
});
