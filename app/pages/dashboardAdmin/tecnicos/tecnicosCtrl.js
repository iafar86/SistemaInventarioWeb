/**
 * Created by ifarhat on 31/01/2017.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.dashAdmin')
        .controller('tecnicosCtrl', tecnicosCtrl);

    /** @ngInject */
    function tecnicosCtrl($scope, $filter, editableOptions, editableThemes){

var 
        var usuarios=[
            {
                Id:1,
                Usuario:"Cacho1",
                Nombre: "Cachito",
                Apellido: "DeLasPraderas",
                Password:"QWERTY123",
                Permisos:"Tecnicos"
            },
            {
                Id:2,
                Usuario:"Tecnico2",
                Nombre: "Tecnico",
                Apellido: "Tecnicadio",
                Password:"Lala321",
                Permisos:"Tecnico"
            },
            {
                Id:3,
                Usuario:"Admin",
                Nombre: "Administrador",
                Apellido: "Administrator",
                Password:"Asdfg789",
                Permisos:"Administrador"
            },
        ];

        this.Usuarios= usuarios;

    }
})();