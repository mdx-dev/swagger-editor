'use strict';

PhonicsApp.controller('EditorCtrl', function EditorCtrl($scope, $rootScope,
  Editor, Builder, Storage, ASTManager, defaults) {

  var debouncedOnAceChange = _.debounce(onAceChange, 200);

  if (defaults.disableEditing === true) {
    return $state.go('home', {mode: null});
  }

  $scope.aceLoaded = Editor.aceLoaded;

  $scope.aceChanged = function () {
    Storage.save('progress', 0);
    debouncedOnAceChange();
  };

  Editor.ready(function () {
    Storage.load('yaml').then(function (yaml) {
      $rootScope.editorValue = yaml;
      onAceChange();
    });
  });

  function onAceChange() {
    var value = $rootScope.editorValue;

    Storage.save('yaml', value);
    ASTManager.refresh();
  }
});
