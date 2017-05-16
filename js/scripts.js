// @codekit-prepend "jquery.js";
// @codekit-prepend "semantic.js";

/**********************************
  CONFIGURE JSON CALL
**********************************/ 
// The API feed
var getStuff = 'http://lrknees.dropmark.com/420945.json';

// Optional settings for private collections. This is public, no settings needed. 
var setStuff = {};

// Do stuff with returned data
var doStuff = function(data) {

    console.log(data.items);
//    console.log(data.items[0].link);
//    console.log(data.items[0].name);
//    console.log(data.items[0].thumbnails.cropped);
//    console.log(data.items[0].preview);
    
  
  // What do you want to do? Show (display on page) data? 
  showStuff(data);
  
};

/************************************
  GET JSON FROM API
************************************/ 
$.getJSON( getStuff, setStuff, doStuff);


// SHOW ON PAGE

var showStuff = function(data) {
    // Put on page
    $('h1').text(data.name);
    $('p a').attr('href', data.url);
    
    // Child Objects. May have may children.
    // Loops or cycle through all the data
    
    $.each(data.items, function(i) {
        // Display data at each loop
        // loop
        var stuff = '<p>' + data.items[i].name + '</p>';
        
        // put onto page
        $('#items').append(stuff);
    });
};