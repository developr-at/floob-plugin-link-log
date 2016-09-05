'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logStream = { write: function write() {} };

var defaultFormat = '[<STATUS>] <URL>';

var logFormat = defaultFormat;

/**
 * LinkLogPlugin logs all encountered URLs to a separate log file.
 */
exports.default = {

    /**
     * Name of this plugin used in logger
     * @type {string}
     */
    name: 'Link Log',

    /**
     * Configures this plugin.
     * @param {object} pluginConfig Options specific for this plugin
     * @param {object} globalConfig Global options for floob (currently not in use)
     */
    configure: function configure() {
        var pluginConfig = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
        var globalConfig = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        logStream = _fs2.default.createWriteStream(pluginConfig.logfile || 'floob-link.log');
        logFormat = pluginConfig.format || defaultFormat;
    },

    /**
     * Processes a single html page.
     * @param {object} data jQuery object containing the html source.
     * @param {object} logger Target to output information.
     */
    process: function process(data, logger) {
        var message = logFormat.replace(/<STATUS>/g, data.status).replace(/<URL>/g, data.url);

        logStream.write(message + '\n\r');
    }
};