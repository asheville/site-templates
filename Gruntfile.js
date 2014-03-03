module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    connect: {
      futura: {
        options: {
          port: 9091,
          base: 'futura/public'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
};