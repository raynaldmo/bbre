
require([ 'backbone','app/routers/AppRouter', 'app/collections/Collection' ],

  function(Backbone, AppRouter, Collection){

    var myCollection  = new Collection({localStoreName : 'my-collection'});
    // myCollection.comparator = '';

    // manually add a couple of contacts (for testing)
    // myCollection.add([])

    // myCollection.fetch();

    // instantiate and start router
    var appRouter = new AppRouter({
      content : $('#content'), collection : myCollection
    });

    Backbone.history.start();

  });
