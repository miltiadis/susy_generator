module.exports = function (grunt) {
    grunt.initConfig({
        // Watch task config
        watch: {
            sass: {
                files: [
                    'dist/assets/stylesheets/**/*.scss']
            },
            tasks: "sass:dev"

        },
        // SASS task config
        sass: {
            dev: {
                files: {
                    // destination                          // source file
                    "dist/assets/stylesheets/main.css": "dist/assets/stylesheets/main.css.scss"
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass' ,'watch']);

};