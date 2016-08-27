var _ = require('../lib/underscore')
var Backbone = require('../lib/Backbone')
var Router = require('../application/EditorRouter')
var diffUtils = require('../utils/DiffUtils')

var Application = function(){}

_.extend(Application.prototype, {

	start: function()
	{
		this.router = new Router();
		this.router.application = this;
		Backbone.history.start();
	}

,	showView: function(view)
	{
		view.application=this
		if(this.currentView)
			this.currentView.destroy()
		this.currentView = view;
		view.render()
		view.$el.appendTo(document.body)
	}
,	setDiffContent: function(content)
	{
		this.diff = diffUtils.parseDiff(content)
	}
})

module.exports = Application