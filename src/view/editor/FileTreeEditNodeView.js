var AbstractView = require('../../view/AbstractView')
var _ = require('../../lib/underscore')

module.exports = AbstractView.extend({

	template: require('../../template/editor/filetree-editnode.hbs')


,	afterRender: function()
	{
		// this.$('.trigger').popover({
		// 	html: true,
		// 	title: function () {
		// 		return $(this).parent().find('.head').html();
		// 	},
		// 	content: function () {
		// 		return $(this).parent().find('.content').html();
		// 	}
		// });
	}

})