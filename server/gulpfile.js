(function() {
'use strict';

var 

	path 		= require('path'),
    gulp		= require('gulp'),
	nodemon		= require('gulp-nodemon'),
	webpack 	= require('webpack-stream'),
	watch 		= require('gulp-watch'),
	
end_require= true;

gulp.task('welcome', function() {
    console.log( '-------------------------------------------------------------------' );
	console.log( '>> welcome... fable server' );
	console.log( '-------------------------------------------------------------------' );
});

var source 		= 'client',  
    destination = 'public';

gulp.task('base copy', function() {  

    console.log( '-------------------------------------------------------------------' );
	console.log( '>> Base files Copy' );
	console.log( '-------------------------------------------------------------------' );
	
	gulp.src	( 		 	'client/index.html', 	{ base: 'client' } )
	    .pipe	( watch		( 'client/index.html', 	{ base: 'client' } ))
		.pipe	( gulp.dest	( 'public'									));

	gulp.src	( 		 	  'client/font/*', 	{ base: 'client/font/' } )
	    .pipe	( watch		( 'client/font/', 	{ base: 'client/font/' } ))
		.pipe	( gulp.dest	( 'public/font'									));

	gulp.src	( 		 	  'client/img/*', 	{ base: 'client/img/' } )
	    .pipe	( watch		( 'client/img/', 	{ base: 'client/img/' } ))
		.pipe	( gulp.dest	( 'public/img'									));
		
});


gulp.task('webpack:index', function() {
	
    console.log( '-------------------------------------------------------------------' );
	console.log( '>> run webpack:index...' );
	console.log( '-------------------------------------------------------------------' );
	
	return gulp.src('client/app.js') 
  
	.pipe(webpack({
				watch: true,
				output: { filename: 'bundle.js' },
				module: {
					loaders: [
						{
							test: /\.js$/,
							exclude: /(node_modules|bower_components)/,
							loader: 'babel', // 'babel-loader' is also a legal name to reference
							query: {
								presets: ['es2015']
							}
						},
						{ test: /\.css$/,    loader: "style-loader!css-loader" },
						{ test: /\/angular\.js$/, 	loader: 'imports?jQuery=jquery'   }, 
						{ test: /\/jquery.js$/,     loader: 'expose?jQuery'    	      },
					]
				},				
		}))
		
	.pipe(gulp.dest('public/'));
	
});

gulp.task('nodemon', function() {
    nodemon({
        script: 'server/server.js',
        env: {
            'NODE_ENV': 'development'
        },
		ignore: ["localdata/*"],
    })
    .on('restart');
});

gulp.task('default', 
[
	'welcome', 
	'base copy',
	'nodemon', 
	'webpack:index',
]);

}());
