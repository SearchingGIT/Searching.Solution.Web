//var loginUser = {
//    Mail: null,
//    Password: null,
//};

var LoginUser = function(){
    this.Mail= null,
    this.Password = null
};

var Ann = function () {
    this.UserName=null,
    this.UserLastName=null,
    this.Name_City=null,
    this.Announcing_id=null,
    this.Name_Announcing=null,
    this.Phone_Announcing=null,
    this.Date_Announcing=null,
    this.Info_Announcing=null,
    this.Categories_id=null,
    this.City_id=null,
    this.User_id=null,
    this.Areas_id=null
    this.JsonDate_Announcing=null
};
//var user = {
//    User_id: null,
//    Mail: null,
//    Name: null,
//    LastName: null,
//    Phone: null,
//    Gender_user: null,
//    Date_Bearthday: null,
//    Password: null,
//    Info: null,
//    Country_id: null,
//    Type_login: null,
//    City_id: null
//};

var User = function(){
    this.User_id= null,
    this.Mail = null,
    this.Name = null,
    this.LastName = null,
    this.Phone = null,
    this.Gender_user = null,
    this.Date_Bearthday = null,
    this.Password = null,
    this.Info = null,
    this.Country_id = null,
    this.Type_login = null,
    this.City_id = null
};

//var regUser = {
//    User_id: null,
//    Mail: null,
//    Name: null,
//    LastName: null,
//    Phone: null,
//    Gender_user: null,
//    Date_Bearthday: null,
//    Password: null,
//    Info: null,
//    Country_id: null,
//    Type_login: null,
//    City_id: null
//};

var RegUser =function() {
    this.User_id= null,
    this.Mail= null,
    this.Name= null,
    this.LastName= null,
    this.Phone= null,
    this.Gender_user= null,
    this.Date_Bearthday= null,
    this.Password= null,
    this.Info= null,
    this.Country_id= null,
    this.Type_login= null,
    this.City_id= null
};
//var Filter = {
//    Category_id: null,
//    Country_id: null,
//    City_id: null,
//    Areas_id: null,
//    Gender_user: null,
//    DateAnnouncing: null,
//    MinDateBirthday: null,
//    MaxDateBirthday: null,
//    Popular: null,
//    DateSort: null,
//    nPage: 1,
//    sizePage:3
//};

//var selectedAnn = {
//    id: null,
//    Announcing_id: null,
//    User_id: null
//};

var SelectedAnn = function(){
    this.id= null,
    this.Announcing_id= null,
    this.User_id= null
};

var FavoriteAnn = function () {
    this.id = null,
    this.Announcing_id = null,
    this.User_id = null
};

var Filter = function(){
    this.Category_id= null,
    this.Country_id= null,
    this.City_id=null,
    this.Areas_id= null,
    this.Gender_user= null,
    this.DateAnnouncing= null,
    this.MinDateBirthday= null,
    this.MaxDateBirthday= null,
   this.Popular= null,
   this.DateSort= null,
    this.nPage= 1,
    this.sizePage= 8
};

var clearFilter = {
    Category_id: null,
    Country_id: null,
    City_id: null,
    Areas_id: null,
    Gender_user: null,
    DateAnnouncing: null,
    MinDateBirthday: null,
    MaxDateBirthday: null,
    Popular: null,
    DateSort: null,
    nPage: 1,
    sizePage: 8
};