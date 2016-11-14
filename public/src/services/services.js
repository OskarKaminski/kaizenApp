import angular from 'angular';
import 'angularfire';
import firebaseInstance from './firebase';
import categories from './categories';
import courses from './courses';


angular.module('services', ['firebase'])
    .constant('firebase', firebaseInstance)
    .service('categories', categories)
    .service('courses', courses);