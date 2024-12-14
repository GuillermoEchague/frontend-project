import { useState, useEffect } from 'react'
import { listCategoriesApi, listEndpointsApi } from './api/Service'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/footer'


function App() {
  const [count, setCount] = useState(0)
  const [endpoints, setEndpoints] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchEndpoints = async () => {
      setIsLoading(true)
      try {
        const data = await listEndpointsApi()
        const data2 = await listCategoriesApi("baka")
        console.log("🚀 ~ fetchEndpoints ~ data:", data)
        console.log("🚀 ~ fetchEndpoints ~ data2:", data2)
        setEndpoints(data)
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
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer  />
    </>
  )
}

export default App
