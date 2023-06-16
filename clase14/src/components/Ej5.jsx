import { useEffect, useState } from "react"
import Form5 from "./Form5"

function Ej5() {
    const [post, setPost] = useState ('')
    const [loading, setLoading] = useState (false)
    const [error, setError] = useState(null)

    async function handleFetch () {
        setLoading(true)
        try {
            const response = await (
                await fetch('https://jsonplaceholder.typicode.com/posts')
            ).json()
            console.log(response);
            setPost(response.map((post) => {
                return {id: post.id, body: post.body, title: post.title}
            }))
            setError(null)
        } catch(error){
            setError(error)
        }
        setLoading(false)
    }

    useEffect(() => {
        handleFetch()
    }, [])

    async function handleSubmit(value) {
        const response = await (
          await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: value.title,
              body: value.body,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
        ).json()
        console.log(response)
      }
    
      return (
        <div>
          <Form5 onSubmit={handleSubmit} />
          {loading && <p>Cargando...</p>}
          {error && <p>{error.message}</p>}
          {post ? <div className='container-post'>
            {post.map((post) => (
              <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            ))}
          </div> : null}
        </div>
      )
    }

export default Ej5
