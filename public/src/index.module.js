import angular from 'angular';
import 'angular-ui-router';
import 'bootstrap/dist/css/bootstrap.css';
import categoriesComponent from './pages/categories/categories.page';
import {manageCategories} from './pages/manage-categories/manage-categories';

// Modules
import './components/components.module';

// Services
import './services/services';

angular.module('app', ['ui.router',
    'components',
    'services'])
    .component('categories', categoriesComponent)
    .component('manageCategories', manageCategories)
    .config(routerConfig);


function routerConfig($stateProvider,
                      $urlRouterProvider) {
    $stateProvider
        .state('Categories', {
            url: '/categories',
            template: '<categories></categories>'
        })
        .state('ManageCategories', {
            url: '/manage-categories',
            template: '<manage-categories></manage-categories>'
        });

    $urlRouterProvider.otherwise('/categories');
}
routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
