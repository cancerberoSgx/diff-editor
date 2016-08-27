var AbstractView = require('../../view/AbstractView')
var _ = require('../../lib/underscore')
// var $ = require('../../lib/jQuery')

module.exports = AbstractView.extend({

	template: require('../../template/editor/filetree.hbs')

,	treeSelectionHandler: function(e, data)
	{
		// var model = data.node;
		this.application.workspace.setSelectedFile(data.node)
	}

,	afterRender: function()
	{
		this.diff = this.application.getDiff()
		if(!this.diff)
		{
			Backbone.history.navigate('openFile', {trigger: true})
			alert('You have to choose a diff file first.')
		}

		var data = [this.diff];


		this.$('[data-type="tree"]').jstree({
			'core' : {
				'data' : data
			}
		});

		//backbone events won't work for this binding:
		this.$('[data-type="tree"]').on("changed.jstree", _.bind(this.treeSelectionHandler, this))
	}

})