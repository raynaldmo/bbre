/**
 * Created by raynald on 8/30/14.
 */

define(
  ['backbone', 'app/collections/Collection', 'app/models/Model'],

  function(Backbone, Collection, Model) {

    describe("Template Collection", function () {
      var collection =
        new Collection({localStoreName : 'my-collections-test'});

      it("should be a Backbone.Collection", function(){
        expect(collection).toEqual(jasmine.any(Backbone.Collection));
      });

      it("should be of Model", function() {
        expect(collection.model).toBe(Model);
      });

    });
});