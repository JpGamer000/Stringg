function somaStrings(string){
let contador = 0;
for (var i =0; i<string.length; i++){
    if  (string[i] !== ' '){
        contador++;
    }
}
return contador;

}
