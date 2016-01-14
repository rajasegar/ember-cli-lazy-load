/*jshint node:true*/
/* global require, module */
var EmberAddon = require('./ember-addon');
var bundles = require("./tests/dummy/config/bundles")();

module.exports = function(defaults) {

  console.log(bundles );
  var app = new EmberAddon(defaults, {
    // Add options here
    fingerprint: {
      assetMap: true,
      exclude: ['fonts/169929'],
      prepend: 'https://subdomain.cloudfront.net/'
    },
    bundles: bundles
  });

  /*
    This build file specifes the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
