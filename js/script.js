inputs=document.querySelectorAll('.time-input-block input');
startBtn=document.querySelector('.start-btn');
startBtnOverflow=document.querySelector('.start-btn-overblock');
clearBtn=document.querySelector('.clear-btn');
clearBtnOverflow=document.querySelector('.clear-btn-overblock');
repeatBtn=document.querySelector('.repeat-btn');
repeatBtnOverflow=document.querySelector('.repeat-btn-overblock');
var hours=0, minutes=0, seconds=0, time, timerCountDown, timeValue, repeatRead=true;
let started=false;


buttonsReset();
startBtn.addEventListener('click', function(){
	repeatBtn.classList.remove('inactive');
	repeatBtnOverflow.classList.remove('inactive');
	if (started){
		pause();
		inputs.forEach(item => 	item.classList.add('paused'));
		startBtn.classList.add('inactive');
		startBtn.style.cursor='pointer';
	}
	else{
		start();
		inputs.forEach(item => 	item.classList.remove('paused'));
		startBtn.classList.remove('inactive');
	}
	if (repeatRead){
		timeValue=time;
		console.log(time);
		repeatRead=false;
	}
});
repeatBtn.addEventListener('click', function(){
	clear();
	buttonsReset();
	repeat();
});
function repeat(){
	console.log(time);
	started=true;
	startBtn.innerHTML='pause';
	clearBtn.classList.remove('inactive');
	clearBtnOverflow.classList.remove('inactive');
	time=timeValue;
	time++;
	timerCountDown=setInterval(function(){ //timer countdown
		if (time>0){ //if time is up (==0) the timer stops
			timeCounter();
			printTime();
		}
		else{
			clear();
			buttonsReset();
		}
	},1000);
}

function start(){
	started=true;
	startBtn.innerHTML='pause';
	clearBtn.classList.remove('inactive');
	clearBtnOverflow.classList.remove('inactive');
	inputsEmpty();
	time=getTime();
	timerCountDown=setInterval(function(){ //timer countdown
		if (time>0){ //if time is up (==0) the timer stops
			timeCounter();
			printTime();
		}
		else{
			clear();
			buttonsReset();
		}
	},1000);
}

function pause(){
	if (started){
		startBtn.innerHTML='continue';
		clearInterval(timerCountDown);
	}
	started=false;
}

clearBtn.addEventListener('click', function(){
	clearInterval(timerCountDown);
	clear();
	repeatRead=true;
	buttonsReset();

});

function buttonsReset(){
	startBtn.innerHTML='start';
	startBtn.classList.remove('inactive');
	startBtnOverflow.classList.remove('inactive');
	clearBtn.classList.add('inactive');
	clearBtnOverflow.classList.add('inactive');
	inputs.forEach(item => 	item.classList.remove('paused'));
}

function inputsEmpty(){
	if (inputs[0].value == ''){
		inputs[0].value='00';
	}
	if (inputs[1].value == ''){
		inputs[1].value='00';
	}
	if (inputs[2].value == ''){
		inputs[2].value='00';
	}
}

function clear(){ //clears the time and input boxes
	hours=0;
	minutes=0;
	seconds=0;
	inputs[0].value='';
	inputs[1].value='';
	inputs[2].value='';
	time=0;
	clearInterval(timerCountDown);
	started=false;
}

function getTime(){ //gets hours minutes and seconds
	hours=inputs[0].value;
	minutes=inputs[1].value;
	seconds=inputs[2].value;
	return +hours*3600 + +minutes*60 + +seconds;
}

function calcTimeHours(t){ //calculates current time in hours
	return Math.floor(t/3600);
}
function calcTimeMinutes(t){ //calculates current time in minutes
	return Math.floor(t/60)%60;
}
function calcTimeSeconds(t){ //calculates current time in seconds
	return Math.floor(t%60);
}

function timeCounter(){ //counts down the time
	time--;
}

function printTime(){ //prints the curreent time into the input boxes
	if (calcTimeHours(time)<10) {
		inputs[0].value='0'+calcTimeHours(time);
	}
	else{
		inputs[0].value=calcTimeHours(time);
	}
	if (calcTimeMinutes(time)<10) {
		inputs[1].value='0'+calcTimeMinutes(time);
	}
	else{
		inputs[1].value=calcTimeMinutes(time);
	}
	if (calcTimeSeconds(time)<10) {
		inputs[2].value='0'+calcTimeSeconds(time);
	}
	else{
		inputs[2].value=calcTimeSeconds(time);
	}
}