(function() {
  'use strict';
  angular.module('SOGo.Common')
    .config(configure);

  configure.$inject = ['$mdThemingProvider'];
  function configure($mdThemingProvider) {

    // Gmail Primary: Blue (actions, links, selected state)
    $mdThemingProvider.definePalette('gmail-blue', {
      '50':  'e8f0fe',
      '100': 'c6dafc',
      '200': 'a1c2fa',
      '300': '7baaf7',
      '400': '5e97f6',
      '500': '4285f4',
      '600': '3b78e7',
      '700': '3367d6',
      '800': '2a56c6',
      '900': '1c3aa9',
      'A100': '82b1ff',
      'A200': '448aff',
      'A400': '2979ff',
      'A700': '2962ff',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': ['50', '100', '200', '300', 'A100']
    });

    // Gmail Accent: Red (compose, errors, important markers)
    $mdThemingProvider.definePalette('gmail-red', {
      '50':  'fce8e6',
      '100': 'f6c6c0',
      '200': 'f09f97',
      '300': 'ea786e',
      '400': 'e5604f',
      '500': 'e04a30',
      '600': 'd44332',
      '700': 'c53929',
      '800': 'b63120',
      '900': '9c2410',
      'A100': 'ff8a80',
      'A200': 'ff5252',
      'A400': 'ff1744',
      'A700': 'd50000',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': ['50', '100', '200', 'A100']
    });

    // Gmail Background: Near-white with subtle blue-gray tones
    $mdThemingProvider.definePalette('gmail-grey', {
      '50':  'ffffff',
      '100': 'f6f8fc',
      '200': 'f1f3f4',
      '300': 'e8eaed',
      '400': 'dadce0',
      '500': 'bdc1c6',
      '600': '80868b',
      '700': '5f6368',
      '800': '3c4043',
      '900': '202124',
      'A100': 'ffffff',
      'A200': 'eeeeee',
      'A400': 'bdbdbd',
      'A700': '616161',
      'contrastDefaultColor': 'dark',
      'contrastLightColors': ['700', '800', '900']
    });

    $mdThemingProvider.theme('default')
      .primaryPalette('gmail-blue', {
        'default': '500',
        'hue-1': '300',
        'hue-2': '700',
        'hue-3': '900'
      })
      .accentPalette('gmail-red', {
        'default': '500',
        'hue-1': '300',
        'hue-2': '800',
        'hue-3': 'A700'
      })
      .backgroundPalette('gmail-grey');

    $mdThemingProvider.generateThemesOnDemand(false);
  }
})();
