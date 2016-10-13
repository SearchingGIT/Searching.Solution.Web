
var MessageController = function (ApiService) {
    console.log('MessageControler said hello');
    ApiService.GetMyAnnouncing(1)
        .success(function (response) {
           // var date = response[1]['Date_Announcing']
           // var testDate = new Date(parseInt(response[1]['Date_Announcing'].substr(6)));
           // var json = JSON.stringify(testDate);
           // var dateStr = JSON.parse(json);
           // var dat = new Date(dateStr);
           //// var formated_date = testDate.format("yyyy-mm-dd");
            //console.log('testDate',testDate);
            //console.log('json:', json);
            //console.log('dateStr:', dateStr);
            //console.log('dat', dat);
            console.log(response);
        });
}
MessageController.$inject = ['ApiService'];