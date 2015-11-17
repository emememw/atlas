var TestView = {};
global.window.TestView = TestView;

TestView.name = "testview";

TestView.load = function($element) {

	console.log("load");

	UiManager.loadTemplate(TestView.name, [
		{
			name : "bmw",
			price : 1337
		},
		{
			name : "ferrari",
			price : 9000
		}
	], $element);
	
	/*$.ajax({
		url : "http://"+window.location.host+":8080/cars",
		dataType : "jsonp",
	}).done(function(data) {
		console.log("done");
		console.log(UiManager);
		UiManager.loadTemplate(TestView.name, data);
	}).fail(function() {
		console.log("fail");
		UiManager.showError();	
	});*/
};

