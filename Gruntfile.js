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
      myIcons: {
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
          cssprefix: '.icon--'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-grunticon');

  grunt.registerTask('buildsvg', ['grunticon']);

  grunt.registerTask('default', []);
};
