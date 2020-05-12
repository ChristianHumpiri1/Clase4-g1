/*
var texto, resultado;
texto = prompt("Ingresar numero: ");
resultado = Math.sqrt(texto);
document.write(resultado);
console.log(resultado);
alert(resultado);
*/

/*var x,y , op;
x = parseFloat(prompt("n1: "));
y = parseFloat(prompt("n2: "));
op = parseInt(prompt("op: "));
if(a>b) {
    mostrar(a)
}else if(b>a){
   mostrar(b)
}else{
    mostrar("iguales");
}
*/

/*function mostrar(resultado){
    document.write(resultado);
    console.log(resultado);
    alert(resultado);
}
switch(op){
    case 1:mostrar(suma());
    
    break;
    case 2:mostrar(resta());
        break;
    case 3:mostrar(multi());
        break;
    case 4:mostrar(divi());
        break;
    default:break;

}
var W = prompt("N:")
var i = sum=0;
sum = W*(W+1)/2;
 for(i=1; 1<=W;i++){
     sum+=i*i;
 }
 document.write(sum);
*/
function suma(){
  return (x + y);
}
function resta(){
    return (x - y);
}
function multi(){
    return (x * y);
}
function divi(){
    if(y==0)
      return 0;
    return (x / y);
}
var x,y,op;
var res = document.getElementById("result");
function calcular(){
    x = parseInt(document.getElementById("n1").value);
    y = parseInt(document.getElementById("n2").value);
    op = document.getElementById("oper").value;
    
    switch(op){
        case '1': res.value = suma();
            break 
        case '2': res.value = resta();
            break
        case '3':res.value = divi();
            break
        case '4':res.value = multi();
            break
    }
}

