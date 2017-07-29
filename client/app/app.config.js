//inject angular dependencies
routes.$inject = [ '$stateProvider', '$locationProvider','$urlRouterProvider'];

export default function routes($stateProvider, $locationProvider, $urlRouterProvider){

  //declare state properties
  var homeState = {
    name: 'home',
    url: '/home',
    component: 'home'
  }

  var newsState = {
    name: 'news',
    url: '/news',
    component: 'news'
  }

  var videosState = {
    name: 'videos',
    url: '/videos',
    component: 'videos'
  }

  var nintendoState = {
    name: 'nintendo',
    url: '/nintendo',
    component: 'nintendo'
  }

  var sonyState = {
    name: 'sony',
    url: '/sony',
    component: 'sony'
  }

  var microsoftState = {
    name: 'microsoft',
    url: '/microsoft',
    component: 'microsoft'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3> about state template </h3>',
    controller: function() {
      console.log("about controller");
      console.log(2 % 2);
    }
  }

  $stateProvider.state(homeState);
  $stateProvider.state(newsState);
  $stateProvider.state(videosState);
  $stateProvider.state(nintendoState);
  $stateProvider.state(sonyState);
  $stateProvider.state(microsoftState);
  $stateProvider.state(aboutState);

  //cleaner url
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/home');

}
