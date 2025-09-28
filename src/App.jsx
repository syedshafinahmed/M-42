import { Menu } from 'lucide-react'
import './App.css'
import NavBar from './NavBar/NavBar'
import { Suspense } from 'react'

function App() {
  const dataPromise = fetch('/data.json')
    .then(res => res.json())


  return (
    <>


      <Suspense fallback={<p>loading...</p>}>
        <NavBar dataPromise={dataPromise}></NavBar>
      </Suspense>

    </>
  )
}

export default App
