//app.service("ApiService", ['$http', function ($http) {
    //this.GetCategories = function () {
//    return $http.get("http://192.168.200.100/Searching.BE.Service//WCFRESTService.svc/GetCategories");
//Category_id, Country_id, City_id, Areas_id, Gender_user, DateAnnouncing, MinDateBirthday, MaxDateBirthday, Popular, DateSort
//Category_id: Category_id, Country_id: Country_id, City_id: City_id, Areas_id: Areas_id, Gender_user: Gender_user, DateAnnouncing: DateAnnouncing, MinDateBirthday: MinDateBirthday, MaxDateBirthday: MaxDateBirthday, Popular: Popular, DateSort: DateSort


var ApiService = function ($q, $http, localStorageService, $timeout) {
    this.GetCategories = function () {
        return $http({
            url: 'http://searching.in.ua:1703//api/WCFRESTService.svc/GetCategories',
            method: 'GET'
        });
    };

    this.ClearFilter = function () {
        console.log('Filter Clearing Success!');
        SaveFilter=clearFilter;

    }
    this.GetMessage = function () {
        var deferred = $q.defer();
        $timeout(function () {
            deferred.resolve("Allo!");
        }, 2000);
        return deferred.promise
    }

    this.AnnFilter = function (filter) {
        return $http({
            url: 'http://localhost:14396/Ann/GetAnnFilter',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            method: 'POST',
            data: { filter: filter }
        });
    };
    this.GetAnn = function () {
        return $http({
            url: 'http://searching.in.ua:1703//api/WCFRESTService.svc/GetAnnouncing',
            method: 'GET'
        });
    };
    this.GetCountryList = function () {
        return $http({
            url: 'http://searching.in.ua:1703/api/WCFRESTService.svc/GetCountryList',
            method: 'GET'
        });
    };
    this.GetAnnFull = function (ann_id) {
        return $http({
            url: 'http://localhost:14396/Ann/GetAnnFull',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            method: 'POST',
            data: { announcing_id: ann_id }
        });
    };
    this.Auth = function (authUser) {
        return $http({
            url: 'http://localhost:14396/Profile/AuthUser',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            method: 'POST',
            data: { user: authUser }
        });
    };
    this.RegUser = function (regUser) {
        return $http({
            url: 'http://localhost:14396/Profile/RegUser',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            method: 'POST',
            data: { user: regUser }
        });
    };
    this.GetMyUser = function (mail) {
        return $http({
            url: 'http://localhost:14396/Profile/GetMyUser',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            method: 'POST',
            data: { mail: mail }
        });
    }

    this.AddtoFavorite = function (favoriteAnn) {
        return $http({
            url: 'http://localhost:14396/Ann/AddtoFavorite',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            method: 'POST',
            data: { ann: favoriteAnn }
        });
    }

    this.AddtoSelected = function (selectedAnn) {
        return $http({
            url: 'http://localhost:14396/Ann/AddtoSelected',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            method: 'POST',
            data: { ann: selectedAnn }
        });
    }
    this.GetMyAnnouncing = function (id) {
        return $http({
            url: 'http://localhost:14396/Profile/GetMyAnnouncing',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            method: 'POST',
            data: { id: id }
        });
    }

    this.GetAreasOfCity = function (id) {
        return $http({
            url: 'http://localhost:14396/Ann/GetAreasOfCity',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            method: 'POST',
            data: { city_id: id }
        });
    }

    this.GetCityOfCountries = function (id) {
        return $http({
            url: 'http://localhost:14396/Ann/GetCityOfCountries',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            method: 'POST',
            data: { country_id: id }
        });
    }

    this.AddAnnouncing = function (ann) {
        return $http({
            url: 'http://localhost:14396/Ann/AddAnnouncing',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            method: 'POST',
            data: { ann: ann }
        });
    }

    this.DeleteAnnouncing = function (id) {
        return $http({
            url: 'http://localhost:14396/Ann/DeleteAnnouncing',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            method: 'POST',
            data: { id: id }
        });
    }

    this.AddMessage = function (msg) {
        return $http({
            url: 'http://localhost:14396/Message/AddMessage',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            method: 'POST',
            data: { msg: msg }
        });
    }

    this.EditProfile = function (user) {
        return $http({
            url: 'http://localhost:14396/Profile/EditProfile',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            method: 'POST',
            data: { user: user }
        });
    }
};
ApiService.$inject = ['$q','$http','localStorageService','$timeout'];