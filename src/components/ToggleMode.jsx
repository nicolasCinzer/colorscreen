/* eslint-disable react/prop-types */
import { FaMoon } from 'react-icons/fa'
import { FaSun } from 'react-icons/fa'

const ToggleMode = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <header>
        <button
          style={{ color: darkMode ? '#fff' : '#000' }}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <FaMoon /> : <FaSun />}
        </button>
      </header>
    </>
  )
}

export default ToggleMode
