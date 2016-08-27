var _ = require('../lib/underscore');
var Backbone = require('../lib/Backbone')

module.exports = Backbone.View.extend({
	render: function()
	{
		var context = this.getContext()
		var html = this.template(context)
		this.$el.html(html)

		this.renderChilds()
		
		if(this.afterRender)
			this.afterRender()

		
	}
,	renderChilds: function()
	{
		var self = this;
		_.each(this.childViews, function(childConstructor, childName)
		{
			var selector = '[data-view="'+childName+'"]'
			if(self.$(selector).length)
			{
				var childView = childConstructor(self)
				childView.render()
				self.$(selector).append(childView.$el)
			}
		})
	}
// ,	renderIn: function($el)
// 	{
// 		this.$el = $el
// 		this.render()
// 	}

,	template: function()
	{
		return '<div>AbstractView - this should\'t happen!</div>';
	}

,	getContext: function()
	{
		return {}; 
	}

,	destroy: function()
	{
		this.undelegateEvents()
		this.$el.remove()
	}
})
