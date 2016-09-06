(function() {
  var fakeCollection = new Mongo.Collection("__fake_collection" + Random.id());

  fakeCollection.findOne();

  var cursor = Object.getPrototypeOf(fakeCollection.find(null)).constructor;

  if (!(cursor.pluck)) {
    cursor.prototype.pluck = function(prop) {
      if (prop == null) {
        return [];
      } else {
        return this.map(function(item) {
          return item[prop];
        });
      }
    }
  }
})();
