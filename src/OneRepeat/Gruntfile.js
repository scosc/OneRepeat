module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        // read in the project settings from the package.json file into the pkg property
        pkg: grunt.file.readJSON('package.json'),

        bowercopy: {
            options: {
                    runBower: true,
                    destPrefix: 'wwwroot/lib'
            },
            libs: {
                    files: {
                        'angular': 'angular',
                        'jquery': 'jquery/dist',
                        'bootstrap': 'bootstrap/dist/css'
                    }
            }
        }
    });

    //Add all plugins that your project needs here
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
};