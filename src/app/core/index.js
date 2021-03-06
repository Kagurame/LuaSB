const environment = require('./environment');
const i18n = require('i18n');

global.i18n = i18n;

module.exports = {
  configure: () => i18n.configure(environment.localization),
  run: () => environment.registerAppEvents(),
};
