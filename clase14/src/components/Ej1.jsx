import { useEffect, useState } from 'react'


function Ej1(){
    const [title,setTitle] = useState('')

    async function handleFetch() {
        const response = await (
            await fetch ('https://jsonplaceholder.typicode.com/posts/1')
        ).json()
        setTitle(response.title)
    }

    useEffect(() => {
        handleFetch()
    }, [])

    return (
        <section>
            {title}
        </section>
    )
}

export default Ej1
