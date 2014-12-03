'use strict';

PhonicsApp.controller('MainCtrl', function MainCtrl($rootScope, $stateParams,
  $location, Editor, Storage, FileLoader, BackendHealthCheck, defaults) {
  $rootScope.$on('$stateChangeStart', Editor.initializeEditor);
  BackendHealthCheck.startChecking();
  $rootScope.$on('$stateChangeStart', loadYaml);
  $rootScope.isPreviewMode = (
    defaults.disableEditing || $stateParams.mode !== 'edit'
  );

  // TODO: find a better way to add the branding class (grunt html template)
  $('body').addClass(defaults.brandingCssClass);

  loadYaml();
  /*
  * Load Default or URL YAML
  */
  function loadYaml() {
    Storage.load('yaml').then(function (yaml) {
      var url;

      // If there is a url provided, override the storage with that URL
      if ($stateParams.import) {
        url = $stateParams.import;
        $location.search('import', null);

      // If there is no saved YAML either, load the default example
      } else if (!yaml) {
        url = defaults.examplesFolder + defaults.exampleFiles[0];
      }

      if (url) {
        FileLoader.loadFromUrl(url).then(function (yaml) {
          if (yaml) {
            Storage.save('yaml', yaml);
            $rootScope.editorValue = yaml;
          }
        });
      }
    });
  }
});
