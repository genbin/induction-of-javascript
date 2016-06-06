module.exports = function(grunt) {
    // 针对当前项目的配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),// 从 package.json 文件读入数据

        copy: {
            // 复制图片文件
            img: {
                files: [
                    {
                        expand: true, flatten: false,
                        cwd: 'web/css/img/',
                        src: ['**'],
                        dest: 'public/build/img/'
                    },
                    {
                        expand: true, flatten: false,
                        cwd: 'web/css/img/',
                        src: ['**'],
                        dest: 'web/build/img/'
                    }
                ]
            }
        },
        
        concat: {
            //合并所有用到的css文件
            css: {
                src: [
                        'public/css/*.css',
                        'public/components/bootstrap/docs/assets/css/bootstrap.css',
                        'public/components/bootstrap/docs/assets/css/bootstrap-responsive.css',
                        'public/stylesheets/style.css',
                        'public/components/font-awesome/css/font-awesome.css'
                     ],
                dest:'public/build/css/main.css'
            },
            //合并所有用到的js文件
            js: {
                src: [
                    'public/components/jquery/jquery.js',
                    'public/components/bootstrap/docs/assets/js/bootstrap.js',
                    'public/components/jqBootstrapValidation/dist/jqBootstrapValidation-1.3.7.js'
                ],
                dest: 'public/build/js/main.js'
            }
        },

        uglify: {
            //压缩合并后的js文件main.js
            build: {
                src: 'public/build/js/main.js',
                dest: 'public/build/js/main.min.js'
            }
        },

        cssmin: {
            //压缩合并后的css文件main.css
            css: {
                options: {
                    keepSpecialComments: 1
                },
                src: ['public/build/css/main.css'],
                dest: 'public/build/css/main.min.css'
            }
        }
    });

    // 加载插件
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // 注册默认任务 ‘default’模式下
    grunt.registerTask('default', ['copy', 'concat', 'uglify', 'cssmin']);
    // 注册默认任务 ‘dev’模式下
    grunt.registerTask('dev', ['watch']);
};