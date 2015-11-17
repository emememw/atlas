var UiManager = {};
global.window.UiManager = UiManager;

UiManager.loadView = function(view, $element) {
	if(!$element) {
		$element = $("#content");
	}
	UiManager.setLoadingDivVisibility(true, function() {
		view.load($element);
	});
};

UiManager.showError = function() {
	UiManager.setLoadingDivVisibility(false);
	alert("error!");
};

UiManager.loadTemplate = function(name, context, $element) {
	var template = Handlebars.templates[name];
	$(window).scrollTop(0);
	UiManager.setLoadingDivVisibility(false); 
	$element.html(template(context));
};

UiManager.setLoadingDivVisibility = function(state, callback) {
	if(state) {
		$("#loading").fadeIn(500, callback);
	} else {
		$("#loading").fadeOut(500, callback);
	}
	
};


