import { useState } from "react"

function Ej2() {
    const [loading, setLoading] = useState(false)
    const [hecho, setHecho] = useState([])

    async function handleFetch() {
        setLoading(true)
        const response = await (
            await fetch ('https://cat-fact.herokuapp.com/facts')
        ).json()
        setHecho(
            response.map((hecho) => ({id: hecho['_id'], text: hecho.text}))
        )
        setLoading(false)
    }
    return (
        <section>
            {hecho.length > 0 ? undefined : <button onClick={handleFetch}>Buscar datos</button> }
            {loading && <p>Cargando... espera wey!-</p>}
            <ul className="container">
                {hecho.map((fact) => (
                    <p key = {fact.id}>{fact.text}</p>
                ))}
            </ul>
        </section>
    )
}

export default Ej2