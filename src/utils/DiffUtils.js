var parse = require('parse-diff');
// var path = require('path')

module.exports = {
	parseDiff: function(diffContent)
	{
		var self = this
		,	files = parse(diffContent);
		var filePaths = _.map(files, function(file){return file.from})
		var tree = this.pathsToTree(filePaths)
		this.visitTreeNodes(tree, function(n)
		{
			n.data = _.find(files, function(f){return f.from===n.id})
			self.addJsTreeParticularities(n, tree)
		})
		return tree;
	}

	// this will add to the tree nodes the data needed for jstree, like text, state, icon
,	addJsTreeParticularities: function(node, tree)
	{
		//for jstree
		node.text = node.name; 
		node.state = {opened: true}
		console.log(node.name, node.data)
		if(!node.data)
		{
			node.icon = 'glyphicon glyphicon-folder-open'
		}
		else
		{
			node.icon = 'glyphicon glyphicon-file'
		}
	}


,	visitTreeNodes: function(node, fn)
	{
		if(!node)
			return
		var self = this;
		fn(node)
		_.each(node.children, function(c){self.visitTreeNodes(c, fn)})
	}

	


	// path strings to tree structure utility: pathsToTree. input is an array of string file paths. 
	// Given paths will be 'normalized' to unix. The output is a tree structure

,	folderSep: '/'

,	pathsToTree: function(paths)
	{
		var tree = {}// put them all in an dict
		var self = this;
		_.each(paths, function(path)
		{
			path = path.replace(/\\/g, '/') // convert windows to unix folder separator first
			var arr = path.split(self.folderSep)
			for (var i = 0; i < arr.length; i++) 
			{
				var inner = []
				for (var j = 0; j <= i; j++) 
				{
					inner.push(arr[j])
				}
				var file = inner.join(self.folderSep)
				tree[file] = tree[file] || {id: file, name: inner[inner.length-1], children: []}
			}
		})
		//now we assign parentship in 'children' property. Also find the root node
		var root
		_.each(tree, function(node, name)
		{
			if(!root || root.length>name.length)
			{
				root=name
			}
			var parentName = self.getParentFolder(name)
			var parent = tree[parentName]
			if(parent)
			{
				parent.children.push(node)
			}
		})
		//now remove all primary nodes but the root
		var tree = _.filter(tree, function(val,name){return name==root})[0]
		return tree;
	}
,	getParentFolder: function(p)
	{
		var a = p.split(this.folderSep)
		a.splice(a.length-1, 1)
		var result = a.join(this.folderSep)
		return result!==p ? result : null;
	}
}