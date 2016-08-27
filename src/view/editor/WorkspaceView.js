var AbstractView = require('../../view/AbstractView')
var FileTreeView = require('./FileTreeView')
var _ = require('../../lib/underscore')

module.exports = AbstractView.extend({

	template: require('../../template/editor/workspace.hbs')

,	childViews: {
		'file-tree': function(parentView)
		{
			var view = new FileTreeView()
			view.application = parentView.application
			return view;
		}
	}
})