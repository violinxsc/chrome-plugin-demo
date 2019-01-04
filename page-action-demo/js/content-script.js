console.log('js成功加载......');

function executeWork(){
    $(".edui-body-container").text("9snb");
    $("#editorBtnpostcontent").click();
}

// 操作页面的dom
// 注意，必须设置了run_at=document_start 此段代码才会生效
document.addEventListener('DOMContentLoaded', function(){
    setTimeout(executeWork,5000);
});
