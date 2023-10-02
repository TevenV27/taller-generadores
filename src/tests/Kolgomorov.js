
function CreateRangos(iniValor, FinalValor, numRangos) {
    const pasoRango = (FinalValor - iniValor) / numRangos;
    const listRangos = [];
    for (let ind = 0; ind < numRangos; ind++) {
      let rx = [
        iniValor + (pasoRango * ind).toFixed(1),
        iniValor + (pasoRango * (ind + 1)).toFixed(1),
      ];
      listRangos.push(rx);
    }
    
  return listRangos;
}

function calFO(ListaRn, rangos) {
    let listFO = Array(rangos.length).fill(0);
  
    ListaRn.map((rn) => {
      for (let i = 0; i < rangos.length; i++) {
        let rango = rangos[i];
        if (rn >= rango[0] && rn < rango[1]) {
          listFO[i]++;
          break;
        }
      }
    });
    return listFO;
  }

function CalcFOA(listFO){
    let listFOA = Array();
    let aux = 0;
    for(let i = 0; i< listFO.length; i++){
        let FOi = listFO[i];
        aux += FOi
        listFOA.push(aux)
    }
    return listFOA;
}

function CalcPOA(listFO,numDatos){
    var listPOA = Array();
    let aux = 0;
    for(let i = 0; i< listFO.length; i++){
        let FOi = listFO[i];
        aux = ((aux*1000) + (FOi/numDatos)*1000)/1000
        listPOA.push(aux)
    }
    return listPOA;
}

function CalcPEA (numRangos,numDatos){
    const PEA1 = 1/numRangos;
    let listPEA = Array();
    for (let i = 1; i<=numRangos;i++){
        listPEA.push(parseFloat((PEA1*i).toFixed(2)));
    }
    return listPEA
}
export function Kolmogorov (ListRn,DM,numRangos){
    const DMcrit = 0.805/Math.sqrt(ListRn.length) // nivel de significacion = 0.1
    const rangos = CreateRangos(0,1,numRangos);
    const FO = calFO(ListRn,rangos)
    const FOA = CalcFOA(FO);
    const POA = CalcPOA(FO,ListRn.length);
    const PEA = CalcPEA(numRangos,ListRn.length);
    let respuesta = "ACEPTADA"
    var listFinal = Array();
    for (let i = 0; i<numRangos;i++){
        let aux  = 0
        
        aux = Math.abs(PEA[i] - POA [i])
        listFinal.push(aux);
        if (aux>DMcrit){
            respuesta = "RECHAZADA"
        }
    }

    return {rangos,FO,FOA,POA,PEA,listFinal,respuesta}

}