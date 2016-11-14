import angular from 'angular';
import 'angularfire';
import firebaseInstance from './firebase';
import categories from './categories';


angular.module('services', ['firebase'])
    .constant('firebase', firebaseInstance)
    .service('categories', categories);