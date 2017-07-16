var questions = {
	que_1: {
		question: "What is the command to delete a folder in Gitbash?",
		answer: "Rm -r",
		options: ["Del","Mv -r","Rm -r"]
	},
	que_2: {
		question: "Output of XML document can be viewed in ...",
		answer: "Web Browser",
		options: ["Word Processor","Web Browser","Sublime Text"]
	},
	que_3: {
		question: "Which attribute you'll use with TD tag to merge two cells horizontally?",
		answer: "Colspan=2",
		options: ["Colspan=2","Merge=colspan2","Rowspan=2"]
	},
	que_4: {
		question: "Which HTML attribute is used to define inline styles?",
		answer: "Style",
		options: ["Font","Style","Class"]
	},
	que_5: {
		question: "Which of the following is a component of CSS style rule?",
		answer: "All",
		options: ["Selector","Property","All"]
	},
	que_6: {
		question: "Local Browser used for validations on the Web Pages uses?",
		answer: "Javascript",
		options: ["Java","Javascript","Bootstrap"]
	},
	que_7: {
		question: "JavaScript code can be called by using?",
		answer: "Triggering Event",
		options: ["Triggering Event","Fuction","RMI"]
	},
	que_8: {
		question: "JQuery uses CSS selector to select elements?",
		answer: "True",
		options: ["False","True"]
	},
	que_9: {
		question: "JQuery is ...",
		answer: "Javascript Library",
		options: ["Ruby Gem","Javascript Library","Bootstrap library"]
	}
};

var lstQuestions = Object.keys(questions);

function startTimer(){
 	var number = 30;

    var intervalId;

    function run() {
      // if(!intervalId)
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
      number--;
      $("#show-number").text(number);

      if (number === 0) {
        stop();
        //alert("Time Up!");
        displayResults();
      }
    }

    function stop() {
      clearInterval(intervalId);
    }
    run();
    displayQuestions();
}

function displayResults(){
	var displayHTML = "<div id='results-section'><h3 class='done'>All Done!</h3>" +
				"<div class='result'>Correct Answers: <span id='crrt-number'></span></div>" +
				"<div class='result'>Incorrect Answers: <span id='incrrt-number'></span></div>" +
				"<div class='result'>Unanswered: <span id='unans-number'></span></div></div>"
	updateResults();
	$('#questions-section').remove();
	$('#display-section').append(displayHTML);
	populateResults();
}

function populateResults(){
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;

	//var lstQuestions = Object.keys(questions);
	
	for(var i=0; i<arrSelectedVals.length; i++){
		if(arrSelectedVals[i] === (questions[lstQuestions[i]].answer)){
			correct++;
		}
		else if(typeof arrSelectedVals[i] === "undefined") {
			unanswered++;
		}
		else {
			incorrect++;
		}
	}
	
	$('#crrt-number').text(correct);
	$('#incrrt-number').text(incorrect);
	$('#unans-number').text(unanswered);
}

//global variable to store checked values 
var arrSelectedVals = [];

function updateResults(){
	//var lstQuestions = Object.keys(questions);
		
	for(var i=0; i < lstQuestions.length; i++){
		var btnGrpName = "options_"+lstQuestions[i];
		var checkedVal = $('input[name=' + btnGrpName + ']:checked').val();

		arrSelectedVals[i] = checkedVal;
	}
	console.log(arrSelectedVals);
}

function displayQuestions() {
	var displayHTML = "<div id='questions-section'>" +
					"<div class='result'>Time Remaining: <span id='show-number'></span></div>" +
					"<div id='questions-list'>" +
					setQuestions() +
					"</div></div>";
	$('#button-section').remove();
	$('#display-section').append(displayHTML);
}

function setQuestions() {
	//var lstQuestions = Object.keys(questions);
	var que_lst_html = "";
	//console.log(lstQuestions);
	for (var i=0; i < lstQuestions.length; i++) {
		var ques_html = "<h3 class='questions'>" +
			questions[lstQuestions[i]].question +
			"</h3>";
		var arrOptions = questions[lstQuestions[i]].options; 			
		for(var j=0; j<arrOptions.length;j++) {
			ques_html += 
			"<label class='radio-inline'> <input type='radio' name='options_" + 
			lstQuestions[i] + 
			"' class='optradio' value='" +
			arrOptions[j] +
			"'/>" +
			arrOptions[j] +
			"</label>"
		}
		que_lst_html += ques_html;
		//console.log(que_lst_html);
	}
	
	return que_lst_html;
};

function initializePage() {
	var displayHTML = "<div id='button-section'><button type='button' class='btn btn-danger' id='start' onclick='startTimer()'>" +
	"Start</button></div>";

	$('#display-section').append(displayHTML);
};

initializePage()