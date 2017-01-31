/**
 * Created by ifarhat on 31/01/2017.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.dashAdmin')
        .controller('tecnicosCtrl', tecnicosCtrl);

    /** @ngInject */
    function tecnicosCtrl($scope, $filter, editableOptions, editableThemes){

        $scope.valor="prueba";
    }
})();