$(document).on("click", ".num", function(){
  visorCalc = $("#visor").val();
  $("#visor").val(visorCalc + $(this).val());
})