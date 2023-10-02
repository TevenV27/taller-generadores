
export function ListaRandoms({listOfRandoms, periodicy}) {
    return (
        <div style={{background: '#EEEEEE', padding: '5px 15px'}}>
            <h5>Lista de Números Aleatorios: {periodicy}</h5>
            <p>{JSON.stringify(listOfRandoms, null, 3)}</p>
        </div>
    )
}
