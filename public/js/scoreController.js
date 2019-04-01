var app = angular.module("scoreKeeper");
app.controller("scoreController", function($scope, scoreService) {
    $scope.formScore = {};

    $scope.scores =[]
    
    $scope.myWins = 0;
    $scope.myLosses = 0;
    $scope.myTies = 0;
    
        //TODO get all records from database, sort by name, then push each record with the same name into its own new array in a 2 dimensional array. After that, loop through each array and get the total of wins. If the win total is higher than the next, push that name into an array of names. Ng repeat those names under the ranking

    
    $scope.addScore = function() {
    scoreService.getWins($scope.formScore.name)

        scoreService.addScore($scope.formScore).then(function() {
            $scope.formScore = {};

           scoreService.getScores().then(function(score) {
                $scope.scores = score;
            });
        });
        
        scoreService.getWins($scope.formScore.name).then(function(response){
            for(i=0;i<response.length;i++){
                if (response[i].myScore > response[i].opponentScore){
                    $scope.myWins++;
                } else if (response[i].myScore < response[i].opponentScore){
                    $scope.myLosses++;
                } else{
                    $scope.myTies++
                }
            }
        });
    };
    
});
