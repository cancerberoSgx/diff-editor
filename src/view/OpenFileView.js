var AbstractView = require('../view/AbstractView')
var _ = require('../lib/underscore')

module.exports = AbstractView.extend({

	template: require('../template/openFile.hbs')

,	events: {
		'change [data-action="file"]': 'fileChange'
	}

,	fileChange: function()
	{
		var self = this
		this.readFileFrom(this.$('[data-action="file"]').get(0), function(content)
		{
			self.application.setDiffContent(content)
			Backbone.history.navigate('workspace', {trigger: true})
		})
	}

,	readFileFrom: function (el, fn)
	{
		var file = el.files[0];
		var reader = new FileReader();
		reader.addEventListener('loadend', function()
		{
			fn(reader.result)
		})
		reader.readAsText(file);
	}

})