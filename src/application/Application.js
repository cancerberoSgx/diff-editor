var _ = require('../lib/underscore')
var Backbone = require('../lib/Backbone')
var Router = require('../application/EditorRouter')

var Application = function(){}

_.extend(Application.prototype, {

	start: function()
	{
		var router = new Router();
		router.application = this;
		Backbone.history.start();
	}

,	showView: function(view)
	{
		if(this.currentView)
			this.currentView.destroy()
		this.currentView = view;
		view.render()
		view.$el.appendTo(document.body)
	}
})

module.exports = Application