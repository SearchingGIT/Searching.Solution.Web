//var _user = {
//    User_id: null,
//    Mail: 'Cp5@mail1er.ru',
//    Name: null,
//    LastName: null,
//    Phone: null,
//    Gender_user: null,
//    Date_Bearthday: null,
//    Password: 'Adolf123',
//    Info: null,
//    Country_id: null,
//    Type_login: null,
//    City_id: null
//};


var StartController = function ($scope, $http, ApiService, CheckAuthService, $cookieStore, $location) {
    $scope.authUser = false;
    var loginUser = new LoginUser();
    var user = new User();
    //ApiService.Auth($cookieStore.get('token')).success(function (response) {
    //    console.log(response);
    //}).error(function(fail){
    //    console.log(fail);
    //});
    $scope.CheckService = CheckAuthService;
     $scope.authUser = CheckAuthService.check();
     if ($scope.authUser == true) {
         console.log('$scope.authUser:', $scope.authUser);
        loginUser = $cookieStore.get('token');
        ApiService.GetMyUser(loginUser.Mail)
        .success(function (response) {
            $scope.user = response;
            console.log('user:', $scope.user);
        })
        .error(function (fail) {
            console.log('fail',fail);
        }
        );
        
    } else {
        console.log('Not Auth user');
    }

    
    //ApiService.Auth(_user)
    //.success(function (response) {
    //    console.log('success!');
    //    console.log(response['Code']);
    //})
    //.error(function (fail) {
    //    console.log('fail');
    //    console.log(fail);
    //});
    console.log('Start Controller!');
    $scope.Clear = function () {
        console.log('clear work!')
        console.clear();
        ApiService.ClearFilter();
    };
    $scope.TestAnn = function (Ann_id) {
        console.log('ann_id:', Ann_id);
        var result = CheckAuthService.check();
        console.log('result code:',result);
        if (result == true) {
            console.log('result=true');
            ApiService.GetAnnFull(Ann_id)
            .success(function (response) {
                console.log(response);
            })
            .error(function (fail) {
                console.log(fail);
            });
        }
    }

    $scope.exit = function () {
        $cookieStore.remove('token');
        loginUser.Mail = null;
        loginUser.Password = null;
        $location.path('/Login');
        CheckAuthService.falseStatus();

    }

    $scope.$watch('CheckService.status.authorized', function (newVal) {
        console.log('Check Service change Value:', newVal);
        $scope.authUser = newVal;
        if ($scope.authUser == true) {
            console.log('$scope.authUser:', $scope.authUser);
            loginUser = $cookieStore.get('token');
            ApiService.GetMyUser(loginUser.Mail)
            .success(function (response) {
                $scope.user = response;
                console.log('user:', $scope.user);
            })
            .error(function (fail) {
                console.log('fail', fail);
            }
            );

        } else {
            console.log('Not Auth user');
        }
    })
}
StartController.$inject = ['$scope', '$http', 'ApiService', 'CheckAuthService', '$cookieStore', '$location'];