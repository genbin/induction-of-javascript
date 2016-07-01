module.exports = function(grunt) {
    // ��Ե�ǰ��Ŀ������
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),// �� package.json �ļ���������

        copy: {
            // ����ͼƬ�ļ�
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
            //�ϲ������õ���css�ļ�
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
            //�ϲ������õ���js�ļ�
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
            //ѹ���ϲ����js�ļ�main.js
            build: {
                src: 'public/build/js/main.js',
                dest: 'public/build/js/main.min.js'
            }
        },

        cssmin: {
            //ѹ���ϲ����css�ļ�main.css
            css: {
                options: {
                    keepSpecialComments: 1
                },
                src: ['public/build/css/main.css'],
                dest: 'public/build/css/main.min.css'
            }
        }
    });

    // ���ز��
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // ע��Ĭ������ ��default��ģʽ��
    grunt.registerTask('default', ['copy', 'concat', 'uglify', 'cssmin']);
    // ע��Ĭ������ ��dev��ģʽ��
    grunt.registerTask('dev', ['watch']);
};