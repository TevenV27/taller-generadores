import { useState, useEffect } from "react";
import { LCG } from "../generators/LCG";
import { unifX2 } from "../tests/x2";
import { Kolmogorov } from "../tests/Kolgomorov";
import { pruebaCorridas } from "../tests/Corridas";
import { pruebaSeries } from "../tests/Series";
import { pruebaPoker } from "../tests/Poker";
import { PruebaX2 } from "../components/PruebaX2";
import { PruebaKolmogorov } from "../components/PruebaKolmogorov";
import { PruebaCorridas } from "../components/PruebaCorridas";
import { PruebaSeries } from "../components/PruebaSeries";
import { PruebaPoker } from "../components/PruebaPoker.jsx";
import { ListaRandoms } from "../components/ListaRandoms";

export function Lineal(props) {

  const [listOfRandoms, setListOfRandoms] = useState(null)
  const [periodicy, setPeriodicy] = useState(0)
  const [x2, setX2] = useState(null)
  const [kolmogorov, setKolmogorov] = useState(null)
  const [corridas, setCorridas] = useState(null)
  const [series, setSeries] = useState(null)
  const [poker, setPoker] = useState(null)

  useEffect(() => {
    const datos = {
      x0: parseInt(props.data.x0, 10),
      a: parseInt(props.data.a, 10),
      c: parseInt(props.data.c, 10),
      m: parseInt(props.data.m, 10),
      pk: parseInt(props.data.pk, 10)
    }

    if (!isNaN(datos.x0)) { // Verifica si x0 es un número válido
      const lcg = new LCG(datos.a, datos.x0, datos.c, datos.m)
      const { listOfRandoms: list, periodicy: per } = lcg.generateRandoms()
      setListOfRandoms(list)
      setPeriodicy(per)

      const x2 = unifX2(list, 16.9, 10)
      setX2(x2)
      const kol = Kolmogorov(list, 0.43, 10)
      setKolmogorov(kol)

      const cor = pruebaCorridas(list)
      setCorridas(cor)
      const ser = pruebaSeries(list, 36.42)
      setSeries(ser)
      const pok = pruebaPoker(list, datos.pk, 5.991)
      setPoker(pok)
    }
  }, [props]);

  return (
    <div style={{ width: '100%', height: '100%' }}>

      {listOfRandoms &&
        <ListaRandoms listOfRandoms={listOfRandoms} periodicy={periodicy} />
      }
      {
        x2 &&
        <PruebaX2 x2={x2} />
      }
      {kolmogorov &&
        <PruebaKolmogorov kolmogorov={kolmogorov} />
      }
      {corridas &&
        <PruebaCorridas corridas={corridas} />
      }
      {series &&
        <PruebaSeries series={series} />
      }
      {poker &&
        <PruebaPoker poker={poker} />
      }
    </div>
  )
}