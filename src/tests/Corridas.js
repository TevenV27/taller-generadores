/**
 * crea en un array respresentado el crecimiento y decrecimiento
 * en una lista de numeros aleatorios.
 *
 * @param listNum lista de numero aleatorios
 * @return lista con "+" y "-" que respresenta el crecimiento y decrecimiento
 *
 * @example
 * // Retorna [ '*', '+', '-', '+', '+', '-' ]
 * let resultado = Corrida([2,4,3,6,8,1];)
 */
function Corrida (ListNum){
    let Lista  = Array("*");
    for (let i=0; i<ListNum.length-1; i++){
        if  (ListNum[i] < ListNum [i+1]){
            Lista.push("+");
        }else{
            Lista.push("-");
        }
    }
    return Lista
}

/**
 * cuenta el numero de veces que cambia de signo una lista de "-" y "+"
 *
 * @param listCD lista de "-" y "+" que rep
 * @return lista con "+" y "-" que respresenta el crecimiento y decrecimiento en una lista de numeros
 *
 * @example
 * // Retorna 3
 * let resultado = ContarCorrida(["*","+","-","-","+","-"])
 */
function ContarCorrida(listaCD){
    let acum = 0;
    let aux = "";
    for(let i=0; i<listaCD.length - 1; i++){
        aux = listaCD[i];
        if (aux != listaCD[i+1]){
            acum +=1;
        }
    }
    return acum;
}

/**
 * funcion que realiza test de independicia a una lista de numeros aleatorios
 *
 * @param listNUm lista de numeros aleatorios
 * @return Objeto con una lista de corridas, numero de corridas,
 * respuesta si la lista es independiente o no y un z que determina la independencia
 * 
 * @example
 * // Retorna { listaCorridas: [ '*', '+', '-', '+', '+', '-' ],
                numCorridas: 4,
                respuesta: 'Es Independiente',
                z: 0.38633370464312805
            }

 * let resultado = PruebaCorrida([2,4,3,6,8,1])
 */
export function pruebaCorridas (ListNum){
    const listaCorridas = Corrida(ListNum);
    const numCorridas = ContarCorrida(listaCorridas);
    const N = ListNum.length;
    const z = (numCorridas - (((2*N)-1)/3)) / Math.sqrt(((16*N)-29)/90);
    let  respuesta = ""
    if ((z>-1.96) && (z<1.96))
    { respuesta = "INDEPENDIENTE" } 
    else{ respuesta =  "NO INDEPENDIENTE" }

    return {listaCorridas,numCorridas,respuesta,z}
}
