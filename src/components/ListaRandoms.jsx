
export function ListaRandoms({listOfRandoms, periodicy}) {
    return (
        <div>
            <h5>Lista de Números Aleatorios: {periodicy}</h5>
            <p>{JSON.stringify(listOfRandoms, null, 3)}</p>
        </div>
    )
}
