angular.module('buttons', [])
    .controller('ThoseButtonsCtrl', ['$scope', '$window', function($scope) {

        //my data, things. Does not have classes yet
        $scope.things = [
            {name: "water bottle"},
            {name: "can"},
            {name: "truck"},
            {name: "phone"}
        ];
        //Takes an index of the 'thing' that should have the class 'active'.
        $scope.activate = function(ind){
            //takes all of the things and makes them have class button inactive
            // (even if there wasn't a thing.class yet)
            for(var i = 0; i < $scope.things.length; i++){
                $scope.things[i].classes = "button inactive";
            }
            $scope.things[ind].classes = "button active";
        };

        //init the classes in Things array when you load the page
        // We pass in 0 so that the 0th item in the list has class 'button active'
        $scope.activate(0);
        //the resulting $scope.things will look like...
        //  [
        //    {name: "water bottle", classes:"button active"},
        //    {name: "can", classes:"button inactive"},
        //    {name: "truck", classes:"button inactive"},
        //    {name: "phone", classes:"button inactive"}
        //  ]

    }]);