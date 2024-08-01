import { useState } from 'react'
import { Home } from './components/Home'
import './App.css'

function App() {

  return (
    <main className='min-h-screen w-full bg-image-small md:bg-image-large bg-color-red flex items-center justify-center'>
      <Home />
    </main>
  )
}

export default App
