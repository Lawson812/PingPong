var app = angular.module("scoreKeeper");
app.service("scoreService", function ($http) {

    this.getScores = function () {

        return $http.get('/db/scores').then(function (response) {
            return response.data;
        });
    };


    this.addScore = function (newScore) {
        return $http.post('/db/scores', newScore).then(function (response) {
            return response;
        })
    };

    this.getWins = function (name) {
        return $http.get('db/scores/', name).then(function (response) {
            console.log(response)
//            console.log(response.data)
//            for (i = 0; i < response.data.length; i++) {
//                if (response.data[i].name == response.data[i].name) {
//                  
//                } 
//            }
        })

    }

});
