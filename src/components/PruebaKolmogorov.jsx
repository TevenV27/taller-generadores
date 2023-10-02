export function PruebaKolmogorov({ kolmogorov }) {
    return (
      <div style={{background: '#EEEEEE', padding: '5px 5px'}}>
        
        <h5>Prueba de Kolmogorov: <span style={{ fontSize: 15, color: kolmogorov.respuesta === "Pasa la prueba" ? "green" : "red" }}>{kolmogorov.respuesta}</span></h5>
        <table className="table">
          <thead>
            <tr>
              {["Rango", "Fo", "FoA", "PoA", "PeA", "|PeA - PoA|"].map((item, index) => {
                return (
                  <th key={index} scope="col">{item}</th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {/* Debes utilizar <tr> para representar filas en el cuerpo de la tabla */}
            {kolmogorov.rangos?.map((item, index) => (
              <tr key={index}>
                <td>{`${item[0]} - ${item[1]}`}</td>
                <td>{kolmogorov.FO[index]}</td>
                <td>{kolmogorov.FOA[index]}</td>
                <td>{kolmogorov.POA[index]}</td>
                <td>{kolmogorov.PEA[index]}</td>
                <td>{kolmogorov.listFinal[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  