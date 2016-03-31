/* globals module */
module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      options: {
        sourceMap: '/dev/null',
        sourceMapEmbed: true
      },
      dev: {
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['styles.scss'],
          dest: './',
          ext: '.css'
        }]
      }
    },

    grunticon: {
      css: {
        files: [{
          expand: true,
          cwd: 'svg/src',
          src: ['*.svg'],
          dest: 'svg/dist'
        }],
        options: {
          customselectors: {
            '*': [ '.icon__before--$1::before', '.icon__after--$1::after' ]
          },
          cssprefix: '.icon--',
          enhanceSVG: true,
          template: 'grunticon/template.hbs'
        }
      },
      scss: {
        files: [{
          expand: true,
          cwd: 'svg/src',
          src: ['*.svg'],
          dest: 'scss/svg'
        }],
        options: {
          cssprefix: 'icon--',
          loadersnippet: 'grunticon.loader.not.used.js',
          template: 'grunticon/scss-template.hbs',
          previewTemplate: 'grunticon/scss-preview-template.hbs',
          previewhtml: '_icons-setup.scss',
          pngpath: 'svg/png',
          datapngcss: '_icons.data.png.scss',
          datasvgcss: '_icons.data.svg.scss',
          urlpngcss: '_icons.fallback.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-grunticon');

  grunt.registerTask('buildsvg', ['grunticon']);
  grunt.registerTask('default', []);
};
