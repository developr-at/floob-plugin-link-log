# Floob plugin "Link Log"

Simple plugin for the web crawler [floob](https://github.com/developr-at/floob), which logs all encountered URLs.

## Options

### logfile
Type: `String`
Default: `"floob-link.log"`

Specifies the path to the log file for the links.

## Usage

```js
var LinkLogPlugin = require('floob-plugin-link-log/lib/plugin').default;

module.exports = {
    plugins: [
        {
            plugin: LinkLogPlugin,
            options: {
                logfile: 'links.log'
            }
        },
    ]
};
```