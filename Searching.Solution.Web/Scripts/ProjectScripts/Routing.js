
var configFunction = function ($stateProvider, $httpProvider, $locationProvider, $routeProvider) {

    //var newBaseUrl = "";
    //if (window.location.hostname == "localhost") {
    //    newBaseUrl = "http://localhost:14396/Scripts";
    //} else {
    //    var deployedAt = window.location.href.substring(0, window.location.href);
    //    newBaseUrl = deployedAt + "/Scripts";
    //}
    //RestangularProvider.setBaseUrl(newBaseUrl);

    //$routeProvider.otherwise({ redirectTo: '/search/' });

    //$locationProvider.hashPrefix('!').html5Mode(true);
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    }).hashPrefix('!');
    $stateProvider

        .state('home', {
            url: '/search/',
            templateUrl: 'Home/StartPage',
            views: {
                "ContentContainer": {
                    templateUrl: '/Navigation/Search',
                    controller: SearchController

                },
                "AnnContainer@home": {
                    templateUrl: '/Ann/AnnouncingList',
                    controller: AnnController
                }
            }
        })
        .state('start', {
            url: '/',
            controller: LoadController
        })
        //.state('stateSearch', {
        //    url: '/Search',
        //    views: {
        //        "ContentContainer": {
        //            templateUrl: '/Navigation/Search',
        //            controller: SearchController
                        
        //        },
        //        "AnnContainer@stateSearch": {
        //            templateUrl: '/Ann/AnnouncingList',
        //            controller: AnnController
        //        }
        //    }
        //})

        .state('stateSearch.Announcing', {
            url: '/Announcing?categories_id',
            views: {
                "AnnContainer": {
                    templateUrl: function (param) { return '/Ann/AnnouncingList?categories_id=' + param.categories_id; },
                    controller: AnnController
                }
            }
        })

        .state('stateAnn', {
            url: '/Announcing',
            views: {
                "ContentContainer": {
                    templateUrl: '/Search/Test'
                }
            }
        })
        
        .state('stateProfile', {
            url: '/Profile',
            views: {
                "ContentContainer": {
                    templateUrl: '/Navigation/Profile',
                    controller: ProfileController,
                    resolve: {
                        factory: AuthService
                        }
                }
                //"ProfileContainer@stateProfile": {
                //    templateUrl: '/Navigation/Profile',
                //    controller: ProfileController,
                //    resolve: {
                //        factory: AuthService
                //    }
                //}
                }
        })

        .state('stateLogin', {
            url: '/Login',
            views: {
                "ContentContainer": {
                    templateUrl: '/Profile/Login',
                    controller:LoginController
                }
            }
        })

        .state('stateRegistration', {
            url: '/Registration',
            views: {
                "ContentContainer": {
                    templateUrl: '/Profile/Registration',
                    controller: RegistrationController
                }
            }
        })
        
    .state('home.Announcing', {
        url: 'Announcing?categories_id',
        views: {
            "AnnContainer": {
                templateUrl: function (param) { return '/Ann/AnnouncingList?categories_id=' + param.categories_id; },
                controller: AnnController
            }
        }
    })
}
configFunction.$inject = ['$stateProvider', '$httpProvider', '$locationProvider','$routeProvider'];
app.config(configFunction);
