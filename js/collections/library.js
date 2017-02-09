/**
 * Created by user on 08.02.2017.
 */

var app = app || {};
app.Library = Backbone.Collection.extend({
   model: app.Book,
   url: '/api/books'
});