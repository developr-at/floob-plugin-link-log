import cheerio from 'cheerio';
import fs from 'fs';

let logStream = { write: () => {} };

const defaultFormat = '[<STATUS>] <URL>';

let logFormat = defaultFormat;

/**
 * LinkLogPlugin logs all encountered URLs to a separate log file.
 */
export default {

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
    configure: (pluginConfig = {}, globalConfig = {}) => {
        logStream = fs.createWriteStream(pluginConfig.logfile || 'floob-link.log');
        logFormat = pluginConfig.format || defaultFormat;
    },

    /**
     * Processes a single html page.
     * @param {object} data jQuery object containing the html source.
     * @param {object} logger Target to output information.
     */
    process: (data, logger) => {
        const message = logFormat
            .replace(/<STATUS>/g, data.status)
            .replace(/<URL>/g, data.url);

        logStream.write(`${message}\n\r`);
    }
};