//funcion auxiliar que define la posicion que va a tener en el array mas adelante...
function index(n){
    if (n>=0 && n<0.2) return 0;
    if (n>=0.2 && n<0.4) return 1;
    if (n>=0.4 && n<0.6) return 2;
    if (n>=0.6 && n<0.8) return 3;
    if (n>=0.8 && n<1) return 4;
    return "Error : Numero incorrecto";
}

//crea una matrix inicializada con todos su elementos en 0
function CrearMatriz(filas,columnas){
    let Matriz = Array();
    for (let i=0; i<columnas;i++){
        Matriz.push([]);
        for( let j=0; j<filas;j++){
            Matriz[i].push(0);
        }
    }
    return Matriz;
}   

export function pruebaSeries (listaRn , X2crit){
    let Respuesta =  new Object()
    let MatrixFEFO = CrearMatriz(5,5);
    let MatrixFO = CrearMatriz(5,5);

    for(let i=0; i<listaRn.length-1; i += 2){
        let x = index(listaRn[i]); // define posicion en la matriz
        let y = index(listaRn[i+1]);
        MatrixFO[x][y] += 1;
    }

    const FE = (listaRn.length/2)/25;
    let X2 = 0;
    for(let i=0; i<MatrixFEFO.length;i++){
        for(let j=0;j<MatrixFEFO[i].length;j++){
           let aux = ((Math.pow((FE - MatrixFO[i][j]),2)) / FE).toFixed(1);
           X2 = ((parseFloat(aux)*1000) + X2*1000)/1000;
           MatrixFEFO[i][j] = parseFloat(aux);
        }
    }

    let respuesta = "INDEPENDIENTE"
    if (X2 > X2crit) {
        respuesta = "NO INDEPENDIENTE"}

    return{MatrixFO,FE,MatrixFEFO,X2,respuesta}
}
