var app = angular.module("scoreKeeper");
app.service("scoreService", function($http) {

    this.getScores = function() {

        return $http.get('/db/scores').then(function(response) {
			return response.data;
		});
    };

 
    this.addScore = function(newScore) {
        return $http.post('/db/scores',newScore).then(function(response) {
			return response;
		})
    };

});
