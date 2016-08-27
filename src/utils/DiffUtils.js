var parse = require('parse-diff');
// var path = require('path')

module.exports = {
	parseDiff: function(diffContent)
	{
		var files = parse(diffContent);
		var filePaths = _.map(files, function(file){return file.from})
		var tree = this.pathsToTree(filePaths)
		
		// console.log(filePaths)
		// this.parseFilePath(files[0].from)
		// _.each(parsed, (p)=>{diffUtils.parseFilePath(p.from)})
	}



	// path strings to tree structure utility: pathToTree

,	folderSep: '/'

,	pathsToTree: function(paths)
	{
		var tree = {}// put them all in an dict
		var self = this;
		_.each(paths, function(path)
		{
			var arr = path.split(self.folderSep)
			for (var i = 0; i < arr.length; i++) 
			{
				var inner = []
				for (var j = 0; j <= i; j++) 
				{
					inner.push(arr[j])
				}
				var file = inner.join(self.folderSep)
				tree[file] = tree[file] || {id: file, children: []}
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
		console.log(tree)
	}
,	getParentFolder: function(p)
	{
		var a = p.split(this.folderSep)
		a.splice(a.length-1, 1)
		// console.log(a)
		var result = a.join(this.folderSep)
		return result!==p ? result : null;
	}
,	parseFilePath: function(filePath)
	{
		var fileName = path.basename(filePath)
		,	folder = filePath.substring(0, filePath.indexOf(fileName))
		console.log('seba', fileName, folder )
	}
}