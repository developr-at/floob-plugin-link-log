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
var logStream = { write: function write() {} };

/**
 */
exports.default = {

    /**
     * Name of this plugin used in logger
     * @type {string}
     */
    name: 'Link Log',

    configure: function configure() {
        var pluginConfig = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
        var globalConfig = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        logStream = _fs2.default.createWriteStream(pluginConfig.logfile || 'floob-link.log');
    },

    /**
     * Processes a single html page.
     * @param {object} data jQuery object containing the html source.
     * @param {object} logger Target to output information.
     */
    process: function process(data, logger) {
        logStream.write(data.url + '\n\r');
    }
};