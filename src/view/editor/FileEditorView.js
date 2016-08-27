var AbstractView = require('../../view/AbstractView')
var _ = require('../../lib/underscore')
var $ = require('../../lib/jQuery')

module.exports = AbstractView.extend({

	template: require('../../template/editor/fileeditor.hbs')

,	afterRender: function()
	{
	}

,	getContext: function()
	{
		// return this.application.workspace	
	}

})