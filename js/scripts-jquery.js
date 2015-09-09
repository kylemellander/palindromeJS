$(document).ready(function() {
  $('form').submit(function(event) {
    var phrase = $('#phrase').val();
    var results = palindrome(phrase);

    if (results === false) {
      $('#not').show();
    } else {
      $('#not').hide();
    }

    $('#results').show();
    event.preventDefault();
  });
});
