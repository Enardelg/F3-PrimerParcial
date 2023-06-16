import { useState } from "react";

function Ej4() {
    const [title,setTitle] = useState('');
    const [body, setBody] = useState ('');

    async function handleSubmit(e) {
        e.preventDefault()
        if(!title || !body) return
        const response = await (
            await fetch ('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body : JSON.stringify({
                    title,
                    body
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        ).json()
        console.log(response);
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Titulo"
                value = {title}
                onChange={e => setTitle (e.target.value)}
                />
                <textarea placeholder="Contenido" value={body} onChange={e => setBody(e.target.value)}></textarea>
                <button>Guardar</button>
            </form>
        </section>
    )
}

export default Ej4