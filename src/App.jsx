import { useState, useEffect } from 'react'
import ContainerCard from './components/ContainerCard'
import { listCategoriesCountApi,  } from './api/Service'
// import './App.css'


function App() {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
const [dataBody, setDataBody] = useState([])
  useEffect(() => {
    const fetchEndpoints = async () => {
      setIsLoading(true)
      try {
        const data = await listCategoriesCountApi("hug", 5);
        setDataBody(data.results || []);
        await listCategoriesCountApi("hug", 15).then((data) => {
          setDataBody(data.results || []);
        });
        setError(null)
      } catch (err) {
        setError(err.message)
        console.error('Failed to fetch endpoints:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchEndpoints()
  }, [])
  
  return (
    <>
    <h1>Consumo API Anime</h1>
      <ContainerCard  data={dataBody} isLoading={isLoading} error={error}/>
    </>
  )

}

export default App
