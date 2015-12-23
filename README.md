meteor-collection-pluck
=======================
Adds a method `pluck` to Meteor collections.

```js
Meteor.users.find().pluck('_id'); // => return array of user IDs
```
