import { Menu } from 'lucide-react'
import './App.css'
import NavBar from './NavBar/NavBar'
import { Suspense } from 'react'
import Pricing from './Pricing/Pricing'
import ResultChart from './ResultChart/ResultChart'
import Marks from './Marks/Marks'
import axios from 'axios'

function App() {
  const dataPromise = fetch('/data.json')
    .then(res => res.json())
  const pricingPromise = fetch('/pricing.json')
    .then(res => res.json())

  const marksPromise = axios.get('marks.json')

  return (
    <>


      <Suspense fallback={<p>loading...</p>}>
        <NavBar dataPromise={dataPromise}></NavBar>
      </Suspense>


      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>
      }>
        <Pricing pricingPromise={pricingPromise}></Pricing>
      </Suspense>



      <Suspense fallback={<p>loading</p>}>
        <Marks marksPromise={marksPromise}></Marks>
      </Suspense>

      <ResultChart></ResultChart>

    </>
  )
}

export default App
