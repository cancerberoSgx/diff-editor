var AbstractView = require('../view/AbstractView')
var _ = require('../lib/underscore')
var diffUtils = require('../utils/DiffUtils')

module.exports = AbstractView.extend({

	template: require('../template/openFile.hbs')

,	events: {
		'change [data-action="file"]': 'fileChange'
	}

,	fileChange: function()
	{
		this.readFileFrom(this.$('[data-action="file"]').get(0), function(content)
		{
			var parsed = diffUtils.parseDiff(content)
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