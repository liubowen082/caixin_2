module.exports = function(grunt) {
  // 以下代码初始化Grunt任务
  grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
    // js语法检查
    //jshint: { /*…*/ },
//    // 需要合并的任务
//    concat: { /*…*/ },
//    // 压缩
//    uglify: { /*…*/ },
	less : {
		dev : {
			 //src: ['less/init/*.less'],
//             tasks: ['css/init/*.css'],
			 files: [{
                    expand: true,
                    cwd: "less",
                    src: [
                    	"**/*.less",
						"common/*.less",
						"common/*.css",
                    ],
                    dest: 'css',
                    ext: '.css'
                }]
			
			}
		},
    // watch任务
    watch: { 
		less: {  
             files: ["less/**/*.less"],  
             tasks: ['less:dev']
		}
	}
  });

  // 加载package.json中的想用插件
  //grunt.loadNpmTasks('grunt-contrib-jshint');
//  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // 注册一个任务，第二参数可以是数组或者字符串
  // 默认会执行default任务.
  grunt.registerTask('default', ['less:dev','watch']);
};