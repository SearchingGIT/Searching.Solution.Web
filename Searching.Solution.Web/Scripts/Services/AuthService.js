//var _uer = {
//    User_id: null,
//    Mail: 'Cp5@mail1er.ru',
//    Name: null,
//    LastName: null,
//    Phone: null,
//    Gender_user: null,
//    Date_Bearthday: null,
//    Password: 'Adolf1231',
//    Info: null,
//    Country_id: null,
//    Type_login: null,
//    City_id: null
//};

var AuthService = function ($q, $location, ApiService, $cookieStore, $http, CheckAuthService) {
    //$cookieStore.put('token', _uer);
    var deferred = $q.defer();
    if ($cookieStore.get('token')) {
        console.log('cookies store has value');
        loginUser = $cookieStore.get('token');
        console.log('loginUser getting value',loginUser);
        ApiService.Auth(loginUser)
        .success(function (response) {
            //result = response;
            //deferred.resolve(response);
            console.log('apiservice.auth success! Response code:', response['Code']);
            if(response['Code']==false)
            {
                CheckAuthService.status.authorized = false;
                //deferred.reject();
                $location.path("/Login");
                
            } else { deferred.resolve(response); CheckAuthService.status.authorized = true;}
            
        })
        .error(function (fail) {
            CheckAuthService.status.authorized = false;
            console.log('ApiService.Auth have fail!');
            deferred.reject(fail);
        });
    } else {
        CheckAuthService.status.authorized = false;
        console.log('cookies store dont have value');
        $location.path("/Login");
    }
    
    return deferred.promise;

};
AuthService.$inject = ['$q', '$location','ApiService','$cookieStore','$http','CheckAuthService'];