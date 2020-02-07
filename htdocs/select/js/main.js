(function(){
"use strict";

$(function(){
  
  const $body = $("body");
  
  $body.on("click", ".nSelect_1", function(e){
    const $me = $(e.currentTarget),
          $label = $me.find("label"),
          $checkbox = $me.find("input[type=checkbox]"),
          $options = $me.find(".nSelect_1__options"),
          $option = $options.children();
    
    $option.click(function(e){
      e.preventDefault();
      const $me = $(e.currentTarget),
            value = $me.data("value");
      console.log("value", value);
      $label.text( $me.text() );
      $checkbox.val(value);
      $checkbox.prop("checked", false);
    });
    
  });
  
});

}());