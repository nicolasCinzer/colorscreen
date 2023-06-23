import { useEffect, useState } from 'react'

import ToggleMode from './components/ToggleMode'
import TextColor from './components/TextColor'
import InputColor from './components/InputColor'

import './App.css'

function App() {
  const [color, setColor] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    setDarkMode(color.toLocaleLowerCase() === 'black' || color.toLocaleLowerCase() === '#000')
  }, [color])

  return (
    <div
      className='backgroundColor'
      style={{ backgroundColor: color }}
    >
      <ToggleMode
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <TextColor
        darkMode={darkMode}
        color={color}
      />
      <InputColor
        darkMode={darkMode}
        setColor={setColor}
      />
    </div>
  )
}

export default App
