import './layout-sidebar.scss';
import angular from 'angular';
import LayoutSidebar from './layout-sidebar';

module.exports = angular
    .module('app.layout-sidebar', [])
    .config(require('./layout-sidebar.config'))
    .directive('layoutSidebar', LayoutSidebar.directive)
    .name;
