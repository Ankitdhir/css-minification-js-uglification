module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
		js: {
			files: { 'public/dist/combined.js': ['modules/**/*.js']
		  }
		}
		},
		concat: {
			dist: {
				src: ['modules/**/*.css'],
				dest: 'public/dist/combined.css'
			}
		},
		cssmin: {
			target: {
				files: [{
					src: ['public/dist/combined.css'],
					dest: 'public/dist/combined.min.css'
				}]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['concat','cssmin','uglify:js']);
};