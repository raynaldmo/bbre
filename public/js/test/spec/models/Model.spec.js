/**
 * Created by raynald on 8/30/14.
 */

define(['backbone', 'app/models/Model'], function(Backbone, Model) {
    describe("Model Template", function () {
      var model;

      beforeEach(function() {
        model = new Model();
      });

      it("should be a Backbone.Model", function(){
        expect(model).toEqual(jasmine.any(Backbone.Model));
      });

      it("should have default values", function() {

      });

      afterEach(function() {
        model.destroy();
      })

    });

});