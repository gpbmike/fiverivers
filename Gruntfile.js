'use strict';
module.exports = function(grunt) {

  // ----------------------------------------------------------
  // WARNING, BRAVE DEVELOPER
  // ----------------------------------------------------------
  // Webhook allows you to use local grunt tasks and files.
  // However, these tasks are ONLY RUN LOCALLY and not when
  // your live site needs to be rebuilt. This means you should
  // only use grunt for pre-processing tasks like building
  // Sass, less or coffescript files, not for reading things
  // from your templates and making dynamic changes during
  // the build process. Doing so will cause your live site
  // not to regerate.
  //
  // You have been warned!
  grunt.initConfig({
    sass: {
      dev: {
        options: {
          loadPath: [
            'bower_components/bourbon/app/assets/stylesheets',
            'bower_components/neat/app/assets/stylesheets'
          ]
        },
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['*.scss'],
          dest: 'static/css',
          ext: '.css'
        }]
      }
    },
    watch: {
      options : {
        files: ['scss/**/*.scss'],
        tasks: ['sass', 'build']
      },
    },
    copy: {
      normalize: {
        src: 'bower_components/normalize-css/normalize.css',
        dest: 'static/vendor/normalize.css'
      },
      jquery: {
        src: 'bower_components/jquery/dist/jquery.js',
        dest: 'static/vendor/jquery.js'
      },
      lightbox: {
        files: [
          {
            expand: true,
            cwd: 'bower_components/lightbox',
            src: [
              'js/lightbox.js',
              'css/lightbox.css',
              'img/*.png',
              'img/*.gif'
            ],
            dest: 'static/vendor/lightbox',
            filter: 'isFile'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // NEVER REMOVE THESE LINES, OR ELSE YOUR PROJECT MAY NOT WORK
  require('./options/generatorOptions.js')(grunt);
  grunt.loadTasks('tasks');
};
