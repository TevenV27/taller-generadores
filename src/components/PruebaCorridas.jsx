
export function PruebaCorridas({ corridas }) {
    return (
        <div style={{background: '#EEEEEE', padding: '5px 15px'}}>
            
            <h5>Prueba de Corridas: <span style={{ fontSize: 15, color: corridas.respuesta === "INDEPENDIENTE" ? "green" : "red" }}>{corridas.respuesta}</span></h5>
            <p>Lista de Corridas:</p>
            <p>{JSON.stringify(corridas.listaCorridas, null, 3)}</p>
            <p>Número de Corridas: {corridas.numCorridas}</p>
            <p><strong>Zobs:</strong> {corridas.z}</p>
        </div>
    )
}
