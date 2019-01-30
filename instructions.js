'use strict';

/*
 * adonis-compression
 *
 * © Verdigris Technologies Inc. <opensource@verdigris.co>
 *
 * For full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

const { join } = require('path');

async function createConfigFile(cli) {
  try {
    const srcPath = join(__dirname, 'config/compression.js');
    const destPath = join(cli.helpers.configPath(), 'compression.js');
    await cli.copy(srcPath, destPath);
    cli.command.completed('create', 'config/compression.js');
  } catch (e) {}
}

module.exports = async function (cli) {
  createConfigFile(cli)
}
