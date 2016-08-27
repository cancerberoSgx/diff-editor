var Workspace = function(){}
var _ = require('../lib/underscore')

// @class Workspace is a controller that handles the cooperation beween the uwer, the tree view and the editor so the application doesn't know anything about it,
_.extend(Workspace.prototype, {
	setSelectedFile: function(model)
	{
		console.log('www', model)
	}
})
// Workspace.instance = new Workspace()

module.exports = Workspace;