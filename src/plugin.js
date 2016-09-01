import cheerio from 'cheerio';
import fs from 'fs';

// Open stream to log file.
let logStream = { write: () => {} };

/**
 */
export default {

    /**
     * Name of this plugin used in logger
     * @type {string}
     */
    name: 'Link Log',

    configure: (pluginConfig = {}, globalConfig = {}) => {
        logStream = fs.createWriteStream(pluginConfig.logfile || 'floob-link.log');
    },

    /**
     * Processes a single html page.
     * @param {object} data jQuery object containing the html source.
     * @param {object} logger Target to output information.
     */
    process: (data, logger) => {
        logStream.write(data.url + '\n\r');
    }
};