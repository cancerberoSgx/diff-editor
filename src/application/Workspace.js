
var _ = require('../lib/underscore')
var Backbone = require('../lib/Backbone')

var Workspace = function()
{

}

// @class Workspace is a controller that handles the cooperation beween the uwer, the tree view and the editor so the application doesn't know anything about it,
_.extend(Workspace.prototype, {
	setSelectedFile: function(model)
	{
		this.selectedFile = model;
		this.trigger('change:selectedFile', model)
		// console.log('www', model)
	}
})
_.extend(Workspace.prototype, Backbone.Events)

// Workspace.instance = new Workspace()

module.exports = Workspace;