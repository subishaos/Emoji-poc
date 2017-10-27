// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require emojionearea.min

$(document).ready(function() {
  $("#emojionearea1").emojioneArea({
    pickerPosition: "right",
    tonesStyle: "bullet"
  });
  $("#emojionearea2").emojioneArea({
    pickerPosition: "bottom",
    tonesStyle: "radio"
  });
  $("#emojionearea3").emojioneArea({
    pickerPosition: "right",
    filtersPosition: "bottom",
    tonesStyle: "square"
  });
  $("#emojionearea4").emojioneArea({
    pickerPosition: "bottom",
    filtersPosition: "bottom",
    tonesStyle: "checkbox"
  });
  $("#emojionearea5").emojioneArea({
    pickerPosition: "top",
    filtersPosition: "bottom",
    tones: false,
    autocomplete: false,
    inline: true,
    hidePickerOnBlur: false
  });
  $("#standalone").emojioneArea({
    standalone: true,
    autocomplete: false
  });
});
