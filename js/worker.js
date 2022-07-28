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
			clearInterval(timerCountDown);
			clear();
			repeatRead=true;
			buttonsReset();
			clearCircle();
			popUp.style.top='0';
			html.style.filter='blur(5px)';
			htmlOverflow.style.zIndex='1';
			audio.play();
		}
	},1000);
}