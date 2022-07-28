	onmessage = function(e){
		console.log(time);
		timeCounter();
		printTime();
		postMessage(time);
	}