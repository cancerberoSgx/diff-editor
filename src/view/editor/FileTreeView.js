var AbstractView = require('../../view/AbstractView')
var _ = require('../../lib/underscore')
var $ = require('../../lib/jQuery')

module.exports = AbstractView.extend({

	template: require('../../template/editor/filetree.hbs')

,	afterRender: function()
	{
		this.$('[data-type="tree"]').jstree({
			'core' : {
				'data' : [
					{ "text" : "Root node", "children" : [
							{ "text" : "Child node 1" },
							{ "text" : "Child node 2" }
						]
					}
				]
			}
		});


		this.$('[data-type="tree"]').on("changed.jstree", function (e, data) 
		 {
			console.log("The selected nodes are:");
			console.log(data.selected);
		});
	}

})