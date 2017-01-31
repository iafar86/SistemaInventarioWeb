/**
 * Created by ifarhat on 31/01/2017.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.myNewPage', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {

        $stateProvider
            .state('homeAdmin', {
                url: '/adminDashboard',
                templateUrl: 'app/pages/adminDashboard/adminDashboard.html',
                title: 'Dashboard Administrador',
                sidebarMeta: {
                    order: 1,
                },
            })

            .state('homeAdmin.dispositivosList', {
                url: '/mySubPage',
                templateUrl: 'app/pages/myNewPage/subPage/subPage.html',
                title: 'Lista de Dispositivos',
                sidebarMeta: {
                    order: 800,
                },
            });


        // $stateProvider
        //     .state('myNewPage', {
        //         url: '/myFirstPage',
        //         templateUrl: 'app/pages/myNewPage/myFirstPage.html',
        //         title: 'My New Page',
        //         sidebarMeta: {
        //             order: 800,
        //         },
        //     })
        //
        //     .state('myNewPage.subPage', {
        //         url: '/mySubPage',
        //         templateUrl: 'app/pages/myNewPage/subPage/subPage.html',
        //         title: 'My SubPage',
        //         sidebarMeta: {
        //             order: 800,
        //         },
        //     });



    }

})();