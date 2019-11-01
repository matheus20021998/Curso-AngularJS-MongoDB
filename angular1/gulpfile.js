const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence')

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/server')

gulp.task('default',()=>{           //necessario colocar, ela iniciará as sequencias pelo NPM run dev
	if(util.env.production){
		sequence('deps','app')
		}else{
			sequence('deps','app','server')
		}
})          