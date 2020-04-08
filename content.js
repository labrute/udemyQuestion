// Find all data
var exportData = function () {
    var questionNum = $('div.mc-quiz-question--header--3fsHJ').find("span").text();
    var question = $('.mc-quiz-question--question-prompt--2_dlz').find("p").text(); // id is question-prompt
    if (!question || question === '') {
        question = $('.mc-quiz-question--question-prompt--2_dlz').text();
    }
    var explain = $('.feedback-alert--feedback--3R277').text();
    var answers = [];
    var anw = $('.mc-quiz-answer--question-copy--314BC').toArray();
    for (var i = 0; i < anw.length; i++) {
        answers.push(anw[i].innerText);
    }

    console.log('Question number :' + questionNum);
    console.log('Question : ' + question);
    console.log('Answers : ' + answers.join('\n'));

    if (questionNum !== '' && question !== '') {
        return questionNum + '\n' + question + '\n' + answers.join('\n') + '\n' + 'EXPLAIN : ' + explain;
    } else {
        return 'Nothing found !'
    }
};

// message listener for background
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    var question = exportData();
    sendResponse({result: question});
});

