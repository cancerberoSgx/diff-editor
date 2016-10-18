
var _ = require('../lib/underscore')
var Backbone = require('../lib/Backbone')

// @module diff-editor @extends Backbone.Events
// @class Workspace is a controller that handles the cooperation beween the uwer, the tree view and the editor so the application doesn't know anything about it,

var Workspace = function()
{

}
_.extend(Workspace.prototype, {

	// @method setSelectedFile @param {Object} model
	setSelectedFile: function(model)
	{
		this.selectedFile = model
		this.trigger('change:selectedFile', model)
	}
})
_.extend(Workspace.prototype, Backbone.Events)


module.exports = Workspace;