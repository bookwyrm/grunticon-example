/* globals module */
module.exports = function(grunt) {

  grunt.initConfig({
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

  grunt.loadNpmTasks('grunt-grunticon');

  grunt.registerTask('default', ['grunticon']);
};
