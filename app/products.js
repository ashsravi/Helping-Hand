var app = angular.module('store-directives', []);

app.directive("descriptions", function() {
  return {
    restrict: "E",
    templateUrl: "descriptions.html"
  };
});

app.directive("comments", function() {
  return {
    restrict: "E",
    templateUrl: "comments.html"
  };
});

app.directive("condition", function() {
  return {
    restrict: "E",
    templateUrl: "condition.html"
  };
});

// app.directive("calendar", function() {
//   return {
//     restrict: "E",
//     templateUrl: "calendar.html"
//   };
// });

app.directive("productTabs", function() {
  return {
    restrict: "E",

    templateUrl: "product-tabs.html",
    controller: function() {
      this.tab = 1;

      this.isSet = function(checkTab) {
        return this.tab === checkTab;
      };

      this.setTab = function(activeTab) {
        this.tab = activeTab;
      };
    },
    controllerAs: "tab"
  };
});
