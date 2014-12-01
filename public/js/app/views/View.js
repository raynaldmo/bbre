
define ([
  'jquery',
  'underscore',
  'backbone',
  'app/views/View',
  'text!app/templates/View.html'
  ], function($, _, Backbone, View, viewTemplate) {

  var View = Backbone.View.extend({

    template : _.template(viewTemplate),

    initialize : function(options) {
      this.$content = options.content;
      this.router = options.router;
    },

    events : {

    },

    render : function() {
      this.$el.html(this.template());
      this.$content.html(this.el);
    }

  });

  return View;
});

