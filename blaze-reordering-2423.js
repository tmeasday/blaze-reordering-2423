if (Meteor.isClient) {
  Items = new Meteor.Collection(null);

  var itemCount = 0;
  var insertItem = function() {
    itemCount += 1;
    Items.insert({text: itemCount})
  }
  insertItem();
  insertItem();

  Template.hello.rendered = function() {
    this.$('ul').sortable();
  }
  
  Template.hello.helpers({
    items: function () {
      return Items.find()
    }
  });

  Template.hello.events({
    'click button': function () {
      insertItem();
    }
  });
}
