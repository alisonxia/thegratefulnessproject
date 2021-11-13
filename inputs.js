var $form = $('form#submissions'),
    url = 'https://script.google.com/macros/s/AKfycbxyFtAXu67oA51Fu4RRXhs2kSvCCBy0aFiUOf4VRKrTAa-GB_lOqCEPBFmP0xE_9WSX/exec'

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
