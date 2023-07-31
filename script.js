function soma() {
  let num1 = document.getElementById("num1").value;

  let num2 = document.getElementById("num2").value;

  let soma = parseInt(num1) + parseInt(num2);

  alert(soma);
}
function diminuir() {
  let num1 = document.getElementById("num1").value;

  let num2 = document.getElementById("num2").value;

  let diminuir = parseInt(num1) - parseInt(num2);
  alert(diminuir);
}
function multiplicar() {
  let num1 = document.getElementById("num1").value;

  let num2 = document.getElementById("num2").value;

  let multiplicar = parseInt(num1) * parseInt(num2);

  alert(multiplicar);
}
function dividir() {
  let num1 = document.getElementById("num1").value;

  let num2 = document.getElementById("num2").value;
  if (num2 == 0){
    alert("não é possivel fazer essa operação");
  }
else{
  let dividir = parseInt(num1) / parseInt(num2);

  alert(dividir);
}
}
