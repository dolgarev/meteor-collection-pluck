var pluck = LocalCollection.Cursor.prototype.pluck;

if (!(pluck && pluck.constructor && pluck.constructor === Function)) {
  LocalCollection.Cursor.prototype.pluck = function(key) {
    var res = [];
    this.forEach(function(doc) {
      res.push(doc[key]);
    });
    return res;
  };
}
