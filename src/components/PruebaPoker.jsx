export function PruebaPoker({ poker }) {
    return (
      <div style={{background: '#EEEEEE', padding: '5px 15px'}}>
        
        <h5>Prueba de Poker: <span style={{ fontSize: 15, color: poker.respuesta === "INDEPENDIENTE" ? "green" : "red" }}>{poker.respuesta}</span></h5>
        <table className="table">
          <thead>
            <tr>
              {["Combinación", "Fo", "Fe", "Fe-Fo"].map((item, index) => {
                return (
                  <th key={index} scope="col">{item}</th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {/* Debes utilizar <tr> para representar filas en el cuerpo de la tabla */}
            {poker.tablares?.map((item, index) => (
              <tr key={index}>
                <td>{item}</td>
                <td>{poker.Fo[index]}</td>
                <td>{poker.Fe[index]}</td>
                <td>{poker.FeFo[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <span><strong>Cálculo de X2:</strong> {poker.x2}</span>

        <br />
        <br />
        <br />
      </div>
    )
  }
  