export function PruebaSeries({ series }) {
    return (
      <div style={{background: '#EEEEEE', padding: '5px 5px'}}>
        
        <h5>Prueba de Series: <span style={{ fontSize: 15, color: series.respuesta === "Es Independiente" ? "green" : "red" }}>{series.respuesta}</span></h5>
        <p>Matriz Frecuencia Obtenida:</p>
        <table className="table">
          <thead>
            <tr>
              <th>Rango</th>
              <th>0.0-0.2</th>
              <th>0.2-0.4</th>
              <th>0.4-0.6</th>
              <th>0.6-0.8</th>
              <th>0.8-1.0</th>
            </tr>
          </thead>
          <tbody>
            {series.MatrixFO?.map((item, index) => (
              <tr key={index}>
                <td>{`0.${index * 2}-${(index * 2) + 2}`}</td>
                {item.map((subitem, subindex) => (
                  <td key={subindex}>{subitem}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p>Matriz Frecuencia Obtenida - Frecuencia Esperada:</p>
        <table className="table">
          <thead>
            <tr>
              <th>Rango</th>
              <th>0.0-0.2</th>
              <th>0.2-0.4</th>
              <th>0.4-0.6</th>
              <th>0.6-0.8</th>
              <th>0.8-1.0</th>
            </tr>
          </thead>
          <tbody>
            {series.MatrixFEFO?.map((item, index) => (
              <tr key={index}>
                <td>{`0.${index * 2}-${(index * 2) + 2}`}</td>
                {item.map((subitem, subindex) => (
                  <td key={subindex}>{subitem}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p>X2 calculado: {series.X2}</p>
      </div>
    )
  }
  