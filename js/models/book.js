/**
 * Created by user on 08.02.2017.
 */

var app = app || {};

app.Book = Backbone.Model.extend({
   defaults: {
       coverImage: 'img/img.jpg',
       title: 'No title',
       author: 'Unknown',
       releaseDate: 'Unknow',
       keywords: 'None'
   },
    parse: function( response){
        response.id = response._id;
        return response;
    }
});