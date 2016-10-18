
var MessageController = function (ApiService) {
    var ann = new Ann();
    ann.Categories_id = 1;
    ann.Info_Announcing = 'test';
    ann.Name_Announcing = 'test';
    ann.City_id = 1;
    ApiService.AddAnnouncing(ann).success(function (response) {
        console.log(response);
    });
    console.clear();
    console.log('MessageControler said hello');
    
}
MessageController.$inject = ['ApiService'];