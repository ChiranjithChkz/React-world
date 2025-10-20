import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/countries/'


const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())
  


function App() {
  return (
    <>
      <Suspense fallback={<h2>Your country is loading...</h2>}>
        <Countries countriesPromise = {countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
