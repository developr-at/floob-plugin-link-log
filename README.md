# Floob plugin "Link Log"

Simple plugin for the web crawler [floob](https://github.com/developr-at/floob), which logs all encountered URLs.

## Options

### logfile
Type: `String`
Default: `"floob-link.log"`

Specifies the path to the log file for the links.

### format
Type: `String`
Default: `"[<STATUS>] <URL>"`

Specifies the output format for each found url. Currently allowed placeholders are:
* <STATUS>: Outputs the status of the http request against the URL
* <URL>: Outputs the requested URL

## Usage

```js
var LinkLogPlugin = require('floob-plugin-link-log/lib/plugin').default;

module.exports = {
    plugins: [
        {
            plugin: LinkLogPlugin,
            options: {
                logfile: 'links.log',
                format: 'Request to URL "<URL>" returned a status of "<STATUS>"'
            }
        },
    ]
};
```