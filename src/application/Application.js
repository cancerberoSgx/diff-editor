var _ = require('../lib/underscore')
var Backbone = require('../lib/Backbone')
var Router = require('../application/EditorRouter')
var Workspace = require('./Workspace')
var diffUtils = require('../utils/DiffUtils')

// @module diff-editor
// @class Application
var Application = function(){}

_.extend(Application.prototype, {

	// @method start
	start: function()
	{
		this.workspace = new Workspace()
		
		//start routers & history
		this.router = new Router();
		this.router.application = this;
		Backbone.history.start();
	}

	// @method showView @param {Backbone.View} view
,	showView: function(view)
	{
		view.application=this
		if(this.currentView)
			this.currentView.destroy()
		this.currentView = view;
		view.render()
		view.$el.appendTo(document.body)
	}

	// @method setDiffContent @param {String} content
,	setDiffContent: function(content)
	{
		this.diff = diffUtils.parseDiff(content)
	}

	// @method getDiff @returns {Object}
,	getDiff: function()
	{
		return this.diff
	}
})

module.exports = Application