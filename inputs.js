var $form = $('form#submissions'),
    url = 'https://script.google.com/macros/s/AKfycbzzxBX5bat8zGWqsQd_E9FTOQiuuYkYVgjiG_Hm9z4FBdq8oQTPZLcWL0ZbMJa15R23/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
