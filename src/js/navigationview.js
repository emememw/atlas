var NavigationView = {};
global.window.NavigationView = NavigationView;

NavigationView.name = "navigationview";

NavigationView.load = function($element) {

	var navigationItems = [];
	navigationItems.push(new NavigationItem("Cars", "TestView"));

	UiManager.loadTemplate(NavigationView.name, navigationItems, $element);

};

function NavigationItem(displayName, view) {
	this.displayName = displayName;
	this.view = view;
}


