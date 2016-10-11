var MessageController = function (ApiService) {
    console.log('MessageControler said hello');
    ApiService.GetMyAnnouncing(1)
        .success(function (response) {
            console.log('GetMyAnnouncing success!!Data:', response);
        });
}
MessageController.$inject = ['ApiService'];