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
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-grunticon');

  grunt.registerTask('default', ['grunticon']);
};
