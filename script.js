angular.module('buttons', [])
    .controller('ThoseButtonsCtrl', ['$scope', '$window', function($scope) {

        //my data, things. Does not have classes yet
        $scope.things = [
            {name: "water bottle"},
            {name: "can"},
            {name: "truck"},
            {name: "phone"}
        ];
        $scope.activeThingIndex = 0;
        //Takes an index of the 'thing' that should have the class 'active'.
        $scope.activate = function(ind){
            //Sets the previously active button to inactive
            $scope.things[$scope.activeThingIndex].classes = "button inactive";
            //sets the new one to active
            $scope.things[ind].classes = "button active";
            $scope.activeThingIndex = ind;
        };

        //init the classes in Things array when you load the page
        $scope.initDataWithClasses = function() {
            for(var i = 0; i < $scope.things.length; i++){
                $scope.things[i].classes = "button inactive";
            }
            $scope.things[0].classes = "button active";

        };
        $scope.initDataWithClasses();
        //the resulting $scope.things will look like...
        //  [
        //    {name: "water bottle", classes:"button active"},
        //    {name: "can", classes:"button inactive"},
        //    {name: "truck", classes:"button inactive"},
        //    {name: "phone", classes:"button inactive"}
        //  ]

    }]);