/*
 * notion-enhancer
 * (c) 2020 dragonwocky <thedragonring.bod@gmail.com>
 * (https://dragonwocky.me/) under the MIT license
 */

module.exports = {
  id: '0f0bf8b6-eae6-4273-b307-8fc43f2ee082',
  meta: {
    type: 'extension',
    name: 'notion-enhancer core',
    version: require('../../package.json').version,
    author: 'dragonwocky',
    thumb:
      'https://camo.githubusercontent.com/5c5bca9e987d986b8cc7e51066f90c6f8a84af08/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3733313634373938343332333931393933332f3733313732373235393239353032333132342f494d475f323137302e6a7067',
  },
  options: [],
  code: {
    styles: 'styles.css',
    electron: () => {},
    client: () => {},
  },
};