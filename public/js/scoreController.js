var app = angular.module("scoreKeeper");
app.controller("scoreController", function($scope, scoreService) {
    $scope.formScore = {};

    $scope.scores =[]
    
    $scope.myWins = 0;
    $scope.myLosses = 0;
    $scope.myTies = 0;
    
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
