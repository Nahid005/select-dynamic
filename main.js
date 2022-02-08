
// multiple payment select option 

$(document).ready(function () {
  $('.box-items').hide();
  $('#option1').show();
  $('#selectPaymentMethod').change(function () {
    $('.box-items').hide();
    $('#'+$(this).val()).show();
  })
});

$(document).ready(function () {
  $('.box-items').hide();
  $('#option1').show();
  $('#selectPaymentAccount').change(function () {
    $('.box-items').hide();
    $('#'+$(this).val()).show();
  })
});