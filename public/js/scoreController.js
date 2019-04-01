var app = angular.module("scoreKeeper");
app.controller("scoreController", function($scope, scoreService) {
    $scope.formScore = {};

    $scope.scores =[]

    $scope.addScore = function() {
        console.log($scope.formScore.name)
    scoreService.getWins($scope.formScore.name)

        scoreService.addScore($scope.formScore).then(function() {
            $scope.formScore = {};

           scoreService.getScores().then(function(score) {
                $scope.scores = score;
               console.log($scope.scores)
            });
        });
    };
    
});
