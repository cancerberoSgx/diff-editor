var AbstractView = require('../../view/AbstractView')
var _ = require('../../lib/underscore')

module.exports = AbstractView.extend({

	template: require('../../template/editor/fileeditor.hbs')

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

		//TODO: move this string extraction to DiffUtils
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
		// console.log('contettt',this.model)
		return {
			model:this.model
		,	str: str
		};
	}

})