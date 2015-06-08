module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    stylus: {
      compile: {
          options: {
              compress: false,
              paths: ['stylesheets/stylus/utils', 'stylesheets/stylus/modules']
          },
          files: {
              'stylesheets/css/style.css': 'stylesheets/stylus/style.styl'
          }
          //'include css': true
      }
    },
    watch: {
      scripts: {
          files: ['stylesheets/stylus/**/*.styl'],
          tasks: [ 'stylus' ],
          options: {
              spawn: false
          }
      }
    }
  });

  // Load the plugin that provides the task.
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['stylus', 'watch']);
  grunt.registerTask('co', ['stylus']);

};