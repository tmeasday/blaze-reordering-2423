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
  
  Session.set('showItems', true)
  Template.hello.helpers({
    showItems: function() {
      return Session.get('showItems');
    },
    
    items: function () {
      return Items.find()
    }
  });

  Template.hello.events({
    'click button': function () {
      Session.set('showItems', false);
      // insertItem();
    }
  });
}
