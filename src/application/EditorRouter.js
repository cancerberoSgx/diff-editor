var Backbone = require('../lib/Backbone')

var OpenFileView = require('../view/OpenFileView')

var WorkspaceView = require('../view/editor/WorkspaceView')
module.exports = Backbone.Router.extend({

	routes: {
		"openFile": "openFile",
		"workspace": "workspace"
	},

	openFile: function() 
	{
		var view = new OpenFileView()
		this.application.showView(view)
	},


	workspace: function() 
	{
		var view = new WorkspaceView()
		this.application.showView(view)
	}

});