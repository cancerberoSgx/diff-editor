var ShortJsDoc = require('short-jsdoc');
ShortJsDoc.make({
    inputDirs: ['./src']
,   output: 'apidoc'
,   projectMetadata: './package.json'
,   vendor: ['javascript', 'html', 'backbonejs', 'jquery', 'xml-dom']
}); 