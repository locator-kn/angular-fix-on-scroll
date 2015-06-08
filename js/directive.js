"use strict";

angular.module('locator.scrollfix', []).directive('setClassWhenAtTop', function($window) {
    var $win = angular.element($window);
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var topClass = attrs.setClassWhenAtTop, // get CSS class from directive's attribute value
                offsetTop = element.offset().top; // get element's top relative to the document

            $win.on('scroll', function (e) {
                if ($win.scrollTop() >= offsetTop) {
                    element.addClass(topClass);
                } else {
                    element.removeClass(topClass);
                }
            });
        }
    };
}).

controller('ctrl', function ($scope) {
    $scope.scrollTo = function (target){
    };
});
