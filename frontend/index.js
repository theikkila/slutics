var module = angular.module('Slutics', []);
 
module.service('register', function(){
    this.event = function (name, metadata) {
    	console.log("Registered event", name, "with", metadata);
    };
    this.kv = function (key, value, metadata) {
    	console.log("Registered value-change", key,"=",value, "with", metadata);
    };
    this.timer = function (name, func, metadata) {
    	var start = new Date();
    	func(function timer_callback () {
    		var end = new Date();
    		var duration = end-start;
    		console.log("Registered timer-event", name, "t. ", duration, "ms", metadata);
    	});
    };
});