//Probabilidad de cada posible combinacion
const probabilidad = [[0.72, 0.27, 0.01],
                      [0.5040, 0.4320, 0.0360, 0.0270,  0.0010],
                      [0.3024, 0.5040, 0.0720, 0.1080, 0.0045 , 0.0090, 0.0001]]

const tabla = [["Todos Diferentes", "Un Par","Un Trío"],
               ["Todos Diferentes", "Un Par","Un Trío","Dos Pares","Poker"],
               ["Todos Diferentes", "Un Par","Un Trío", "Dos Pares","Poker", "Un Full","Quintilla"]]

// contar si un numero esta mas de una vez en una lista
function contarNumero(numero, lista) {
    let contador = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] == numero) {
            contador++;
        }
    }    
    return contador;   
}

function combinaciones(numero,cantDecimales) {
    // Contar la cantidad de veces que aparece cada dígito
    let contadores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let ind = 0; ind < numero.length; ind++) {
        contadores[parseInt(numero[ind])] += 1
    }
    //Analizar los contadores para determinar la combinación de cifras

    if (contadores.includes(5)) {
        return 6
    } else if (contadores.includes(4)) {
        return 4
    } else if (contadores.includes(3) && contadores.includes(2)) {
        return 5
    } else if (contadores.includes(3)) {
        return 2
    } else if (contarNumero(2, contadores) === 2) {
        return 3
    } else if (contarNumero(2, contadores) === 1) {
        return 1
    } else {
        return 0  //dist
    }
}

// recibe un numero y retorna  X decimales en string
function parteDecimal(numero , x){
    let parte_decimal = numero.toFixed(x)
    let decimal = parte_decimal.split(".",2) 
    return decimal[1]
}

function CalcFE(cantDecimales,n){
    let FE = Array()
    let P = probabilidad[cantDecimales-3]
    for (let i = 0; i < P.length; i++) {      
        FE.push(n * P[i])
    }
    return FE
}

export function pruebaPoker(ListaRn, decimales, Xcrit ){
    //calculo de la frecuencia esperada Fe = n * probabilidad[x]
    let n = ListaRn.length
    
    let Fe = CalcFE(decimales,n)
    // calculo de la frecuencia obtenida Fo
    let Fo = Array(3+((decimales-3)*2)).fill(0)

    for (let i = 0; i< n; i++){
        let aux = parteDecimal(ListaRn[i] , decimales)
        let aux2 = combinaciones(aux,decimales)
        Fo[aux2] += 1 
    }

    //Prueba de x2 -> (fe- fo) **2 / fe
    let x2 = 0
    let FeFo = Array()
    for (let i = 0; i<(3+((decimales-3)*2)); i++){
        let aux = (Math.pow((Fe[i] - Fo[i]),2))/ Fe[i]
        FeFo.push(aux)
        x2 += aux
    }  
    
    let respuesta
    if (x2 <= Xcrit){ 
        respuesta = "Es Independiente"
    }
    else{
        respuesta = "No es Independiente"
    }
    let tablares = tabla[decimales-3]
    return {ListaRn,Fo,Fe,FeFo,x2,respuesta,tablares}
}