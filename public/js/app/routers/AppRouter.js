
define([
    'underscore',
    'backbone',
    'app/views/View'
  ], function(_, Backbone, View) {

  var AppRouter = Backbone.Router.extend({

    routes : {
      '' : 'index'
    },

    initialize : function(options) {
      console.log('AppRouter: init');

      this.collection = options.collection;
      this.$content = options.content;
      this.currentView = null;

    },

    index : function () {
      console.log('default route');

      this.view = new View({
        collection : this.collection,
        content : this.$content,
        router : this
      });

      this.changeView(this.view);

    },

    // May need to replace this logic with that suggested in:
    // http://lostechies.com/derickbailey/2011/09/15/zombies-run-managing-page-transitions-in-backbone-apps/
    changeView : function(view) {
      if (this.currentView) {
        if (this.currentView == view) {
          return;
        }
        this.currentView.remove();
      }
      view.render();

      this.currentView = view;
    }

  });

  return AppRouter;
});

