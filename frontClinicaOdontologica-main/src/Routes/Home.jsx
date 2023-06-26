import React, { useState, useEffect, useContext } from 'react'
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {theme} = useContext(ContextGlobal)
  const [data, setData] = useState();

  async function handleFetch(){
    const response = await(
      await fetch('https://jsonplaceholder.typicode.com/users')
    ).json()
    setData(response)
  }
  
  useEffect (() => {
    handleFetch()
  }, [])

//   useEffect(() => {
//     const fetchData = async () => {
//         axios('https://jsonplaceholder.typicode.com/users')
//         .then(res => setData(res.data))
//     }
//     fetchData()
// }, [])

  return (
    <main className="home" style={{background: theme.homeBackground, color: theme.color}} >
      <h1>Home</h1>
      <div className='card-grid'>
        {data ?. map(item =>{ // es el operador de acceso seguro en JavaScript. Se utiliza para verificar si data existe y no es null o undefined 
        //antes de llamar al método map().
        return <Card key={item.id} data={item} id={item.id} name={item.name} username={item.username}/>
      })}
      </div>
    </main>
  )
}

export default Home