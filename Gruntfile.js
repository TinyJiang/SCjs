module.exports = function(grunt) {
    //配置参数
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';',
                stripBanners: true
            },
            dist: {
                src: [
                    "src/SCjs.js"
                ],
                dest: "dest/SCjs.js"
            }
        },
        uglify: {
            options: {},
            dist: {
                files: {
                    'dest/SCjs.min.js': 'dest/SCjs.js'
                }
            }
        },
        jshint: {
            options: {
                '-W033': true,
                '-W030': true
            },
            all: ['Gruntfile.js', 'dest/SCjs.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    //注册任务
    grunt.registerTask('default', ['concat', 'uglify', 'jshint']);
}