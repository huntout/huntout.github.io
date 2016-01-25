// Generated on 2014-02-01 using generator-jekyllrb 1.2.1
'use strict';

// Directory reference:
//   css: css
//   compass: _scss
//   javascript: js
//   images: img
//   fonts: fonts

var path = require('path');

RegExp.escape = function(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
};

module.exports = function(grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Configurable paths
    yeoman: {
      app: 'app',
      dist: 'dist'
    },
    watch: {
      compass: {
        files: ['<%= yeoman.app %>/_scss/**/*.{scss,sass}'],
        tasks: ['compass:server']
      },
      copy: {
        files: ['<%= yeoman.app %>/css/**/*.css'],
        tasks: ['copy:stageCss']
      },
      // autoprefixer: {
      //   files: ['.tmp/css/**/*.css'],
      //   tasks: ['autoprefixer:server']
      // },
      jekyll: {
        files: [
          '<%= yeoman.app %>/**/*.{html,yml,md,mkd,markdown}',
          '<%= yeoman.app %>/_postfiles/**/*',
          '!<%= yeoman.app %>/_bower_components/**/*'
        ],
        tasks: ['jekyll:server']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/**/*.{html,yml,md,mkd,markdown}',
          '<%= yeoman.app %>/_postfiles/**/*',
          '!<%= yeoman.app %>/_bower_components/**/*',
          '.tmp/css/**/*.css',
          '{.tmp,<%= yeoman.app %>}/js/**/*.js',
          '<%= yeoman.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '.jekyll',
            '<%= yeoman.app %>'
          ]
        }
      },
      dist: {
        options: {
          open: true,
          base: [
            '<%= yeoman.dist %>'
          ]
        }
      },
      test: {
        options: {
          base: [
            '.tmp',
            '.jekyll',
            'test',
            '<%= yeoman.app %>'
          ]
        }
      }
    },
    clean: {
      dist: [
        '<%= yeoman.dist %>'
      ],
      server: [
        '.tmp',
        '.jekyll'
      ]
    },
    compass: {
      options: {
        // If you're using global Sass gems, require them here.
        // require: ['singularity', 'jacket'],
        bundleExec: true,
        sassDir: '<%= yeoman.app %>/_scss',
        cssDir: '.tmp/css',
        imagesDir: '<%= yeoman.app %>/img',
        javascriptsDir: '<%= yeoman.app %>/js',
        relativeAssets: false,
        httpImagesPath: '/img',
        httpGeneratedImagesPath: '/img/generated',
        outputStyle: 'expanded',
        raw: 'extensions_dir = "<%= yeoman.app %>/_bower_components"\n'
      },
      dist: {
        options: {
          generatedImagesDir: '<%= yeoman.dist %>/img/generated'
        }
      },
      server: {
        options: {
          debugInfo: false,
          generatedImagesDir: '.tmp/img/generated'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>/css',
          src: '**/*.css',
          dest: '<%= yeoman.dist %>/css'
        }]
      },
      server: {
        files: [{
          expand: true,
          cwd: '.tmp/css',
          src: '**/*.css',
          dest: '.tmp/css'
        }]
      }
    },
    jekyll: {
      options: {
        bundleExec: true,
        config: '_config.yml,_config.build.yml',
        src: '<%= yeoman.app %>',
        dest: '<%= yeoman.dist %>'
      },
      dist: {},
      servedist: {
        options: {
          raw: 'cdnurl: ""',
        }
      },
      server: {
        options: {
          config: '_config.yml',
          dest: '.jekyll'
        }
      },
      check: {
        options: {
          doctor: true
        }
      }
    },
    useminPrepare: {
      options: {
        dest: '<%= yeoman.dist %>'
      },
      html: [
        '<%= yeoman.dist %>/index.html',
        '<%= yeoman.dist %>/archive/index.html'
      ]
    },
    usemin: {
      options: {
        assetsDirs: [
          '<%= yeoman.dist %>',
          '<%= yeoman.dist %>/img'
        ],
      },
      html: ['<%= yeoman.dist %>/**/*.html'],
      css: ['<%= yeoman.dist %>/css/**/*.css']
    },
    replace: (function() {
      function f(cdnurl) {
        return {
          options: {
            patterns: [{
              match: new RegExp('(' + RegExp.escape(cdnurl) + '\\/)(.+?\\.(?:png|gif))', 'g'),
              replacement: function(s) {
                var dist = grunt.config.data.yeoman.dist;
                var cdnurl_ = RegExp.$1;
                var src = path.join(dist, RegExp.$2);
                var rev = grunt.filerev.summary[src];
                if (rev) {
                  rev = path.relative(dist, rev).replace(/\\/g, '/');
                  return cdnurl_ + rev;
                }
                return s;
              }
            }, {
              match: /(=)(\/css\/[^\.]+\..{4}\.css)/g,
              replacement: '$1' + cdnurl + '$2'
            }, {
              match: /(=)(\/img\/[^\.]+\..{4}\.(?:png|gif))/g,
              replacement: '$1' + cdnurl + '$2'
            }, {
              match: /(=)(\/js\/[^\.]+\..{4}\.js)/g,
              replacement: '$1' + cdnurl + '$2'
            }]
          },
          files: [{
            expand: true,
            cwd: '<%= yeoman.dist %>',
            src: '**/*.{html,xml}',
            dest: '<%= yeoman.dist %>'
          }]
        };
      }
      return {
        dist: f(grunt.file.readYAML('_config.build.yml').cdnurl || ''),
        servedist: f('')
      };
    })(),
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.html',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    // Usemin adds files to concat
    concat: {},
    // Usemin adds files to uglify
    uglify: {
      options: {
        report: 'min'
      }
    },
    // Usemin adds files to cssmin
    cssmin: {
      dist: {
        options: {
          check: 'gzip'
        }
      }
    },
    imagemin: {
      dist: {
        options: {
          progressive: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.{jpg,jpeg}',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.svg',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          src: [
            // Jekyll processes and moves HTML and text files.
            // Usemin moves CSS and javascript inside of Usemin blocks.
            // Copy moves asset files and directories.
            'img/**/*',
            'fonts/**/*',
            'res/**/*',
            // Like Jekyll, exclude files & folders prefixed with an underscore.
            '!**/_*{,/**}',
            // Explicitly add any files your site needs for distribution here.
            '_bower_components/jquery/jquery.js',
            '_bower_components/font-awesome/fonts/*',
            'favicon.ico',
            'apple-touch*.png'
          ],
          dest: '<%= yeoman.dist %>'
        }]
      },
      // Copy CSS into .tmp directory for Autoprefixer processing
      stageCss: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/css',
          src: '**/*.css',
          dest: '.tmp/css'
        }]
      }
    },
    filerev: {
      options: {
        length: 4
      },
      dist: {
        files: [{
          src: [
            '<%= yeoman.dist %>/js/**/*.js',
            '<%= yeoman.dist %>/css/**/*.css',
            '<%= yeoman.dist %>/{2???,img}/**/*.{gif,jpg,jpeg,png,svg,webp}'
          ]
        }]
      }
    },
    buildcontrol: {
      dist: {
        options: {
          remote: '../',
          branch: 'master',
          commit: true,
          push: true
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/js/**/*.js',
        'test/spec/**/*.js'
      ]
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      check: {
        src: [
          '<%= yeoman.app %>/css/**/*.css',
          '.tmp/css/**/*.css',
          '!.tmp/css/font-awesome.css'
        ]
      }
    },
    concurrent: {
      server: [
        'compass:server',
        'copy:stageCss',
        'jekyll:server'
      ],
      dist: [
        'compass:dist',
        'copy:dist'
      ]
    }
  });

  // Define Tasks
  grunt.registerTask('serve', function(target) {
    if (target === 'dist') {
      return grunt.task.run(['build:servedist', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'autoprefixer:server',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', function() {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  // No real tests yet. Add your own.
  grunt.registerTask('test', [
    // 'clean:server',
    // 'concurrent:test',
    // 'connect:test'
  ]);

  grunt.registerTask('check', [
    'clean:server',
    'jekyll:check',
    'compass:server',
    'autoprefixer:server',
    'jshint:all',
    'csslint:check'
  ]);

  grunt.registerTask('build', function(target) {
    target = target || 'dist';
    grunt.task.run([
      'clean',
      // Jekyll cleans files from the target directory, so must run first
      'jekyll:' + target,
      'concurrent:dist',
      'useminPrepare',
      'concat',
      'autoprefixer:dist',
      'cssmin',
      'uglify',
      'imagemin',
      'svgmin',
      'filerev',
      'usemin',
      'htmlmin',
      'replace:' + target
    ]);
  });

  // grunt.registerTask('deploy', [
  //   'check',
  //   'test',
  //   'build',
  //   'buildcontrol'
  // ]);

  grunt.registerTask('default', [
    'check',
    'test',
    'build'
  ]);
};
