var Backbone = require('../lib/Backbone')
var OpenFileView = require('../view/OpenFileView')
var WorkspaceView = require('../view/editor/WorkspaceView')

var workspaceFirstTime = true;
module.exports = Backbone.Router.extend({

	routes: {
		'': 'openFile',
		'openFile': 'openFile',
		'workspace': 'workspace'
	}

,	openFile: function() 
	{
		var view = new OpenFileView()
		this.application.showView(view)
	}

,	workspace: function() 
	{
		var self = this;
		if(workspaceFirstTime)
		{
			workspaceFirstTime=false;
			//Heads up! to be removed!  mock a diff file for fast development
			require('../lib/jQuery')
			.get('sample-diff.patch')
			.done(function(diffText)
			{
				self.application.setDiffContent(diffText)
				self._workspace();
			})
		}
		else
		{
			self._workspace();
		}
		
	}
,	_workspace: function()
	{
		var view = new WorkspaceView()
		this.application.showView(view)
	}

});