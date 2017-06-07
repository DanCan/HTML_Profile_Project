/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      featured: {
        options: {
          rename: false,
          engine: 'im',
          sizes: [{
            width: 500,
            suffix: '_large',
            quality: 80
          }, {
            width: 360,
            suffix: '_small',
            quality: 80
          },{
            gravity: 'North',
            height: 87,
            width: 360,
            aspectRatio: false,
            suffix: '_smallest',
            quality: 50
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['featured/*.{gif,jpg,png}'],
          cwd: 'images_orig/',
          dest: 'images/'
        }]
      },

      banner: {
        options: {
          rename: false,
          engine: 'im',
          sizes: [{
            width: 1020,
            suffix: '_large',
            quality: 80
          }, {
            width: 720,
            suffix: '_small',
            quality: 80
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_orig/',
          dest: 'images/'
        }]
      },

      modal: {
        options: {
          rename: false,
          engine: 'im',
          sizes: [{
            width: 600,
            suffix: '_large',
            quality: 80
          }, {
            width: 400,
            suffix: '_medium',
            quality: 80
          }, {
            width: 200,
            suffix: '_small',
            quality: 80
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_orig/modal',
          dest: 'images/modal'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images'],
          create: ['images/featured']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      svg: {
        files: [{
          expand: true,
          cwd:'images_orig',
          src: '*.svg',
          dest: 'images'
        },{
          expand: true,
          cwd:'images_orig/cropped',
          src: '*.jpg',
          dest: 'images/cropped'
        }]
      },
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir','copy', 'responsive_images']);

};
