import angular from 'angular';
import {okTable} from './ok-table/ok-table';

angular.module('components', [])
    .component('okTable', okTable);