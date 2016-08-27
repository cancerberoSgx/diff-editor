var Backbone = require('../lib/Backbone')
var OpenFileView = require('../view/OpenFileView')
var WorkspaceView = require('../view/editor/WorkspaceView')

module.exports = Backbone.Router.extend({

	routes: {
		"openFile": "openFile",
		"workspace": "workspace"
	}

,	openFile: function() 
	{
		var view = new OpenFileView()
		this.application.showView(view)
	}

,	workspace: function() 
	{
		var self = this;
		//Heads up! to be removed!  mock a diff file for fast development
		require('../lib/jQuery')
		.get('sample-diff.patch')
		.done(function(diffText)
		{
			self.application.setDiffContent(diffText)
			// console.log('DONE', arguments)

			var view = new WorkspaceView()
			self.application.showView(view)
		})	
	}

});