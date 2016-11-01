import angular from 'angular';
import 'angular-ui-router';
import 'bootstrap/dist/css/bootstrap.css';
import categoriesComponent from './pages/categories/categories.page';

// Modules
import './components/components.module';

angular.module('app', ['ui.router',
    'components'])
    .component('categories', categoriesComponent)
    .config(routerConfig);


function routerConfig($stateProvider,
                      $urlRouterProvider) {
    $stateProvider
        .state('Categories', {
            url: '/categories',
            template: '<categories></categories>'
        });

    $urlRouterProvider.otherwise('/categories');
}
routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
