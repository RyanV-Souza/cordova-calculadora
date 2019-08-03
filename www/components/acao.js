$(document).on("click", ".num", function(){
  visorCalc = $("#visor").val();
  $("#visor").val(visorCalc + $(this).val());
})

$(document).on("click", ".btnIgual", function(){

  var valorTotal = $("#visor").val();
  var valorTotal2 = valorTotal.split(" ");

  switch (valorTotal2[1]){
      case 'x':
          var resultado = valorTotal2[0] * valorTotal2[2];
          break;

      case '√':
        var resultado = Math.sqrt(valorTotal2[0]);
        break;

      case '^':
        var resultado = Math.pow(valorTotal2[0],valorTotal2[2]);
        break;

      case '+':
        var resultado = parseFloat(valorTotal2[0]) + parseFloat(valorTotal2[2]);
        break;
        
      case '-':
        var resultado = valorTotal2[0] - valorTotal2[2];
        break;

      case '÷':
        var resultado = valorTotal2[0] / valorTotal2[2];
        break;

      case '%':
        if((valorTotal2[0] != "") && (valorTotal2[2] != "")){

          var resultado = (valorTotal2[2] / 100) * valorTotal2[0];
        } else if ((valorTotal2[0] != "") && (valorTotal2[2] == "")){

          var resultado = (valorTotal2[0] / 100);
        }    
        break;
  }
  
  $("#visor").val(resultado);
})