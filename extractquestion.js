var loadBtn = document.getElementById('load');
var copyBtn = document.getElementById('copy');
var exportedQuestion = document.getElementById('exportedQuestion');

loadBtn.onclick = function (element) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {command: "extract"}, function (response) {
            exportedQuestion.value = response.result;
        });
    });
};

copyBtn.onclick = function (element) {
    exportedQuestion.select();
    document.execCommand('copy');
};

