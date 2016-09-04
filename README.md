[Online Diff Editor](https://cancerberosgx.github.io/diff-editor/static/index.html)


#how to build and run

For the following instructions we need browserify and http-server installed globally:

	npm install http-server browserify watchify -g

Then:

	cd diff-editor
	npm install
	browserify -t hbsfy src > static/bundle.js
	http-server static
	firefox http://localhost:8080/

For development:

	watchify -t hbsfy src -o static/bundle.js;




