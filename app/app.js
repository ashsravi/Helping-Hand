(function() {
  var app = angular.module('Store', ['store-directives']);

  app.controller('GalleryController', function() {
    this.imageIndex = 0;
    this.setCurrent = function(imageNumber) {
      console.log(imageNumber);
      this.imageIndex = imageNumber || 0;
    };
  });

  app.controller('StoreController', function() {
    this.products = listings;
  });


  app.controller("CommentController", function(){

    this.comment = {};

    this.addComment = function(product){
      this.comment.createdOn = Date.now();
      product.comments.push(this.comment);
      this.comment = {};
    };

  });

  app.controller("ConditionController", function(){

    this.condition = {};

    this.opts = [
      { id: 1, type: "Excellent"},
      { id: 2, type: "Good"},
      { id: 3, type: "OK"},
      { id: 4, type: "Not Great"}
    ];
  
  });


  var listings = [{
    name: 'Pool Speakers',
    description: "Turn up.",
    condition: 1,
    images: [
      "img/speakers.jpg"
    ],
    comments: [{
      body: "I can't feel my face",
      author: "The Weeknd",
      createdOn: 1459880701801
    }, {
      body: "Better than Vegas",
      author: "David Guetta",
      createdOn: 1459880701801
    }]
  }, {
    name: 'BBQ Set',
    description: "Just add beer.",
    condition: 2,
    images: [
      "img/bbq.gif"
    ],
    comments: [{
      body: "Hail to the Victors",
      author: "Ashwin",
      createdOn: 1459880701801
    }]
  }, {
    name: 'Avalon',
    description: "Please take it, it's ruined all my friendships.",
    condition: 3,
    images: [
      "img/avalon.jpg"
    ],
    comments: [{
      body: "I should've trusted Ashwin.",
      author: "Kevin",
      createdOn: 1459880701801
    }, {
      body: "I'm so bad, I might be good.",
      author: "Nemo",
      createdOn: 1459880701801
    }]
  }];

})();
