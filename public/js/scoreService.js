var app = angular.module("scoreKeeper");
app.service("scoreService", function ($http) {

        //TODO create a service function that gets all records from the database

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
        return $http.get('db/scores/'+ name).then(function (response) {
            return response.data;
        })

    }

});
