function somaStrings(string){
let contador = 0;
for (var i =0; i<string.length; i++){
    if  (string[i] !== " "){
        contador++;
    }
}
return contador
}


function palindromo(string){
    let contador = 0;
    for (var i=0; i<string.length; i++){
        if (string[i] !== " "){
            string += string[i].toLowerCase()
            contador++            

        }
    }
    let comeco = 0;
    let final = string.length - 1;
    for (comeco < final) {
        if (string[comeco] != string[final]){
            return false;
        }
            comeco++;
            final--;
    }
    return true;
}
