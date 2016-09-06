var AbstractView = require('../../view/AbstractView')
var _ = require('../../lib/underscore')
// var FileTreeEditNodeView = require('./FileTreeEditNodeView')

module.exports = AbstractView.extend({

	template: require('../../template/editor/filetree.hbs')

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
			,	"check_callback" : true
			}
    	,	'themes' : { 'stripes' : true }
		,	'plugins' : [ 'contextmenu', 'dnd', 'search', 'wholerow']
		});

		var to = false;
		this.$('[data-type="tree-search-input"]').keyup(function () 
		{
			if(to) { clearTimeout(to); }
			to = setTimeout(function () 
			{
			  var v = this.$('[data-type="tree-search-input"]').val();
			  console.log('search', v)
			  this.$('[data-type="tree"]').jstree(true).search(v);
			}, 250);
		});

		//backbone events won't work for this binding:
		this.$('[data-type="tree"]').on("changed.jstree", _.bind(this.treeSelectionHandler, this));

		// this.application.workspace.on('change:selectedFile', _.bind(this.selectedFile, this)) //TODO: off on destroy
	}


,	treeSelectionHandler: function(e, data)
	{
		this.application.workspace.setSelectedFile(data.node)
	}

// ,	selectedFile: function(data)
// 	{
		// if(!data.data)
		// {
		// 	$('.edit-node-popover').popover('hide')
		// 	return 
		// }
		// var popoverContent = $('#edit-node-popover-content');
		// $('.edit-node-popover').popover({ 
		// 	html : true
		// ,	content: function() 
		// 	{
		// 		return popoverContent.html();
		// 	}
		// });

		// var nodeEl = $(document.getElementById(data.id));

		// console.log(data)
		// $('.edit-node-popover').popover('show')
		// $('.popover').css({
		// 	left: (nodeEl.offset().left+popoverContent.width())+'px'
		// ,	top: (nodeEl.offset().top-popoverContent.height()*1.5)+'px'
		// })
	
	// }


})