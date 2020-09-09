angular.module('toolsModule').directive('bookTextEditor', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      slide:'=',
      close: '&'
    },
    templateUrl: '/bundles/bibsdbbook/apps/toolsModule/book-text-editor.html'
  };
});