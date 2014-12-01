
define(['underscore',
        'backbone',
        'storage',
        'app/models/Model'
      ], function(_, Backbone, Store, Model) {

      var Collection = Backbone.Collection.extend({

      model : Model,

      initialize : function(options) {
        this.localStoreName = options.localStoreName;
        this.localStorage =  new Store(this.localStoreName);
      }
    });

    return Collection;
});
