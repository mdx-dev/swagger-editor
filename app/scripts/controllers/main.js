'use strict';

PhonicsApp.controller('MainCtrl', function MainCtrl($rootScope, $stateParams,
  $location, Editor, Storage, FileLoader, BackendHealthCheck, defaults) {
  /*
  * Load docs
  */
  function loadDocsFromUrl(url, cb) {
    FileLoader.loadFromUrl(url).then(function (yaml) {
      if (yaml) {
        Storage.save('yaml', yaml);
        $rootScope.editorValue = yaml;
      } else {
        Storage.load('yaml');
      }
      if (cb) {
        cb();
      }
    });
  }

  var url = window.location.protocol + '//api.' + window.location.host.replace('www.', '') + '/v2/swagger.json';

  loadDocsFromUrl(url, function () {
    $rootScope.$on('$stateChangeStart', Editor.initializeEditor);
    BackendHealthCheck.startChecking();
    $rootScope.$on('$stateChangeStart', function () {
      if ($stateParams.import) {
        url = $stateParams.import;
        $location.search('import', null);
        loadDocsFromUrl(url);
      }
    });
    $rootScope.isPreviewMode = (
      defaults.disableEditing || $stateParams.mode !== 'edit'
    );

    // TODO: find a better way to add the branding class (grunt html template)
    $('body').addClass(defaults.brandingCssClass);
  });

});
