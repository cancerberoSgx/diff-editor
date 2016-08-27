var AbstractView = require('../../view/AbstractView')
var _ = require('../../lib/underscore')
var $ = require('../../lib/jQuery')

module.exports = AbstractView.extend({

	template: require('../../template/editor/fileeditor.hbs')
// ,	workspaceInstall: function(workspace)
// 	{
// 		this.workspace = workspace;
// 		this.workspace.on('change:selectedFile', _.bind(this.changeSelectedFile, this)) //TODO: off on destroy
// 		var model = this.workspace.selectedFile;
// 		debugger;
// 	}
,	changeSelectedFile: function(model)
	{
		console.log('changeSelectedFile',model)
	}
,	afterRender: function()
	{
		this.application.workspace.on('change:selectedFile', _.bind(this.render, this)) //TODO: off on destroy
		this.model = this.application.workspace.selectedFile || null;
	}

,	getContext: function()
	{
		this.model = this.application.workspace.selectedFile || null;
		if(!this.model)
		{
			return {}
		}
		var buf = [];
		_.each(this.model.data.chunks, function(chunk)
		{
			buf.push(chunk.content)
			_.each(chunk.changes, function(change)
			{
				buf.push(change.content)
			})
		})
		
		var str = buf.join('\n')
		console.log('contettt',str)
		return {
			model:this.model
		,	str: str
		};
	}

})