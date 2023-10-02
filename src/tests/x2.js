function funcionXcal(listFo, fe) {
    let SumXcalc = 0;
    let listXcalc = [];
    listFo.map((fo) => {
      let Xcalc = (fe - fo) ** 2 / fe;
      listXcalc.push(Xcalc);
      SumXcalc += Xcalc;
    });
  
    return {SumXcalc, listXcalc};
  }
  
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
  
  export function unifX2(ListRn, Xcrit, numRangos) {
    const rangos = CreateRangos(0, 1, numRangos);
    const Fe = ListRn.length / numRangos;
  
    let listFe = Array()
    for (let i = 0; i < 10; i++) { listFe.push(Fe) }
  
    const listFo = calFO(ListRn, rangos);
    const Xcal = funcionXcal(listFo, Fe).SumXcalc;
    const listaCalc = funcionXcal(listFo, Fe).listXcalc;
    
    let respuesta = "ACEPTADA"
    if (Xcal > Xcrit) {
      respuesta = "RECHAZADA"
    }
  
    return {rangos,listFo,listFe,listaCalc,Xcal,respuesta}
  }
  