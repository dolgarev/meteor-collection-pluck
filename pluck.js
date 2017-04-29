(function() {
  if (Meteor.isServer) {
    var fakeCollection = new Mongo.Collection("__fake_collection__" + Random.id());
    fakeCollection.findOne();
    var cursor = Object.getPrototypeOf(fakeCollection.find(null)).constructor
  } else {
    var cursor = Mongo.Cursor
  }

  if (cursor.prototype.pluck) return

  cursor.prototype.pluck = function (prop) {
    if (prop == null) {
      return []
    } else {
      return this.map(function (item) {
        return item[prop]
      })
    }
  }
})();
