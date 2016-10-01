(function () {
    angular.module("header")
        .controller("headerCtrl", ["$scope", function ($scope) {
            $scope.headerUrl = "app/header/header.html";

            $scope.headerItems = ["home",
                                    "Products",
                                    "Cart",
                                    "login", "Register"];
            $scope.selectChoice = function (item) {
                $scope.loadTemplate = "app/templates/" + item + ".html"
            };
    }])
})();
