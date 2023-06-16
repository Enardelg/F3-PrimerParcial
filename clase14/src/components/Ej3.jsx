import { useState, useEffect } from "react"

function Ej3 () {
    const [hecho, setHecho] = useState('')

    async function handleFetch() {
        const response = await (
            await fetch ('https://cat-fact.herokuapp.com/facts/random')
        ).json()
        setHecho(
            response.text
        )
    }

    useEffect (() => {
        handleFetch()
    }, [])

    return (
        <section>
            <button onClick={handleFetch}>Siguiente hecho</button>
            <p>{hecho}</p>
        </section>
    )
}

export default Ej3