//Route Configuration
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/index-view.html"
    })
    .when("/prime", {
        templateUrl : "views/prime.html",
        controller : 'prime', // which controller it should use
        controllerAs : 'p' // what is the alias of that controller.
    })
    .when("/palindrome", {
        templateUrl : "views/palindrome.html",
        controller : 'palindrome', // which controller it should use
        controllerAs : 'p' // what is the alias of that controller.
    })
    .when("/fibo", {
        templateUrl : "views/fibo.html",
        controller : 'fibo', // which controller it should use
        controllerAs : 'f' // what is the alias of that controller.
    })
    .otherwise(
       {
           redirectTo:'/'
       }
     );
});
