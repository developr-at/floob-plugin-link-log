'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Open stream to log file.
var logStream = _fs2.default.createWriteStream('floob-link.log');

/**
 */
exports.default = {

  /**
   * Name of this plugin used in logger
   * @type {string}
   */
  name: 'Link Log',

  /**
   * Processes a single html page.
   * @param {object} data jQuery object containing the html source.
   * @param {object} logger Target to output information.
   */
  process: function process(data, logger) {
    logStream.write(data.url + '\n\r');
  }
};