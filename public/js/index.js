import { response } from "express";

$(document).ready(function(){
// The API object contains methods for each kind of request we'll make
    $('select').formSelect(); 
  $('.modal').modal();


  function getNames(){
    var data = {};

    $.ajax({
      url: "api/recipes/name",
      type: "GET"
    }).then(function(){
     console.log(response)
    });
  };

  getNames();
});

