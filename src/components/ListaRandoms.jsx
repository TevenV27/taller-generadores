
export function ListaRandoms({listOfRandoms, periodicy}) {
    return (
        <div style={{background: '#EEEEEE', padding: '5px 5px'}}>
            <h5>Lista de Números Aleatorios: {periodicy}</h5>
            <p>{JSON.stringify(listOfRandoms, null, 3)}</p>
        </div>
    )
}
