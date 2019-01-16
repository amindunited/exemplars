const path = require('path');
const chalk = require('chalk');

console.log(
  chalk.bgYellowBright(
    chalk.blueBright(
      chalk.bold('Starting Exemplars...')
    )
  )
);

/**
 * Load Config files
 */
const configFilename = 'exemplars-config.js';
const defaultConfig = require(path.resolve(__dirname, './default-config.js'));
let userConfig = require.resolve(`./${configFilename}`) ? require(`./${configFilename}`) : () => ({});
let config = Object.assign({}, defaultConfig(), userConfig());

console.log(
  chalk.greenBright(
    chalk.bold('Using merged config: ')
  ),
  config
);

/**
 * Build a list of exemplars
 *
 *
 * Get the exemplar (template) paths from the configs,
 * find the directories, and create a list of all available patterns
 *
 */

