var  timerId;
var  searchBox  =  document.getElementById('search-box');

function  callTheFunction() {
	var  debounce  =  document.getElementById('debounce-count');
	var  debounceCount  =  debounce.innerHTML  ||  0;
	
	debounce.innerHTML  =  parseInt(debounceCount) +  1
}


var  debounceFunction  =  function (func, delay) {
	// Cancels the setTimeout method execution
	clearTimeout(timerId)

	// Executes the func after delay time.
	timerId  =  setTimeout(func, delay)
}

// Event listener on the input box
searchBox.addEventListener('input', function () {
	var  eventCount  =  document.getElementById('event-count');
	var  eventCallCount  =  eventCount.innerHTML  ||  0;
	eventCallCount  =  parseInt(eventCallCount) +  1;

	
	eventCount.innerHTML  =  eventCallCount;


	debounceFunction(callTheFunction, 1000)
})