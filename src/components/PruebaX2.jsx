export function PruebaX2({ x2 }) {
    return (
      <div>
        <hr />
        <h5>Prueba de X2: <span style={{ fontSize: 15, color: x2.respuesta === "Pasa la prueba" ? "green" : "red" }}>{x2.respuesta}</span></h5>
        <table className="table">
          <thead>
            <tr>
              {["Rango", "Fe", "Fo", "Fe-Fo"].map((item, index) => {
                return (
                  <th key={index} scope="col">{item}</th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {/* Debes utilizar <tr> para representar filas en el cuerpo de la tabla */}
            {x2.rangos?.map((item, index) => (
              <tr key={index}>
                <td>{`${item[0]} - ${item[1]}`}</td>
                <td>{x2.listFe[index]}</td>
                <td>{x2.listFo[index]}</td>
                <td>{x2.listaCalc[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <span><strong>Cálculo de X2:</strong> {x2.Xcal}</span>
      </div>
    )
  }
  