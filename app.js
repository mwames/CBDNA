var app = angular.module('cbdna', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    var concertsState = {
        name: 'concerts',
        url: '/concerts',
        templateUrl: './views/concerts.html',
        controller: 'ConcertsController as concerts'
      }
    
      var homeState = {
        name: 'home',
        url: '/',
        templateUrl: './views/home.html',
        controller: 'HomeController as home'
      }

      var icbState = {
          name: 'icb',
          url: '/intercollegiateBand',
          templateUrl: './views/icb.html',
          controller: 'ICBController as icb'
      }

      var registrationState = {
        name: 'registration',
        url: '/registration',
        templateUrl: './views/registration.html',
        controller: 'RegistrationController as registration'
      }

      var diningState = {
          name: 'dining',
          url: '/dining',
          templateUrl: './views/dining.html',
          controller: 'DiningController as dining'
      }

      var researchState = {
        name: 'research',
        url: '/research',
        templateUrl: './views/research.html',
        controller: 'ResearchController as research'
      }

      var lodgingState = {
          name: 'lodging',
          url: '/lodging',
          templateUrl: './views/lodging.html',
          controller: 'LodgingController as lodging'
      }

      var travelState = {
          name: 'travel',
          url: '/travel',
          templateUrl: './views/travel.html',
          controller: 'TravelController as travel'
      }

      var contactState = {
          name: 'contact',
          url: '/contact',
          templateUrl: './views/contact.html',
          controller: 'ContactController as contact'
      }

      $stateProvider.state(concertsState);
      $stateProvider.state(diningState);
      $stateProvider.state(homeState);
      $stateProvider.state(icbState);
      $stateProvider.state(registrationState);
      $stateProvider.state(researchState);
      $stateProvider.state(lodgingState);
      $stateProvider.state(travelState);
      $stateProvider.state(contactState);
      $urlRouterProvider.otherwise("/");
}); 