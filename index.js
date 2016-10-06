(function() {
  'use strict';
  angular
    .module('soc-faf-bmTags', []);

  angular
    .module('soc-faf-bmTags')
    .directive('bmTags', bmTags);

  function bmTags() {
    var directive = {
      restrict: 'E',
      templateUrl: 'tags.directive.html',
      scope: {},
      controller: bmTagsCtrl,
      controllerAs: 'bm',
      bindToController: true
    };
    return directive;
  };

  bmTagsCtrl.$inject = ['$scope', 'AppModel', 'TagService'];

  function bmTagsCtrl($scope, AppModel, TagService) {
    var bm = this;

    bm.vm = AppModel.get('all');

    $scope.$watch("bm.vm", function(val){
      bm.tags = TagService.getTags(val.list);
    }, true);
  };

})();
