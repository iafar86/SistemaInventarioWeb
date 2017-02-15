/**
 * Created by ifarhat on 31/01/2017.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.dashAdmin', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {//iafar: seccion de ruteo a las paginas principales 

        
        $stateProvider
        //#region iafar: seccion estados del administrador
            .state('dashboardAdmin', {
                url: '/DashboardAdmin',
                templateUrl: 'app/pages/dashboardAdmin/homeAdmin/partials/homeAdmin.html',
                title: 'Dashboard 2',
                sidebarMeta: {
                    icon: 'ion-android-home',
                    order: 600
                },
            })

            .state('dispositivosList', {
                url: '/dispositivos',
                templateUrl: 'app/pages/dashboardAdmin/dispositivos/partials/dispositivosList.html',
                title: 'Lista de Dispositivos',
                sidebarMeta: {
                    order: 800,
                },
            })

            .state('tecnicosList', {
                url: '/dispositivos',
                templateUrl: 'app/pages/dashboardAdmin/tecnicos/partials/tecnicosList.html',
                controller: 'tecnicosCtrl',
                title: 'Lista de Tecnicos',
                sidebarMeta: {
                    order: 900,
                },
                
                
                //#endregion
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