var app = angular.module("scoreKeeper");
app.controller("scoreController", function($scope, scoreService) {
    // Start the form off empty on page load.
    $scope.formScore = {};

    // Load the cart data on page load.
    scoreService.getScores().then(function(score) {
        
        $scope.core = score;
    });

    // Function on scope called when form is submitted.
    $scope.addScore = function() {
        scoreService.addScore($scope.formScore).then(function() {
            // Clear the form.
            $scope.formScore = {};

           scoreService.getScores().then(function(score) {
                $scope.score = score;
            });
        });
    };

    // Function on scope called when clicking Delete for an item.
    
});
